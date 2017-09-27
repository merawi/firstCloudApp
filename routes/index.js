//Load Dependencies
var express  = require('express');

var userRouter = require('./user');


module.exports = function routerInit(app){
	app.use('/user', userRouter);
}




