const productModel = require("../Models/ProductModel")

const createProduct = async function (req, res) {

    let data= req.body

    let savedData= await productModel.create(data)

    res.send({msg: savedData})    

}

module.exports.createProduct = createProduct;