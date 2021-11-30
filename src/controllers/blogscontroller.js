const BlogsModel = require("../models/Blogs_Model")
const AuthorModel=require("../models/Author_Model")
const mongoose = require("mongoose")

const createBlogs= async function(req, res){

    let data=req.body

    let Author= await AuthorModel.findById(data.authorId)
    if(!Author)
    {
        res.status(400).send({status:false, message:"Author_Id not found"})
    }else
    {
       let savedblog=await BlogsModel.create(data)
       res.status(201).send({status:true,data:savedblog})
    }
}


const getBlogs= async function(req, res){
    

    try{
     
        let info = req.query
        let  data = await BlogsModel.findOne(info)
    
        console.log("Data", data)


        if (data){
            if (data.isDeleted == false && data.isPublished == true){
                res.status(200).send({Status: "Success", Info: data })

            }
           
            else{
                res.status(500).send({err: "either book isn't published or data is deleted"})
            }

        }

        else{
            res.status(404).send({err: "provide an valid Input details"})
        }
        
  
    }
    catch(err) {
        console.log(err.message)
        res.status(500).send( { msg: "Something went wrong" } )
    }


}


const update = async function(req, res){
        

        let userbody = await BlogsModel.findOne({_id: req.params.blogId})
        
        
        if (userbody){
            if (userbody.isDeleted === false){
                let tempbody = await BlogsModel.findOneAndUpdate({_id : userbody._id} , {$set:{"title" : req.body.title, "body": req.body.body, "isPublished": true, "tags": req.body.tags, "subcategory": req.body.subcategory, "publishedAt": Date.now()}}, {new : true})
                
                res.status(200).send({status : true, data: tempbody})
            }

            else{
                res.status(404).send({err: "the data is already deleted "})
            }
        }

        else{
            res.status(505).send({status: false , err: " "})
        }


}


const Deletedata = async function(req, res){
        

    let userbody = await BlogsModel.findOne({_id: req.params.delId})

    if (userbody){
        if (userbody.isDeleted === false){

            res.status(200).send({msg: "Success", data : { }})

        }

        else{
            res.status(404).send({err: "data might have been already deleted"})
        }

    }

    else{
        res.status(400).send({err: "Data not found"})
    }


}


const CompleteDeletedata = async function(req, res){
    let info = req.query
    let userbody = await BlogsModel.findOne(info)
    console.log(userbody)
    if (userbody){
        if (userbody.isDeleted === false){
        
            res.status(200).send({err: "Done", data: {}})
        }

        else{
            res.status(404).send({err: "data might have been already deleted"})
        }

    }

    else{
        res.status(400).send({err: "Data not found"})
    }
    



}






module.exports.createBlogs=createBlogs

module.exports.getBlogs=getBlogs

module.exports.update = update

module.exports.Deletedata = Deletedata

module.exports.CompleteDeletedata = CompleteDeletedata