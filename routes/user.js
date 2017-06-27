//Load Dependencies
var express  = require('express');
var userController = require('../controllers/user');
var userRouter = express.Router();


userRouter.get('/', userController.welcome);
//userRouter.get('/:email', userController.get);
userRouter.post('/signup', userController.signup);
userRouter.get('/getAll', userController.getAll);

module.exports = userRouter;

