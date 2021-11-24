const jwt = require('jsonwebtoken');

// token    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mzc2OTE3OTN9.Fs2LtQ7ueu4G8PtmYYUzHIvYbp7IZuEKYjk_CyTnt7w
const validateAppType = function(req, res, next){


    let token = req.headers['x-auth-token']

    if (token){
    
        let validToken = jwt.verify(token, "dhiraj") // dhiraj is the secret key
       // console.log(validToken)
        if (!validToken){
            res.send({error: "Input validToken"})   
    
        }
        
        else{
            next()
        }
        
    }

    else{
        res.send({error: "token not found"})
    }


    
  

}

module.exports.validateAppType = validateAppType