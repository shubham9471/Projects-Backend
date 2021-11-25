const axios = require("axios");

const LondonWeather = async function (req, res){

    try{ 
  
        let options = {
        method : "get", 
        url : `http://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=45bd408d5c5c7cb51f0e7c1b445d1991`,
          
        }
        let response= await axios(options)
  
        let London= response.data
        res.status(200).send( {msg: "Success", data: London} )
  
    }
    catch(err) {
        console.log(err.message)
        res.status(500).send( { msg: "Something went wrong" } )
    }
  }


  const LondonCitytemp = async function (req, res){

    try{ 
  
        let options = {
        method : "get", 
        url : `http://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=45bd408d5c5c7cb51f0e7c1b445d1991`,
          
        }
        let response= await axios(options)
  
        let LondonTemp= response.data.main.temp
        res.status(200).send( {msg: "Success", TempOfLondon: LondonTemp} )
  
    }
    catch(err) {
        console.log(err.message)
        res.status(500).send( { msg: "Something went wrong" } )
    }
  }






  const sortCityByTemp = async function (req, res){

 

    try{ 
        cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let arr = []
        for (let i = 0; i<cities.length; i++){
            let options = {
            method : "get", 
            url : `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=45bd408d5c5c7cb51f0e7c1b445d1991`,   
            }
            let response= await axios(options)
    
            let cityTemp = response.data.main.temp

            arr.push({"cities": cities[i], "Temp": cityTemp})
            console.log(arr)
            
        }
        let sortedtempcity = arr.sort(function(a, b)  {return parseFloat(a.Temp)- parseFloat(b.Temp)})
        
        res.status(200).send( {msg: "Success", TempOfLondon: sortedtempcity} )
        
    }
    catch(err) {
        console.log(err.message)
        res.status(500).send( { msg: "Something went wrong" } )
    }
  }




  module.exports.LondonWeather = LondonWeather;

  module.exports.LondonCitytemp = LondonCitytemp;

  module.exports.sortCityByTemp = sortCityByTemp;

  