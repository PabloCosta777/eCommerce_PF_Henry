let express = require("express");
let router = express.Router() ;
let simpleResponse =require('../middleware/simpleresponse')   
let postProduct = require('../Controllers/postProduct')

router.get('/',  simpleResponse)
router.post('/', postProduct)
router.patch('/',simpleResponse)

module.exports = router;
