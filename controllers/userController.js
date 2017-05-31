//Load Dependencies
var userDal = require('../dal/user');
var userProfileDal = require('../dal/user');


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


exports.createUser = function(req,res,next){
        debug('create user');

        var workflow = new events.EventEmitter();
        var body = req.body;

        workflow.on('validateUser', function validateUser(){
            debug('validate user');
            req.checkBody('password', 'Password Invalid')
            .notEmpty()
            .isLength(5).withMessage('Password should be at least 8 characters long')
            req.checkBody('email','Email Invalid')
            .notEmpty()
            .isEmail();
            req.checkBody('firstName', 'First name is required')
            .notEmpty();
            req.checkBody('middleName', 'Last name is required')
            .notEmpty();     
            req.checkBody('lastName', 'Last name is required')     
            .notEmpty();

            var validationErrors = req.validationERrors();
            
            if(validationErrors) {
                res.status(400);
                res.json(validationErrors);
            }

            workflow.emit('createUser');
            
        });

        workflow.on('createUser', function createUser(){
            debug('create user');

            userDal.create(body, function callback(err,user){
                if(err) return next(err);

                userDal.get({_Id:user._Id}, function(err, user){
                    if(err) {
                        debug(err);
                        next(err);
                    }
                    res(200).json(user);
                })
                workflow.emit('createProfile', user);
            });
        });

       workflow.on('createUserProfile', function createUserProfile(){
           debug('createUserProfile');
           profileDal
           
       }
}


