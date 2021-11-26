const axios = require("axios");
const cryptoModel = require("../Models/CryptoModel")



const Crypto = async function (req, res){

 
    try{ 

        let options = {
        
            method : "get",
            url : `http://api.coincap.io/v2/assets` ,
            headers : {
                Authorization : "Bearer 723be4d7-2ebf-48eb-ae30-4123bb019f36"
            } 

        }

        let response= await axios(options)
        
        let sortedcryptodata = response.data.data.sort(function(a, b)  {return parseFloat(a.changePercent24Hr)- parseFloat(b.changePercent24Hr)})
        //console.log("sorted",sortedcryptodata)

  
        let data = await cryptoModel.create(sortedcryptodata)
        
        res.status(200).send( {msg: "Success", CryptoData: data} )
        
    }
    catch(err) {
        console.log(err.message)
        res.status(500).send( { msg: "Something went wrong" } )
    }
}




module.exports.Crypto = Crypto;



  