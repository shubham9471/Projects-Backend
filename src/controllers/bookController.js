const BookModel= require("../models/bookModel.js")
const AuthorModel = require("../models/authorModel.js")
const PublisherModel = require("../models/publisherModel.js")

const AuthorController= require("../controllers/authorController")
const PublisherController= require("../controllers/publisherController")
//2.  Write a create book api that takes author from the request body.
//  You have to first check if this is a valid authorId. 
// A valid authorId is which is present in your authors collection. 

const createBook= async function (req, res){
    var data= req.body
    var authorid = req.body.author
    var publisherid = req.body.publisher
    if(authorid){
        let check =  await AuthorModel.findById(authorid)
        if(!check){
            res.send({msg : "invalid id of author"})
        }
        

    }else{
        res.send({msg : "id not present of author"})
    }
    if(publisherid){
        let check1 = await PublisherModel.findById(publisherid)
        if(!check1){
            res.send({msg : "invalid id of publisher"})
        }
    }else{
        res.send({msg : "id not present of publisher"})
    }
    let saveData = await BookModel.create(data)
             res.send({msg : saveData})
}
  //REF POPULATE
  //https://dev.to/paras594/how-to-use-populate-in-mongoose-node-js-mo0

   const listBook = async function (req,res){
       let books= await BookModel.find().populate('author', {author_name : 1,  age: 1, _id:1}).populate('publisher')
       res.send({msg: books})
   }

   

module.exports.createBook = createBook

module.exports.listBook = listBook
