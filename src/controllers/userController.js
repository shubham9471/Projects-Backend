const userModel = require('../models/userModel')

//Creating all Users 
const createUser = async function (req, res) {
    let userDetails = req.body

    let savedata = await userModel.create(userDetails)

    res.send({NewUserDetails : savedata})

}



module.exports.createUser = createUser

