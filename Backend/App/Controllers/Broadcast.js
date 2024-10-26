const db = require("../Models");
const Broadcast_Modal = db.Broadcast;
const Clients_Modal = db.Clients;
const { sendFCMNotification } = require('./Pushnotification'); // Adjust if necessary


class BroadcastController {
    async AddBroadcast(req, res) {

        console.log(req.body);

        try {

            const { subject, message, service } = req.body;
           
              if (!subject) {
                return res.status(400).json({ status: false, message: "subject is required" });
              }
              if (!message) {
                return res.status(400).json({ status: false, message: "message is required" });
              }

              if (!service) {
                return res.status(400).json({ status: false, message: "service is required" });
              }
             
             
              let services;
              if (Array.isArray(service)) {
                  services = service.join(',');  // Convert array to comma-separated string
              } else if (typeof service === 'string') {
                  services = service;  // If it's already a string, use it directly
              } else {
                  return res.status(400).json({ status: false, message: "Invalid service format" });
              }
    
            // Create a new News record
            const result = new Broadcast_Modal({
                subject: subject,
                service: services,
                message:message,
            });
            
            // Save the result to the database
            await result.save();
    

    
  
            const clients = await Clients_Modal.find({ del: 0, ActiveStatus: 1 });

            if (!clients || clients.length === 0) {

            } else
              {
            const notificationTitle = 'Important Update';
            const notificationBody = 'New Broadcast Added......';
        
            for (const client of clients) {
              const deviceToken = client.devicetoken; // Adjust according to your token field name
        
              if (deviceToken) {
                try {
                  await sendFCMNotification(notificationTitle, notificationBody, deviceToken);
                } catch (error) {
                  console.error(`Failed to send notification to client with ID ${client._id}:`, error);
                }
              } else {
                console.log(`No device token found for client with ID ${client._id}`);
              }
            }
          }

            return res.json({
                status: true,
                message: "Broadcast added successfully",
            });
    
        } catch (error) {
            console.error("Server error:", error);
            return res.status(500).json({ status: false, message: "Server error", data: [] });
        }
    }

    // Get all Broadcast posts
    async getBroadcast(req, res) {
        try {

            const Broadcast = await Broadcast_Modal.find({ del: false }).sort({created_at:-1});

            return res.status(200).json({
                status: true,
                message: "Broadcast retrieved successfully",
                data: Broadcast
            });
        } catch (error) {
            console.error("Error retrieving Broadcast:", error);
            return res.status(500).json({
                status: false,
                message: "Server error",
                error: error.message
            });
        }
    }

    async activeBroadcast(req, res) {
        try {

            const Broadcast = await Broadcast_Modal.find({ del: false,status: true }).sort({created_at:-1});

            return res.status(200).json({
                status: true,
                message: "Broadcast retrieved successfully",
                data: Broadcast
            });
        } catch (error) {
            console.error("Error retrieving Broadcast:", error);
            return res.status(500).json({
                status: false,
                message: "Server error",
                error: error.message
            });
        }
    }


    // Get a single Broadcast post by ID
    async detailBroadcast(req, res) {
        try {
            const { id } = req.params;

            const Broadcast = await Broadcast_Modal.findById(id);

            if (!Broadcast) {
                return res.status(404).json({
                    status: false,
                    message: "Broadcast not found"
                });
            }

            return res.status(200).json({
                status: true,
                message: "Broadcast retrieved successfully",
                data: Broadcast
            });
        } catch (error) {
            console.error("Error retrieving Broadcast:", error);
            return res.status(500).json({
                status: false,
                message: "Server error",
                error: error.message
            });
        }
    }


    async updateBroadcast(req, res) {
        try {


            const { id, service, subject, message } = req.body;
              
           

            if (!id) {
                return res.status(400).json({
                    status: false,
                    message: "Broadcast ID is required",
                });
            }
    
            let services;
            if (Array.isArray(service)) {
                services = service.join(',');  // Convert array to comma-separated string
            } else if (typeof service === 'string') {
                services = service;  // If it's already a string, use it directly
            } else {
                return res.status(400).json({ status: false, message: "Invalid service format" });
            }
  
            const updatedBroadcast = await Broadcast_Modal.findByIdAndUpdate(
                id,
                {
                    service:services,
                    subject,
                    message,
                },
                { new: true, runValidators: true } // Options: return the updated document and run validators
            );
    
            // If the news item is not found
            if (!updatedBroadcast) {
                return res.status(404).json({
                    status: false,
                    message: "Broadcast not found",
                });
            }
    
            console.log("Updated Broadcast:", updatedBroadcast);
            return res.json({
                status: true,
                message: "Broadcast updated successfully",
                data: updatedBroadcast,
            });
    
        } catch (error) {
            console.error("Error updating Broadcast:", error);
            return res.status(500).json({
                status: false,
                message: "Server error",
                error: error.message,
            });
        }
    }
    
   
  
    // Delete a Broadcast post by ID
    async deleteBroadcast(req, res) {
        try {
            const { id } = req.params;

            // const deletedBroadcast = await Broadcast_Modal.findByIdAndDelete(id);
            const deletedBroadcast = await Broadcast_Modal.findByIdAndUpdate(
                id, 
                { del: true }, // Set del to true
                { new: true }  // Return the updated document
              );

            if (!deletedBroadcast) {
                return res.status(404).json({
                    status: false,
                    message: "Broadcast not found"
                });
            }

            return res.status(200).json({
                status: true,
                message: "Broadcast deleted successfully"
            });
        } catch (error) {
            console.error("Error deleting Broadcast:", error);
            return res.status(500).json({
                status: false,
                message: "Server error",
                error: error.message
            });
        }
    }
    async  statusChange(req, res) {
        try {
            const { id, status } = req.body;
      
            // Validate status

            const validStatuses = [true, false];
            if (!validStatuses.includes(status)) {
                return res.status(400).json({
                    status: false,
                    message: "Invalid status value"
                });
            }
      
            // Find and update the plan
            const result = await Broadcast_Modal.findByIdAndUpdate(
                id,
                { status: status },
                { new: true } // Return the updated document
            );
      
            if (!result) {
                return res.status(404).json({
                    status: false,
                    message: "Broadcast not found"
                });
            }
      
            return res.json({
                status: true,
                message: "Status updated successfully",
                data: result
            });
      
        } catch (error) {
            console.error("Error updating status:", error);
            return res.status(500).json({
                status: false,
                message: "Server error",
                data: []
            });
        }
      }
      
}

module.exports = new BroadcastController();
