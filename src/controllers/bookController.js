const BookModel= require("../models/bookModel.js")

const AuthorModel= require("../models/Authors.js")

// Creations 
const createBooks= async function (req, res) {
    var data= req.body
    if (data.author_id){
        let savedData= await BookModel.create(data) 

        res.send({msg: savedData})    
    } 
    
    res.send("add author id")

}

const createAuthors= async function (req, res) {
    var data= req.body
    if (data.author_id){
        let savedData= await AuthorModel.create(data) 

        res.send({msg: savedData})    
    }
    res.send("add author id")

}


const getAllBooks= async function (req, res) {
    let allBooks= await AuthorModel.find({author_name:"Chetan Bhagat"}).select({author_id : 1})
    
    console.log("All books ",allBooks)
    let Id = allBooks[0].author_id
    
    let chetanbooks = await BookModel.find({author_id : Id}).select({name : 1})

    res.send({msg: chetanbooks})


}

const getAndUpdate= async function (req, res) {

    let books= await BookModel.find({name : "Two states"})

    let Id = books[0].author_id

    let AuthorName = await AuthorModel.find({author_id : Id}).select({author_name : 1})

    let updated= await BookModel.findOneAndUpdate({name : "Two states", price : 100}, {new : true}).select({name : 1 , price:1})
    
    res.send({msg:  updated, AuthorName})
}


const specificCost= async function (req, res) {
    // let booksWithPrice = await BookModel.find({price:{$gte: 50, $lte: 100}}).select({author_id: 1})

    // let id = booksWithPrice[0].author_id
    // console.log(id)

    // let authors = await AuthorModel.find({author_id : id}).select({author_name : 1})




    let booksWithPrice = await BookModel.find()
    
    let arr = [];
    
    for ( let i = 0; i<booksWithPrice.length; i++){
        if (50 <= booksWithPrice[i].price<=100){
            arr.push(booksWithPrice[i].author_id)
        }
    }

    let uniqueChars = [...new Set(arr)]; // convert arr into set in js
    console.log(uniqueChars)
    let temp = []
    for (let j = 0; j<uniqueChars.length; j++){
        let idx = uniqueChars[j]
        let authorName = await AuthorModel.find({author_id: idx}).select({author_name: 1})

        temp.push(authorName)

    }

    let authors = temp.flat()

    res.send({msg : authors})

}



module.exports.createBooks = createBooks

module.exports.createAuthors = createAuthors

module.exports.getAllBooks = getAllBooks

module.exports.getAndUpdate = getAndUpdate

module.exports.specificCost = specificCost