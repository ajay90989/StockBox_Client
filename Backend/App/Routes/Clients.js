const router = require("express").Router()
const { checkPermission } = require('../Middleware/permissionMiddleware');

const {AddClient,getClient,updateClient,deleteClient,detailClient,statusChange,activeClient,processPayoutRequest,payoutList,freetrialList,deleteFreetrial,helpdeskList,deleteHelpdesk,myPlan} = require('../Controllers/Clients')





const PERMISSIONS = {
    ADD: 'addclient',
    VIEW: 'viewclient',
    ALL_VIEW: 'allviewclient',
    UPDATE: 'editclient',
    DELETE: 'deleteclient',
    CHANGE_STATUS: 'clientchangestatus',
  };

router.post('/client/add', AddClient);
router.get('/client/list', getClient);
router.put('/client/update', updateClient);
router.get('/client/delete/:id', deleteClient);
router.get('/client/detail/:id', detailClient);
router.post('/client/change-status', statusChange);
router.get('/client/activeclient',   activeClient);
router.get('/client/payoutlist', payoutList);
router.get('/client/freetriallist', freetrialList);
router.get('/client/freetrialdelete/:id', deleteFreetrial);
router.get('/client/helpdesklist', helpdeskList);
router.get('/client/helpdeskdelete/:id', deleteHelpdesk);
router.post('/client/process-payout-request', processPayoutRequest);
router.get('/client/myplan/:id', myPlan); 



module.exports = router;
