//Load Dependencies
var userDal = require('../dal/user');
var debug       = require('debug')('borsa:user_controller');
var validator = require('express-validator');
//var userProfileDal = require('../dal/user');

/**
 * Lisence: MIT, Tony Mutai, Gebeya INC.
 * Steps..
 * 1. Validate the data
 * 2. Create User
 * 3. Create Profile 
 * 4. Create User Type
 * 5. Activate user account
 * 6. Respond
 */

exports.signup = function(req,res,next){
        //debug('create user');
        var body = req.body;
            userDal.create(body, function callback(err,user){

    //Data validation logic here.


                if(err) debug(err);//return next(err);
                res.status(200).json(user);
        });
    }
        
//Implement here to create accessory objects for user

exports.welcome = function(req,res,next){
    res.status(200).send('Welcome to user');
}

exports.find = function(req, res,next){
    
    userDal.find({_id : req.params["userId"]}, function(err,user){
    if(err) next(error);
    else res.status(200).json(user);
    });
}

exports.getAll = function(req,res,next){
    userDal.getAll({}, function(err,userlist){
        if(err) return next(err);
        res.status(200).json(userlist);
    });
}

exports.update = function(req,res,next){
    var updateData = req.body;
    var id = req.body["_id"];
    //delete updateData._id;

    userDal.update(id, updateData, function callback(error,user){
       // if(error == {} || error == true) 
       if(error){
            return next(error);            
        }
        else{
          debug("update successful");
          //res.status(200);
          userDal.find({_id:id}, function(err,us){
            if(err) next(err);
            res.json(us);
          });
        }
        
    });
}