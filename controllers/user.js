//Load Dependencies
var userDal = require('../dal/user');
var debug       = require('debug')('borsa:user_controller');
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
                if(err) return next(err);
                res.status(200).json(user);
        });
    }
        
//Implement here to create accessory objects for user

exports.welcome = function(req,res,next){
    res.status(200).send('Welcome to user');
}

exports.getAll = function(req,res,next){
    userDal.getAll({}, function(err,userlist){
        if(err) return next(err);
        res.status(200).json(userlist);
    });
}




