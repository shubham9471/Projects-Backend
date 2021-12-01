const express = require('express');

const router = express.Router();

const AuthorController=require("../controllers/authorcontroller")
const BlogsController=require("../controllers/blogscontroller")
const Middleware=require("../middleware/Middleware")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createAuthor', AuthorController.createAuthor)
router.post('/createBlogs',Middleware.mid1, BlogsController.createBlogs)
router.get('/getBlogs',Middleware.mid1, BlogsController.getBlogs)
router.put('/update/:blogId',Middleware.mid1,BlogsController.update)
router.delete('/DeleteBlogs/:deleteId',Middleware.mid1,BlogsController.DeleteBlogs)
router.delete('/DeleteBlogsbyQuery',Middleware.mid1,BlogsController.DeleteBlogsbyQuery)
router.post('/login',AuthorController.login)

module.exports = router;
