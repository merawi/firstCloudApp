//Load Depenencies
var userModel = require('../models/user');
var debug = require('debug')('borsa : user_data_access')

//Signup
 exports.create  = function createUser(userData, callback){
     var userModel = new userModel(userData);
     userModel.save(function(err,user){
        debug('creating user');
        if(err){
            return callback(err);
        }

        exports.get({_id:user._id}, function(err,user){
            if(err){
                return callback(err);
            }
            callback(null, user);
        })

     });
 }

 exports.get = function findUser(query, callback){
     debug('Finding user...', query);
     userModel.findOne(query, function(err, data){
         if(err) callback(err);
         callback(null, data);
     });
 }

 exports.delete = function deleteUser(query, callback){
   userModel.findOne(query, function(err, user){
       if(err) callback(err);
          
           if(err) callback(err);
          
           if(!user) callback(null, {});
          
           user.remove(function(err){
               if(err) {
                   return callback(err);
               }
           })
           callback(null, user);
      })
 }




