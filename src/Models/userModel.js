
const mongoose = require('mongoose')
const UserSchema= new mongoose.Schema({

        name: String,

        balance : Number,

        address: String,

        age : Number,

        gender : {
            type: String,
            enum : ['Male', 'Female', 'LGBT']
        },

        FreeAppUser: {
            type : Boolean,
            default : false
        }

    

}, {timestamps: true} )



module.exports = mongoose.model( 'Users', UserSchema )