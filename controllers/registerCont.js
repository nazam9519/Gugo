'use strict'

// also should be returning http codes with messages
var express = require('express'),
router = express.Router(), 
regModel = require("../models/register.js");
//regLogic = require("../middleware/registerLogic/regLogic.js");



router.route('/register').post(function(req, res){
    
    var register = new regModel(req.body)
    
              register.save(function(err){
                if(err)
                    console.log(err);
                    // return http stating record already exist
                else
                    console.log('User Created')
        });
});



module.exports = router;