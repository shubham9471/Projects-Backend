const mongoose=require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const  bookSchema = new mongoose.Schema({
    name : String ,
    author:{
        type : ObjectId,
        ref : 'myAuthor',
        required : true
        },
    publisher : {
        type : ObjectId,
        ref : 'myPublisher'

    },
    price : Number,
    rating : Number
})

module.exports=mongoose.model('myBook', bookSchema)