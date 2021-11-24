const jwt = require('jsonwebtoken');

// token for shubham   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mzc2OTE3OTN9.Fs2LtQ7ueu4G8PtmYYUzHIvYbp7IZuEKYjk_CyTnt7w

//token 2 for sabiha  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTljYjcxNGNjNWQ3NDViYWEwNWU2NTciLCJpYXQiOjE2Mzc3NTk4MzB9.hae-UebYnV9xMURrcW2rzLgkZHrLW8GftJ0OI6SF_-4
const validateAppType = function(req, res, next){


    let token = req.headers['x-auth-token']

    if (token){
    
        let validToken = jwt.verify(token, "secret") //  is the secret key
       
        if (!validToken){
            res.send({error: "Input validToken"})   
    
        }
        
        else{ 
            req.validToken = validToken
            next()
        }
        
    }

    else{
        res.send({error: "token not found"})
    }


    
  

}

module.exports.validateAppType = validateAppType
