const db = require("../Models");
const upload = require('../Utils/multerHelper'); 
const Signal_Modal = db.Signal;
mongoose  = require('mongoose');
const Clients_Modal = db.Clients;
const { sendFCMNotification } = require('./Pushnotification'); // Adjust if necessary




class Signal {

    async AddSignal(req, res) {
        try {

          await new Promise((resolve, reject) => {
            upload('report').fields([{ name: 'report', maxCount: 1 }])(req, res, (err) => {
                if (err) {
                    console.error('File upload error:', err);
                    return reject(err);
                }

                resolve();
            });
        });


            const { price,calltype,stock,tag1,tag2,tag3,stoploss,description,callduration,callperiod,add_by,expirydate,segment,optiontype,strikeprice,tradesymbol,lotsize } = req.body;
        
            const report = req.files['report'] ? req.files['report'][0].filename : null;

            var service;
// Set the service value based on the segment
if (segment == "C") {
  service = "66d2c3bebf7e6dc53ed07626";
} else if (segment == "O") {
  service = "66dfeef84a88602fbbca9b79";
} else {
  service = "66dfede64a88602fbbca9b72";
}

         
            const result = new Signal_Modal({
              price: price,
              service: service,
              strikeprice: strikeprice,
              calltype: calltype,
              callduration:callduration,
              callperiod:callperiod,
              stock: stock,
              tag1: tag1,
              tag2: tag2,
              tag3:tag3,
              targetprice1: tag1,
              targetprice2: tag2,
              targetprice3: tag3,
              stoploss: stoploss,
              description: description,
              report: report,
              add_by:add_by,
              expirydate: expirydate,
              segment:segment,
              optiontype: optiontype,
              tradesymbol:tradesymbol,
              lotsize: lotsize,
          });
    
            await result.save();
    
           
  
            const clients = await Clients_Modal.find({ del: 0, ActiveStatus: 1 });

            if (!clients || clients.length === 0) {

             } else
            {
            // Iterate through clients and send notifications
            const notificationTitle = 'Important Update';
            const notificationBody = 'New Signal Added......';
        
            for (const client of clients) {
              const deviceToken = client.devicetoken; // Adjust according to your token field name
        
              if (deviceToken) {
                try {
                  await sendFCMNotification(notificationTitle, notificationBody, deviceToken);

                } catch (error) {
                 // console.error(`Failed to send notification to client with ID ${client._id}:`, error);
                }
              } else {
              //  console.log(`No device token found for client with ID ${client._id}`);
              }
            }
          }

          return res.json({
            status: true,
            message: "Signal added successfully",
            data: result,
        });



        } catch (error) {
            // Enhanced error logging
            console.error("Error adding Signal:", error);
    
            return res.status(500).json({
                status: false,
                message: "Server error",
                error: error.message,
            });
        }
    }
    

  /*async getSignal(req, res) {
    try {

     
     
      const { } = req.body;

    //  const result = await Signal_Modal.find()
      const result = await Signal_Modal.find({ del: 0 });


      return res.json({
        status: true,
        message: "get",
        data:result
      });

    } catch (error) {
      return res.json({ status: false, message: "Server error", data: [] });
    }
  }
*/


async getSignal(req, res) {
  try {
    const { from, to, service, stock } = req.query;
    // Set today's date and midnight time for filtering

    // Default date range is today
 


    let fromDate;
    if (from) {
      fromDate = new Date(from) ;
    } 

    let toDate;
    if (to) {
      toDate = new Date(to);
      toDate.setHours(23, 59, 59, 999); // End of the specified date
    } 


    

    // Build the query object with dynamic filters
    let query = { del: 0 }; // Default query

    if (fromDate && toDate) {
      query.created_at = { $gte: fromDate, $lt: toDate };
    }

    if (service) {
      query.service = service; // Convert service ID to ObjectId
    }

    if (stock) {
      query.stock = stock; // Convert stock ID to ObjectId
    }

    // Log the query for debugging

    // Execute the query and populate service and stock details
   const result = await Signal_Modal.find(query)
      .populate({ path: 'service', select: 'title' }) // Populate only the title from service
      .populate({ path: 'stock', select: 'title' })
      .sort({ created_at: -1 }); // Sort in descending order


    

    return res.json({
      status: true,
      message: "Signals fetched successfully",
      data: result
    });
  } catch (error) {
    return res.json({
      status: false,
      message: "Server error",
      data: []
    });
  }
}





  async detailSignal(req, res) {
    try {
        // Extract ID from request parameters
        const { id } = req.params;

        // Check if ID is provided
        if (!id) {
            return res.status(400).json({
                status: false,
                message: "Signal ID is required"
            });
        }

        const Signal = await Signal_Modal.findById(id);

        if (!Signal) {
            return res.status(404).json({
                status: false,
                message: "Signal not found"
            });
        }

        return res.json({
            status: true,
            message: "Signal details fetched successfully",
            data: Signal
        });

    } catch (error) {
        console.error("Error fetching Signal details:", error);
        return res.status(500).json({
            status: false,
            message: "Server error",
            data: []
        });
    }
}


  
  async deleteSignal(req, res) {
    try {
      const { id } = req.params; // Extract ID from URL params

      if (!id) {
        return res.status(400).json({
          status: false,
          message: "Signal ID is required",
        });
      }

     // const deletedSignal = await Signal_Modal.findByIdAndDelete(id);

      const deletedSignal = await Signal_Modal.findByIdAndUpdate(
        id, 
        { del: 1 }, // Set del to true
        { new: true }  // Return the updated document
      );


      if (!deletedSignal) {
        return res.status(404).json({
          status: false,
          message: "Signal not found",
        });
      }

      console.log("Deleted Signal:", deletedSignal);
      return res.json({
        status: true,
        message: "Signal deleted successfully",
        data: deletedSignal,
      });
    } catch (error) {
      console.error("Error deleting Signal:", error);
      return res.status(500).json({
        status: false,
        message: "Server error",
        error: error.message,
      });
    }
  }


  
  async closeSignal(req, res) {
    try {

     
      const { id, targethit1,targethit2,targethit3,targetprice1,targetprice2,targetprice3,slprice,exitprice,closestatus,closetype, close_description } = req.body;
     console.log("req",req.body);

      let close_status = false;
      let closeprice = null;
      let closedate = null;
     
  
      if (closetype === "1") {
        // Close at target price
        close_status = true;
        closeprice = targetprice3 || targetprice2 || targetprice1;
        closedate = new Date();
      
      } else if (closetype === "2") {

        
        // Close based on closestatus and target price
        close_status = closestatus;
      
        if (closestatus) {
          closeprice = targetprice3 || targetprice2 || targetprice1;
          closedate = new Date();
        }
      
      } else if (closetype === "3") {
        // Close at stop-loss price
        close_status = true;
        closeprice = slprice;
        closedate = new Date();
      
      } else if (closetype === "4") {
        // Close at exit price
        close_status = true;
        closeprice = exitprice;
        closedate = new Date();
      }
      
      if (!id) {
        return res.status(400).json({
          status: false,
          message: "Signal ID is required",
        });
      }
  

      const updatedSignal = await Signal_Modal.findByIdAndUpdate(
        id,
        {
            closeprice:closeprice,
            close_status:close_status,
            close_description,
            targethit1,
            targethit2,
            targethit3,
            targetprice1,
            targetprice2,
            targetprice3,
            closedate: closedate
        },
        { signal: true, runValidators: true } // Options: return the updated document and run validators
      );
  
      if (!updatedSignal) {
        return res.status(404).json({
          status: false,
          message: "Signal not found",
        });
      }
  
      console.log("Close Signal:", updatedSignal);
      return res.json({
        status: true,
        message: "Signal Closed successfully",
        data: updatedSignal,
      });
  
    } catch (error) {
      console.error("Error updating Signal:", error);
      return res.status(500).json({
        status: false,
        message: "Server error",
        error: error.message,
      });
    }
  }
  

  async targethitSignal(req, res) {
    try {
      const { id, targethit, targetprice } = req.body;
  
      if (!id) {
        return res.status(400).json({
          status: false,
          message: "Signal ID is required",
        });
      }
  
      const updatedSignal = await Signal_Modal.findByIdAndUpdate(
        id,
        {
          targethit,
          targetprice,
        },
        { signal: true, runValidators: true } // Options: return the updated document and run validators
      );
  
      if (!updatedSignal) {
        return res.status(404).json({
          status: false,
          message: "Signal not found",
        });
      }
  
      console.log("Close Signal:", updatedSignal);
      return res.json({
        status: true,
        message: "Signal Target Hit successfully",
        data: updatedSignal,
      });
  
    } catch (error) {
      console.error("Error updating Signal:", error);
      return res.status(500).json({
        status: false,
        message: "Server error",
        error: error.message,
      });
    }
  }


}
module.exports = new Signal();