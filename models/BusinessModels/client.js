//Load Dependencies

var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
	clientName : {type : String},
	primaryEmail : {type : String},
	billingEmail : {type : String},
	paymentMethods : [{type : String}],
	rates : [{type : Schema.Types.ObjectId, ref : 'Rate'}],
	projects : [{type : Schema.Types.ObjectId, ref : 'Project'}],
	contactPeople : [{type : Schema.Types.ObjectId, ref : 'ContactPerson'}]
	notes : [{type : Schema.Types.ObjectId, ref : 'Note'}]
})

module.exports = mongoose.model('Client', clientSchema);