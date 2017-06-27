//Load Depenencies
var User = require('../models/user');
var debug = require('debug')('borsa:user_data_access')
//to activate debug logs, use: SET DEBUG=borsa* //on the command line before running the program


//Signup
 exports.create  = function createUser(userData, callback){
     var userModel = new User(userData);
     userModel.save(function(err,user){
        debug('creating user...');
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
     User.findOne(query, function(err, data){
         if(err) callback(err);
         callback(null, data);
     });
 }

 exports.getAll = function findAllUsers(query, callback){
    debug('finding all users...');
    User.find(query, function(err,data)}
        if(err) callback(err);
        callback(null, data);
      });
 }

 exports.delete = function deleteUser(query, callback){
   User.findOne(query, function(err, user){
       if(err) callback(err);
       if(!user) callback(null, {});
          
       User.remove(function(err){
               if(err) {
                   return callback(err);
               }
           })
           callback(null, user);
      })
 }

 exports.update = function updateUser(query, data, callback){
     
     }