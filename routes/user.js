//Load Dependencies
var express  = require('express');
var controller = require('../controllers/user');



var router = express.Router();

router.post('/signup', controller.createUser);

router.get('/:userId', controller.getUser);

router.put('/:userId', controller.updateUser);

router.post('/login', controller.login);

router.post('/logout', controller.logout);

router.post('/close', controller.close);

router.post('/verifyEmail/:userId', controller.verifyEmail);
router.post('/verifyPhone/:userId', controller.verifyPhone);

router.post('/resetCredentials', controller.reset);
router.post('/changePassword', controller.changePassword)

module.exports = router;
