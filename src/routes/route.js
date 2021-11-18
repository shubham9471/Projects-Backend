const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel")
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")

const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const AuthorController= require("../controllers/authorController");
const publisherModel = require('../models/publisherModel');
const publishercontroller = require('../controllers/publisherController');


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createUser',  UserController.createUser  );
router.get('/getAllUsers',  UserController.getUsersData  );
router.post('/createAuthor', AuthorController.createAuthor);
router.post('/createBook', BookController.createBook);
router.get('/listBook', BookController.listBook);

router.post('/myPublisher', publishercontroller.createPublisher);

module.exports = router;      