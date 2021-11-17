// DATA BASE DATA AND SCHEMEME

const mongoose=require('mongoose')

const Book=new mongoose.Schema({

        name:String,

        author_id:String,

        price:Number,

        ratings:String,

    }
)
module.exports=mongoose.model('Book',Book)