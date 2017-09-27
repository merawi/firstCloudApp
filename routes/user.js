//Load Dependencies
var express  = require('express');
var userController = require('../controllers/user');
var userRouter = express.Router();


//userRouter.get('/', userController.welcome);
userRouter.get('/:userId', userController.find );
userRouter.post('/signup', userController.signup);
userRouter.get('/', userController.getAll);
userRouter.put('/update', userController.update);

module.exports = userRouter;

