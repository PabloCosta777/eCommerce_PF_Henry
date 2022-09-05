let express = require("express");
let router = express.Router() ;
let simpleResponse =require('../middleware/simpleresponse')   
let postProduct = require('../Controllers/postProduct')
const getProductDB = require("../Controllers/DBgetProducts.js")
let orderProductByBrand = require('../Controllers/orderProductByBrand')
let orderProductByPrice = require("../Controllers/orderProductByPrice")
const getProductByName = require('../Controllers/getProductByname.js')

router.get('/',  getProductDB)
router.get('/name',getProductByName)
router.post('/', postProduct)
router.patch('/',simpleResponse)
router.get('/orderName/:nameOrder', orderProductByBrand )
router.get('/orderPrice/:priceOrder', orderProductByPrice )


module.exports = router;
