var express = require("express");

var burgers = require("../models/burger.js");

var router = express.Router();

//get all burgers
//send request to module which sends it to orm
//orm returns via module, module returns it back to controller to be rendered
router.get('/', (req, res){

    burgers.selectAll()
});





module.exports = router;
