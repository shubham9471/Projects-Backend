const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;

const orderSchema= new mongoose.Schema({

    userId: { 
        type: ObjectId, 
        ref: "Users" 
    },
    productId: {
         type: ObjectId,
          ref: "Product"
         },
    amount: {
        type: Number 
    },
    isFreeAppUser: {
        type: Boolean
    },
    date: {
        type: Date
    }
    
}, {timestamps: true} )

module.exports = mongoose.model( 'MyOrder', orderSchema )