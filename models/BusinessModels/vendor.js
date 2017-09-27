//Load Dependencies

var mongoose = require('mongoose');

var vendorSchema = mongoose.Schema({
	name : { type : String},
	//resumes : [{type : Schema.Types.ObjectId, ref : 'Resume'}]
	Languages : [{type : String}],
	currency : {type : String},
	//notes : [{type : Schema.Types.ObjectId, ref : 'Note'}]
});

module.exports = mongoose.model('Vendor', vendorSchema);