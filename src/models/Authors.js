const mongoose=require('mongoose')

const Authors=new mongoose.Schema({
    author_id:String,

    author_name:String,

    age:String,

    address:String


});

module.exports=mongoose.model('Authors',Authors)
