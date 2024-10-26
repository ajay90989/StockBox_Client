const db = require("../Models");
const multer = require('multer');
const xlsx = require('xlsx');
const csv = require('csv-parser');
const path = require('path');
const axios = require('axios');
const fs = require('fs');
var dateTime = require('node-datetime');
const cron = require('node-cron');
const Stock_Modal = db.Stock;
const Clients_Modal = db.Clients;


cron.schedule('0 1 * * *', async () => {
    await DeleteTokenAliceToken();
}, {
    scheduled: true,
    timezone: "Asia/Kolkata"
});

cron.schedule('0 2 * * *', async () => {
    await AddBulkStockCron();
}, {
    scheduled: true,
    timezone: "Asia/Kolkata"
});

cron.schedule('0 4 * * *', async () => {
    await TradingStatusOff();
}, {
    scheduled: true,
    timezone: "Asia/Kolkata"
});



async function AddBulkStockCron(req, res) {
    try {
      const config = {
          method: 'get',
          url: 'https://margincalculator.angelbroking.com/OpenAPI_File/files/OpenAPIScripMaster.json',
      };
  
      const response = await axios(config);
      if (response.data.length > 0) {
  
  
          const filteredDataO = response.data.filter(element =>
              (element.instrumenttype === 'OPTIDX' || element.instrumenttype === 'OPTSTK') &&
              element.exch_seg === "NFO" && element.name != ""
          );
          const filteredDataF = response.data.filter(element =>
              (element.instrumenttype === 'FUTSTK' || element.instrumenttype === 'FUTIDX') &&
              element.exch_seg === "NFO" && element.name != ""
          );
  
          // const filteredDataMF = response.data.filter(element =>
          //     element.instrumenttype === 'FUTCOM' && element.name != ""
          // );
          // const filteredDataMO = response.data.filter(element =>
          //     (element.instrumenttype === 'OPTFUT' || element.instrumenttype === 'OPTCOM') && element.name != ""
          // );
          // const filteredDataCO = response.data.filter(element =>
          //     element.instrumenttype === 'OPTCUR' && element.name != ""
          // );
          // const filteredDataCF = response.data.filter(element =>
          //     element.instrumenttype === 'FUTCUR' && element.name != ""
          // );
          const filteredDataC = response.data.filter(element =>
              (element.symbol.slice(-3) === '-EQ' || element.symbol.slice(-3) === '-BE') && element.name != ""
          );
  
          // const filteredDataBO = response.data.filter(element =>
          //     (element.instrumenttype === 'OPTIDX' || element.instrumenttype === 'OPTSTK') &&
          //     element.exch_seg === "BFO" && element.name != ""
          // );
  
          // const filteredDataBF = response.data.filter(element =>
          //     (element.instrumenttype === 'FUTSTK' || element.instrumenttype === 'FUTIDX') &&
          //     element.exch_seg === "BFO" && element.name != ""
          // );
          // const filteredDataBC = response.data.filter(element =>
          //     element.instrumenttype === "" && element.exch_seg === "BSE" && element.name != ""
          // );
  
          // console.log("filteredDataBC", filteredDataBC.length)
      
          // Segment O -OPTION
          const userDataSegment_O = await createUserDataArray(filteredDataO, "O");
          console.log("O")
          await insertData(userDataSegment_O);
          console.log("O")
          // Segment F - FUTURE
          const userDataSegment_F = await createUserDataArray(filteredDataF, "F");
          await insertData(userDataSegment_F);
          console.log("F")
          // Segment C -CASH
          const userDataSegment_C = await createUserDataArray(filteredDataC, "C");
          await insertData(userDataSegment_C);
          console.log("C")
  
  
          // Segment MF MCX FUTURE
          // const userDataSegment_MF = await createUserDataArray(filteredDataMF, "MF");
          // await insertData(userDataSegment_MF);
          // console.log("MF")
          // // Segment MO  MCX OPTION
          // const userDataSegment_MO = createUserDataArray(filteredDataMO, "MO");
          // await insertData(userDataSegment_MO);
          // console.log("MO")
  
  
  
  
          // Segment CO CURRENCY OPTION
          // const userDataSegment_CO = await createUserDataArray(filteredDataCO, "CO");
          // await insertData(userDataSegment_CO);
          // console.log("CO")
  
          // // Segment CF  CURRENCY FUTURE
          // const userDataSegment_CF = await createUserDataArray(filteredDataCF, "CF");
          // await insertData(userDataSegment_CF);
          // console.log("CF")
  
          // // Segment BF
          // const userDataSegment_BF = await createUserDataArray(filteredDataBF, "BF");
          // await insertData(userDataSegment_BF);
          // console.log("BF")
          // // Segment BO
          // const userDataSegment_BO = await createUserDataArray(filteredDataBO, "BO");
          // await insertData(userDataSegment_BO);
          // console.log("BO")
  
          // // Segment BC
          // const userDataSegment_BC = await createUserDataArray(filteredDataBC, "BC");
          // await insertData(userDataSegment_BC);
          // console.log("BC")
          
  
    
          return res.send({status:true})
      } else {
          return
      }
  } catch (error) {
      console.log("Error TokenSymbolUpdate Try catch", error);
  }
  }
  
const DeleteTokenAliceToken = async () => {
    const pipeline = [
        {
            $addFields: {
                expiryDate: {
                    $dateFromString: {
                        dateString: {
                            $concat: [
                                { $substr: ["$expiry", 4, 4] }, // Year
                                "-",
                                { $substr: ["$expiry", 2, 2] }, // Month
                                "-",
                                { $substr: ["$expiry", 0, 2] } // Day
                            ]
                        },
                        format: "%Y-%m-%d"
                    }
                }
            }
        },
        {
            $match: {
                expiryDate: { $lt: new Date() }
            }
        },
        {
            $group: {
                _id: null,
                idsToDelete: { $push: "$_id" } // Collecting all matching _id values
            }
        },
        {
            $project: {
                _id: 0,
                idsToDelete: 1
            }
        },
  
    ];
    const result = await Stock_Modal.aggregate(pipeline)
    console.log("result", result.length)
    if (result.length > 0) {
        const idsToDelete = result.map(item => item._id);
        await Stock_Modal.deleteMany({ _id: { $in: result[0].idsToDelete } });
        console.log(`${result.length} expired tokens deleted.`);
        return
    } else {
        console.log('No expired tokens found.');
    }
  
    return ""
  }
  
  function createUserDataArray(data, segment) {
    let count = 0
    return data.map(element => {
        //   count++
        //   console.log("element.symbol",element , "count - ",count)
        // if (!element.name) {
        //     console.log(`Skipping element with empty name: ${element}`);
        //     console.log(`token: ${element.token}`);
        //     return null;
        // }
        const option_type = element.symbol.slice(-2);
        const expiry_s = dateTime.create(element.expiry);
        const expiry = expiry_s.format('dmY');
        const strike_s = parseInt(element.strike);
        const strike = parseInt(strike_s.toString().slice(0, -2));
        const day_start = element.expiry.slice(0, 2);
        const moth_str = element.expiry.slice(2, 5);
        const year_end = element.expiry.slice(-2);
        const Dat = new Date(element.expiry);
        const moth_count = Dat.getMonth() + 1;
  
        const tradesymbol_m_w = `${element.name}${year_end}${moth_count}${day_start}${strike}${option_type}`;
  
        return {
            symbol: element.name,
            expiry: expiry,
            expiry_month_year: expiry.slice(2),
            expiry_date: expiry.slice(0, -6),
            expiry_str: element.expiry,
            strike: strike,
            option_type: option_type,
            segment: segment,  // Default segment
            instrument_token: element.token,
            lotsize: element.lotsize,
            tradesymbol: element.symbol,
            tradesymbol_m_w: tradesymbol_m_w,
            exch_seg: element.exch_seg
        };
    });
  }
  async function insertData(dataArray) {
    //console.log("dataArray ",dataArray)
    try {
        const existingTokens = await Stock_Modal.distinct("instrument_token", {});
        const filteredDataArray = dataArray.filter(userData => {
            return !existingTokens.includes(userData.instrument_token);
        });
  
        await Stock_Modal.insertMany(filteredDataArray);
    } catch (error) {
        console.log("Error in insertData:", error)
    }
  
  }



  async function TradingStatusOff() {
    try {
        // Find active clients
        const result = await Clients_Modal.find({ del: 0, ActiveStatus: 1 });
        
        // Update trading status for each active client
        if (result.length > 0) {
            const updateResult = await Clients_Modal.updateMany(
                { del: 0, ActiveStatus: 1 },
                { $set: { tradingstatus: 0 } }
            );

            console.log(`Updated trading status for ${updateResult.modifiedCount} active clients.`);
        } else {
            console.log('No active clients found to update.');
        }
    } catch (error) {
        console.error('Error updating trading status:', error);
    }
}
  
  module.exports = { AddBulkStockCron,DeleteTokenAliceToken };
