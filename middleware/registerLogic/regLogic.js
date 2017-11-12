var mongoose = require("mongoose"),
regModel = require("../../models/register.js")
//regModel = mongoose.model("User");

exports.ChkUsrExst = function(user){
    regModel.findOne({ UserName: user.UserName},function(err,data){
        if(err)
        console.log("this username is not unique");
        else
        return true;
    });
};