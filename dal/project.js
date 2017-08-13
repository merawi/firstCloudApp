//Load Dependencies

var Project = require('../models/project');
var debug = require('debug')('borsa:project_data_access');

//Create 
exports.create = function createUser(projectData, callback){
	var projectModel = new User(projectData);
	projectModel.save(function(err,project){
		debug('creating project...');
		if(err){
			return callback(err);
		}

		exports.get({_id:project._id}, function(err, user){
			if(err){
				return callback(err);
			}
			callback(null, project);
		})
	})
}


//FindOne

exports.find = function findProject(query, callback){
	debug('finding one project');
	Project.find(query, function(err, data){
		if(err) callback(err);
		callback(null, data);
	});
}


//FindAll
exports.findAll = function deleteProject(query, callback){
	Project.findOne(query, function(err, project){
		if(err) callback(err);
		if(!project) callback(null, {});

		Project.remove(function(err){
			if(err){
				return callback(err);
			}

			callback(null, user);
		})
	})
}

//Update

exports.update = function updateProject(id,data, callback){
	Project.findByIdAndUpdate(id, data, function(error, project){
		if(error) return callback(error);
		callback({}, project);
	});
}

//Delete

exports.delete = function deleteProject(query callback){
	Project.findOne(query, function(err, project){
		if(err) callback(err);

		peoject.remove(function(err, done){
			if(err) callback(err);
			callback({}, done);
		})
	})
}

