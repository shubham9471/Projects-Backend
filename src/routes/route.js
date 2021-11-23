const express = require('express');
const router = express.Router();
const productModel = require("../Models/ProductModel")
const productcontroller = require('../controllers/ProductController')

const userModel = require("../Models/userModel")
const usercontroller = require('../controllers/userController')


const orderModel = require("../Models/orderModel")
const ordercontroller = require('../controllers/orderController')

const mid = require('../middlewares/usermiddleware')

// router.post('/test-me', function (req, res, next) {    
//     console.log('Inside the route handler checking the header batch: '+req.headers['batch'])
//     let host = req.headers['host']
//     let hostWithName = host + " " + "Sabiha Khan"
//     console.log('My response headers: '+res.getHeaderNames())
//     res.setHeader('hostWithName', hostWithName)
//     //res.send({data: 'I was in the handler'})
//     res.finalData = {data: 'I was in the handler'}
//     next()
// });


router.post('/product',  productcontroller.createProduct)

router.post('/allusers',mid.usermid, usercontroller.createUser)

router.post('/orderusers',mid.usermid, ordercontroller.createOrder)

module.exports = router;