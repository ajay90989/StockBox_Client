const router = require("express").Router()
const { checkPermission } = require('../Middleware/permissionMiddleware'); // Path to your middleware

const {AddSignal,getSignal,deleteSignal,detailSignal,closeSignal,targethitSignal} = require('../Controllers/Signal')

const PERMISSIONS = {
    ADD: 'addsignal',
    VIEW: 'viewsignal',
    ALL_VIEW: 'allviewsignal',
    DELETE: 'deletesignal',
    CLOSE: 'closesignal',
    HIT: 'targethit',
  };
  

  
router.post('/signal/add', AddSignal);
router.get('/signal/list', getSignal);
router.get('/signal/delete/:id', deleteSignal);
router.get('/signal/detail/:id', detailSignal);
router.post('/signal/closesignal', closeSignal);
router.post('/signal/targethitsignal', targethitSignal);


module.exports = router;
