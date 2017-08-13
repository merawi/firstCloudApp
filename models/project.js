//Load Dependencies
var mongoose  = require('mongoose');

var projectSchema = new mongoose.Schema({
projectNo : {type : String, default : {/*to be implemented*/}},
	client : {type: Schema.Types.ObjectId, ref : 'client'},
	clientContact : {type: Schema.Types.ObjectId, ref : 'client_contact'}, 
	tasks : [{type : Schema.Types.ObjectId, ref: 'task'}],
	projectStatus : {type : string},
	//total_amount : implement as a function
	startDate : {type: Date, default : Date.now()},
	dueDate : {type : Date, default : Date.now()},
	invoicingStatus : {type : String}, 	//[invoiced, not-invoiced]
	paymentStatus : {type : String}, 	//[paid,pending,overdue]
	ProjectStatus : {type : String}		//[active,closed,archieved]
})

module.exports = mongoose.model('Project', projectSchema);