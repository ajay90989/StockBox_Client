const db = require("../Models");
const Users_Modal = db.Users;
const Clients_Modal = db.Clients;
const Service_Modal = db.Service;
const Plan_Modal = db.Plan;
const Signal_Modal = db.Signal;


class Dashboard {


    async getcount(req, res) {
        try {
            // Count documents in the Clients_Modal collection where del is false
            const client = await Clients_Modal.countDocuments({ del: 0 });
            const user = await Users_Modal.countDocuments({ 
                del: 0, 
                _id: { $ne: "66bc8b0c3fb6f1724c02bfec" } 
              });
            const clientactive = await Clients_Modal.countDocuments({ del: 0,ActiveStatus:1 });
            const useractive = await Users_Modal.countDocuments({ del: 0,ActiveStatus:1 });

            const plan = await Plan_Modal.countDocuments({ del: false });
            const activeplan = await Plan_Modal.countDocuments({ del: false,status:"active" });

            const opensignal = await Signal_Modal.countDocuments({ close_status: false });
            const closesignal = await Signal_Modal.countDocuments({ close_status: true });


            const today = new Date();
            today.setHours(0, 0, 0, 0); // Set to the start of the day
            
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1); // Set to the start of the next day
            
            // Count open signals created today
            const todayOpenSignal = await Signal_Modal.countDocuments({
              close_status: false,
              created_at: { $gte: today, $lt: tomorrow }
            });
            
            // Count closed signals with today's close date
            const todayCloseSignal = await Signal_Modal.countDocuments({
              close_status: true,
              closeDate: { $gte: today, $lt: tomorrow }
            });


            const result = await Clients_Modal.find({ del: 0 })
    .sort({ _id: -1 })
    .limit(10);
    
            return res.json({
                status: true,
                message: "Count retrieved successfully",
                data: {
                    clientCountTotal: client,
                    userCountTotal: user,
                    clientCountActive: clientactive,
                    userCountActive: useractive,
                    PlanCountTotal: plan,
                    PlanCountActive: activeplan,
                    OpensignalCountTotal: opensignal,
                    CloseSignalCountTotal: closesignal,
                    todayOpenSignal:todayOpenSignal,
                    todayCloseSignal:todayCloseSignal,
                    Clientlist: result
                }
            });
    
        } catch (error) {
            return res.json({ status: false, message: "Server error", data: [] });
        }
    }
  
 
}
module.exports = new Dashboard();