let express = require("express");
let router = express.Router() ;
let simpleResponse =require('../middleware/simpleresponse')   
let postProduct = require('../Controllers/postProduct')
const getProductDB = require("../Controllers/DBgetProducts.js")
let orderProductByBrand = require('../Controllers/orderProductByBrand')
let orderProductByPrice = require("../Controllers/orderProductByPrice")
let detailProduct = require("../Controllers/getProductById")
let getProductByName = require('../Controllers/getProductByName')

router.get('/',  getProductDB)
router.post('/', postProduct)
router.patch('/',simpleResponse)
router.get('/name',getProductByName)
router.get('/orderName/:nameOrder', orderProductByBrand )
router.get('/orderPrice/:priceOrder', orderProductByPrice )
router.get('/:id', detailProduct )


module.exports = router;
