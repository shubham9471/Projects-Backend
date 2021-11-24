
const userModel = require('../models/userModel')

const loginModel = require('../models/loginModel')

const jwt = require('jsonwebtoken');


const loginUser = async function (req, res) {
    
    let givenName = req.body.name;
    let givenPassward = req.body.passward;
        
    let data = await userModel.findOne({name: givenName, passward: givenPassward, isDeleted: false})
    console.log("id", data._id)
    if(data){
        let payload = {_id: data._id}
        let token = jwt.sign(payload, "secret")
        
        res.header('x-auth-token', token);
        res.send({
            status: true,
            data: data,
            token
        })

    }
    else{
        res.send({
            status: false,
                msg: "login not successful"
        })
    }
}


const getuser = async function(req, res){
    if (req.validToken._id == req.params.userId){
        let users = await userModel.findOne({_id: req.params.userId})

        if (users){
            res.status(200).send({status: true, data: users})
        }
    
        else{
            res.status(404).send({status: false, data : "Not found"})
        }

    }

    else{
        res.send({err: "not a valid token"})
    }

    

}


const update = async function(req, res){
    if (req.validToken._id == req.params.userId){

        let userbody = await userModel.findOne({_id: req.params.userId})

        if (userbody){
            let updatedbody = await userModel.findOneAndUpdate({_id : userbody._id} , {"email" : "shubham@gmail.com"}, {new : true})

            res.send({updatedbody})

        }

        else{
            res.send({error : " error"})
        }
    }

    else{
        res.send({err: "not a valid token"})
    }





}


module.exports.loginUser = loginUser

module.exports.getuser = getuser

module.exports.update = update
