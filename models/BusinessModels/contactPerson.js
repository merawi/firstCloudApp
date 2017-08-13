//Load Dependencies
var mongoose = require('mongoose');

var contactPersonSchema = mongoose Schema({
	company : {type : Schema.Types.ObjectId, ref : 'Client'},
	name : {type : String},
	skypeId : { type : String},
	phoneNo : {type : String},
	email : {type : String },
	notes : [{type : Schema.Types.ObjectId, ref : 'Note'}]
});

module.exports = mongoose.model('ContactPerson', contactPersonSchema);