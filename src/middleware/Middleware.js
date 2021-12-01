const jwt=require("jsonwebtoken")

const mid1= async function(req, res, next)
{   try {
        let token=req.headers['x-api-key']
        
        if(!token)
        {
            return res.status(404).send({ status: false, Message: 'No token found' })
        }else
        {
            let decodedtoken = jwt.verify(token, 'Group4')
            
            if(decodedtoken)
            {
                req.decodedtoken=decodedtoken
                next();
            }
        }
    }

    catch{
        res.status(400).send({status: false, err: "Something went wrong"})
    }
    
    
}

module.exports.mid1=mid1
