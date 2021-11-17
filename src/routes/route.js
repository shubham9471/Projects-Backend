const express = require('express');
const router = express.Router();
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/Authors.js")

const BookController= require("../controllers/bookController")

// Creation of scheme for authors and books
router.post('/createAuthors',  BookController.createAuthors  );

router.post('/createBooks',  BookController.createBooks  );

router.get('/getAllBooks',  BookController.getAllBooks  );

router.get('/getAndUpdate',  BookController.getAndUpdate  );

router.get('/specificCost',  BookController.specificCost  );
module.exports = router