const db = require("../Models");
const multer = require('multer');
const xlsx = require('xlsx');
const csv = require('csv-parser');
const path = require('path');
const axios = require('axios');
const fs = require('fs');
var dateTime = require('node-datetime');
const Stock_Modal = db.Stock;



class Stock {


 

    async AddStock(req, res) {
        try {
            const { symbol } = req.body;
    
          
            if (!symbol) {
              return res.status(400).json({ status: false, message: "symbol is required" });
            }
        
          
           // console.log("Request Body:", req.body);
    
            const result = new Stock_Modal({
                symbol,
          
            });
    
            await result.save();
    
            //console.log("Stock successfully added:", result);
            return res.json({
                status: true,
                message: "Stock added successfully",
                data: result,
            });
    
        } catch (error) {
            // Enhanced error logging
            console.log("Error adding Stock:", error);
    
            return res.status(500).json({
                status: false,
                message: "Server error",
                error: error.message,
            });
        }
    }
    

  async getStock(req, res) {
    try {

     
     
      const { } = req.body;

      const result = await Stock_Modal.find({ del: false });


      return res.json({
        status: true,
        message: "get",
        data:result
      });

    } catch (error) {
      return res.json({ status: false, message: "Server error", data: [] });
    }
  }

  async getStockByService(req, res) {
    try {

     
   
      const { segment,symbol } = req.body;

      const result = await Stock_Modal.aggregate([
        {
          $match: { 
            segment: segment,
            symbol: { $regex: symbol, $options: 'i' }  // Like query for symbol
          }
        },
        {
          $group: {
            _id: "$symbol",  
          }
        }
      ]);

      return res.json({
        status: true,
        message: "get",
        data:result
      });

    } catch (error) {
      return res.json({ status: false, message: "Server error", data: [] });
    }
  }




  
  async getStocksByExpiry(req, res) {
    try {
      const { segment,symbol } = req.body;

      // Current date to get the month
      const currentDate = new Date();
      const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0'); // Get current month in 'MM' format
      const currentYear = String(currentDate.getFullYear()); // Get last two digits of the current year

      // Create the expiry months dynamically for the next two months
      const expiryMonths = [];
      for (let i = 0; i < 3; i++) { // Current month + next 2 months
          const month = (parseInt(currentMonth) + i) % 12 || 12; // Adjust month to wrap around after December
          const year = month < currentMonth ? (parseInt(currentYear) + 1) : currentYear; // Increment year if wrapped
          expiryMonths.push(`${String(month).padStart(2, '0')}${year}`);
      }
let option_type;
if(segment=="F")
{
  option_type= "UT";
}
else if(segment=="C")
  {
    option_type= "EQ";
  }
  else
{
   option_type= "PE";
}

      // Build query
    // Build aggregation pipeline
    const pipeline = [
      {
          $match: {
              symbol: symbol,
              segment: segment,
              option_type: option_type,
              expiry_month_year: { $in: expiryMonths }
          }
      },
      {
          $group: {
              _id: "$expiry", // Group by expiry date
              stock: { $first: "$$ROOT" } // Get the first document for each expiry
          }
      },
      {
          $project: {
              expiry: "$_id", // Rename _id to expiry
              stock: 1, // Include the stock document
              _id: 0 // Exclude the original _id field from the output
          }
      },
      {
          $sort: { expiry: 1 } // Optional: Sort by expiry date in ascending order
      }
  ];




  // Execute the aggregation
  const result = await Stock_Modal.aggregate(pipeline);

  
  // Log the result of aggregation for debugging
  // console.log("Aggregation Result:", JSON.stringify(result, null, 2));
 console.log("result",result)
   
  return res.json({
      status: true,
      message: "Stocks retrieved successfully",
      data: result
  });
    
  } catch (error) {
      console.error("Error executing query:", error);
      return res.json({ status: false, message: "Server error", data: [] });
  }
}
    

async getStocksByExpiryByStrike(req, res) {
  try {
    const { segment,symbol,expiry } = req.body;

let option_type;
if(segment=="F")
{
option_type= "UT";
}
else if(segment=="C")
{
  option_type= "EQ";
}
else
{
 option_type= "PE";
}

    // Build query
  // Build aggregation pipeline
  const pipeline = [
    {
        $match: {
            symbol: symbol,
            segment: segment,
            option_type: option_type,
            expiry: expiry
        }
    },
    {
        $project: {
            expiry: 1, // Include the expiry field
            stock: "$$ROOT", // Include the entire stock document
            _id: 0 // Exclude the _id field from the output
        }
    },
    {
        $sort: { expiry: 1 } // Optional: Sort by expiry date in ascending order
    }
];




// Execute the aggregation
const result = await Stock_Modal.aggregate(pipeline);

// Log the result of aggregation for debugging
console.log("Aggregation Result:", JSON.stringify(result, null, 2));

return res.json({
    status: true,
    message: "Stocks retrieved successfully",
    data: result
});
  
} catch (error) {
    console.error("Error executing query:", error);
    return res.json({ status: false, message: "Server error", data: [] });
}
}
  



  async activeStock(req, res) {
    try {

     
     
      const { } = req.body;

      const result = await Stock_Modal.find({ del: false,status: true });


      return res.json({
        status: true,
        message: "get",
        data:result
      });

    } catch (error) {
      return res.json({ status: false, message: "Server error", data: [] });
    }
  }

  async detailStock(req, res) {
    try {
        // Extract ID from request parameters
        const { id } = req.params;

        // Check if ID is provided
        if (!id) {
            return res.status(400).json({
                status: false,
                message: "Stock ID is required"
            });
        }

        const Stock = await Stock_Modal.findById(id);

        if (!Stock) {
            return res.status(404).json({
                status: false,
                message: "Stock not found"
            });
        }

        return res.json({
            status: true,
            message: "Stock details fetched successfully",
            data: Stock
        });

    } catch (error) {
        console.log("Error fetching Stock details:", error);
        return res.status(500).json({
            status: false,
            message: "Server error",
            data: []
        });
    }
}


  async updateStock(req, res) {
    try {
      const { id, symbol } = req.body;

   
      if (!symbol) {
        return res.status(400).json({ status: false, message: "symbol is required" });
      }
  
  
      if (!id) {
        return res.status(400).json({
          status: false,
          message: "Stock ID is required",
        });
      }
  
      const updatedStock = await Stock_Modal.findByIdAndUpdate(
        id,
        {
          symbol,
        },
        { stock: true, runValidators: true } // Options: return the updated document and run validators
      );
  
      if (!updatedStock) {
        return res.status(404).json({
          status: false,
          message: "Stock not found",
        });
      }
  
      console.log("Updated Stock:", updatedStock);
      return res.json({
        status: true,
        message: "Stock updated successfully",
        data: updatedStock,
      });
  
    } catch (error) {
      console.log("Error updating Stock:", error);
      return res.status(500).json({
        status: false,
        message: "Server error",
        error: error.message,
      });
    }
  }
  
  
  async deleteStock(req, res) {
    try {
      const { id } = req.params; // Extract ID from URL params

      if (!id) {
        return res.status(400).json({
          status: false,
          message: "Stock ID is required",
        });
      }


      const deletedStock = await Stock_Modal.findByIdAndUpdate(
        id, 
        { del: true }, // Set del to true
        { new: true }  // Return the updated document
      );


      if (!deletedStock) {
        return res.status(404).json({
          status: false,
          message: "Stock not found",
        });
      }

      console.log("Deleted Stock:", deletedStock);
      return res.json({
        status: true,
        message: "Stock deleted successfully",
        data: deletedStock,
      });
    } catch (error) {
      console.log("Error deleting Stock:", error);
      return res.status(500).json({
        status: false,
        message: "Server error",
        error: error.message,
      });
    }
  }

  async  statusChange(req, res) {
    try {
        const { id, status } = req.body;
  
        // Validate status
        const validStatuses = ['true', 'false'];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({
                status: false,
                message: "Invalid status value"
            });
        }
  
        // Find and update the plan
        const result = await Stock_Modal.findByIdAndUpdate(
            id,
            { status: status },
            { new: true } // Return the updated document
        );
  
        if (!result) {
            return res.status(404).json({
                status: false,
                message: "Stock not found"
            });
        }
  
        return res.json({
            status: true,
            message: "Status updated successfully",
            data: result
        });
  
    } catch (error) {
        console.log("Error updating status:", error);
        return res.status(500).json({
            status: false,
            message: "Server error",
            data: []
        });
    }
  }
  async AddBulkStock(req, res) {
    try {
       
        const file = req.file;

        if (!file) {
            return res.status(400).json({
                status: false,
                message: "File is required",
            });
        }

        const ext = path.extname(file.originalname);
        let stocks = [];

        if (ext === '.csv') {
            // Handle CSV file
        
            stocks = await new Promise((resolve, reject) => {
              const stocks = [];
              require('stream').Readable.from(file.buffer)
                  .pipe(require('csv-parser')())
                  .on('data', (row) => {
                      stocks.push(row);
                  })
                  .on('end', () => {
                      resolve(stocks);
                  })
                  .on('error', reject);
          });

        
        }else {
            return res.status(400).json({
                status: false,
                message: "Unsupported file format. Only CSV  files are allowed.",
            });
        }

        const results = [];
        for (let stock of stocks) {
            const { symbol } = stock;

            // Check if the stock symbol already exists
            const existingStock = await Stock_Modal.findOne({ symbol });

            if (existingStock) {
                // Update the existing stock
               
                await existingStock.save();
                results.push({ symbol, action: 'updated' });
            } else {
                // Add new stock
                const newStock = new Stock_Modal({ symbol });
                await newStock.save();
                results.push({ symbol, action: 'added' });
            }
        }

        return res.json({
            status: true,
            message: "Stocks processed successfully",
            data: results,
        });

    } catch (error) {
        console.log("Error processing stocks:", error);
        return res.status(500).json({
            status: false,
            message: "Server error",
            error: error.message,
        });
    }
}



}

  
  

module.exports = new Stock();