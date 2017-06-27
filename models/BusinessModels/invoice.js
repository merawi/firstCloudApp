//Load Dependencies
var mongoose = require('mongoose');
var moment = require('moment');

var invoiceSchema = mongoose.Schema({
	project : {type : Schema.Types.ObjectId, ref : 'Project'},
	invoiceNo : {type : String},
	tasks : [{type : Schema.Types.ObjectId, ref : 'Task'}],
	invoiceDate : {type : Date, default : Date.now()},
	dueDate : {type : Date, default : moment(Date.now()).add(30,'day')},
	paymentInfo : {type : String }
});

module.exports = mongoose.model('Invoice', invoiceSchema);