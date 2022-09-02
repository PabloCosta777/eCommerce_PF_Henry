let express = require("express");
let router = express.Router() ;
let simpleResponse =require('../middleware/simpleresponse')   
let postProduct = require('../Controllers/postProduct')
const getProductDB = require("../Controllers/DBgetProducts.js")

router.get('/',  getProductDB)
router.post('/', postProduct)
router.patch('/',simpleResponse)

module.exports = router;
