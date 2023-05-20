const mongoose = require("mongoose");
const user = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    phone: {
      type: String  ,
      required: true,
    },
    timezone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    retypepassword: {
       type:String,
       require:true,
    },
    token: {
       type:String,
       default:""
    },
  });
  
  
  module.exports=mongoose.model('User',user);
     