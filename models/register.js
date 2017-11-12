var mongoose = require("mongoose"),
Schema = mongoose.Schema,
bcrypt = require("bcrypt"),
uniqueValidator = require('mongoose-unique-validator');

var enuRStatus = {
  values: ['single', 'married', 'relationship']
//, message: 'Status is required.'
}

var enuGender = {
  values: ['M', 'F']
}

var userModel = new Schema({
    FirstName:{
        type: String, 
        trim: true,
        required: true
    },
      LastName:{
        type: String, 
        trim: true,
        required: true
    },
      UserName:{
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required:true
    },
      DateOfBirth:{
        type: Date,
        required:true,
        trim: true
    },
        email:{
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required:true
    },
        Gender:{
        enum: enuGender,
        type: String,
        lowercase: true,
        required:true,
        trim: true
    },
    RelationshipStatus:{
        enum: enuRStatus,
        type: String,
        uppercase: true,
        trim: true
    },
    hash_password:{
        type: String,
        required: true,
        trim: true
    },
    created:{
        type: Date,
        default: Date.now
    }
}, { collection : 'User' });

userModel.plugin(uniqueValidator);

var user = mongoose.model("User", userModel);



module.exports = user;