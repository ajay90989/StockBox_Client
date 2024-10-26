const router = require("express").Router()
const {getcount} = require('../Controllers/Dashboard')

router.get('/dashboard/getcount', getcount);



module.exports = router;
