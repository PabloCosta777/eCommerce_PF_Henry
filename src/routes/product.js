let express = require("express");
let router = express.Router() ;
let simpleResponse =require('../middleware/simpleresponse')   
let postProduct = require('../Controllers/postProduct')
const getProductDB = require("../Controllers/DBgetProducts.js")
let orderProductByBrand = require('../Controllers/orderProductByBrand')
let orderByPrice = require("../Controllers/orderProductByPrice")

router.get('/',  getProductDB)
router.post('/', postProduct)
router.patch('/',simpleResponse)
router.get('/orderName', orderProductByBrand )
router.get('/orderPrice', orderByPrice )


module.exports = router;
