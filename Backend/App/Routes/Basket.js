const router = require("express").Router()
const { checkPermission } = require('../Middleware/permissionMiddleware'); // Path to your middleware
const {AddBasket,getBasket,updateBasket,deleteBasket,detailBasket,statusChange,activeBasket} = require('../Controllers/Basket')


const PERMISSIONS = {
    ADD: 'addbasket',
    VIEW: 'viewbasket',
    ALL_VIEW: 'allviewbasket',
    UPDATE: 'editbasket',
    DELETE: 'deletebasket',
    CHANGE_STATUS: 'basketchangestatus',
  };
  

router.post('/basket/add', AddBasket);
router.get('/basket/list', getBasket);
router.put('/basket/update', updateBasket);
router.get('/basket/delete/:id', deleteBasket);
router.get('/basket/detail/:id', detailBasket);
router.post('/basket/change-status', statusChange);
router.get('/basket/activebasket',   activeBasket);


module.exports = router;
