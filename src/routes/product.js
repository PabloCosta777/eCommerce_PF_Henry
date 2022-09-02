let express = require("express");
let router = express.Router() ;
let simpleResponse =require('../middleware/simpleresponse')   

router.get('/',  simpleResponse)
router.post('/', simpleResponse)
router.patch('/',simpleResponse)

module.exports = router;
