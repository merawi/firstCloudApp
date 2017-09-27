//Load Dependencies
var  mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
	project : {type: Schema.Types.ObjectId, ref : 'Project'},
	//taskType : {type : Schema.Types.ObjectId, ref : 'TaskType'},
	unitOfMeasurement : { type : String},
	quantity : {type : Number},
	clientUnitCost : {type : Number},
	vendorUnitCost : {type : Number},
	clientCurrency : {type : String},
	vendorCurrency : {type : String},
	dateReceived : {type : Date, default : Date.now()},
	dateDue : {type : Date, default : Date.now()},
	taskStatus : {type : String }, //[in_progress, completed]
	//vendor : {type : Schema.Types.ObjectId, ref : 'Vendor'}
	files : [{type : String}]
	}
})

module.exports = mongoose.model('Task', taskSchema);