const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    "name" : {
      type: String,
      require : true
    },
    "mobile" : {
      type: Number,
      require : true
    }, 
    "email" : {
      type: String,
      require : true
    },
    "password" :{
      type: Number,
      require : true

    },
    "isDeleted" : {
      type: Boolean,
      default : false 
    }
});

module.exports = mongoose.model("NewUser", userSchema);
