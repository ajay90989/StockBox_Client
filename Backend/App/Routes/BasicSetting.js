const router = require("express").Router()
const { checkPermission } = require('../Middleware/permissionMiddleware');

const {AddBasicSetting,getSettings,getFreetrialActivity} = require('../Controllers/BasicSetting')


const PERMISSIONS = {
    ADD: 'addsetting',
  };

router.post('/basicsetting/add', AddBasicSetting);
router.get('/basicsetting/detail', getSettings);
router.get('/basicsetting/freetrial', getFreetrialActivity);



module.exports = router;
