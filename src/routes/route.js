const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController')

const loginController = require('../controllers/loginController')

const appMiddleware = require('../middlewares/appMiddleware')



router.post('/newusers', userController.createUser);

router.post('/userlogin', loginController.loginUser);

router.get('/AllUserInfo/:userId',appMiddleware.validateAppType, loginController.getuser);

router.put('/updatedUserInfo/:userId' ,appMiddleware.validateAppType , loginController.update);

module.exports = router;