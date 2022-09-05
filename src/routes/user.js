let express = require("express");
let router = express.Router();
let simpleResponse = require("../middleware/simpleresponse");
let login =require('../Controllers/loginUser')
let register =require('../Controllers/Register')

router.get("/login", login);
router.post("/register", register);
router.patch("/", simpleResponse);

module.exports = router;
