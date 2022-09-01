let express = require("express");
let router = express.Router();
let product= require('./product')
let user =require('./user')



router.use('/product',product)
router.use('/user',user)

module.exports = router;