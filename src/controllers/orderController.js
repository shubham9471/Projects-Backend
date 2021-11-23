const mongoose = require("mongoose");
const OrderModel = require("../Models/orderModel")
const productModel = require("../Models/ProductModel")
const userModel = require("../Models/userModel")

const createOrder = async function (req, res) {
    
  let body = req.body;
  let user = req.body.userId;
  let product = req.body.productId;
  let userInfo = [];
  let productInfo = []
  let appTypeFree = req.isFreeAppUser


  if(user){
    let UserData = await userModel.findById(user);
    
    if(!UserData){
      res.send(" user not valid")
      }
    userInfo = UserData;
  }
  else{
    res.send("user id not present")
  } 
  if(product){
    let productData = await productModel.findById(product);
   
    if(!productData){
      res.send("product id is not valid")
    } 
    productInfo = productData;
  }else{
    res.send("product id not present") 
  }






  let userBalance = userInfo.balance;

  

  let productPrice = productInfo.price;

  
  let headerValue = req.headers.isfreeapp;

  //user balance validation
  if(!appTypeFree && userBalance < productPrice) {
    return res.send({message: "User doesn't have enough balance to purchase the product"})
  }

  if(headerValue==='true'){
      
      body["amount"] = 0; // this the purchase amount 
      body["isFreeAppUser"] = true;
  }

  else{
      console.log("user", userBalance)
      console.log("productPrice", productPrice)
      userBalance = userBalance - productPrice;
    
      body["amount"] = productPrice;
      body["isFreeAppUser"] = false;  
  }

  let savedbook = await OrderModel.create(body)
  res.send({msg: savedbook})
    
  }


module.exports.createOrder = createOrder;