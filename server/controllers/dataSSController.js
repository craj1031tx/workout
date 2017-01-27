//DATA SS CONTROLLER - receives data for adding workouts...

console.log("loading dataSSController.js...");

var mongoose = require("mongoose");

var Body = mongoose.model("Body");
var Exercise = mongoose.model("Exercise");


// var Data = mongoose.model("Data");
 
function dataController(){
	this.addBody = function(req, res){
		console.log(req.body);
		var newBody = new Body({name: req.body.name, rank: req.body.rank});
		newBody.save(function(err, returnedData){
			if(err){
				console.log(err);
			}
			else{
				console.log(returnedData);
				res.json(returnedData);
			};
		});
	};
	this.getBody = function(req,res){
		Body.find({},function(err, returnedData){
			if(err){
				res.json({errors:err});
			}
			else{
				res.json(returnedData);
			};
		});
	};
	this.addExercise = function(req, res){
		Body.findOne({rank:req.body.bodyRank}, function(err, returnedBody){
			if(err){
				console.log(err);
				res.json({errors:err});
			}
			else{
				var newExercise = new Exercise({exercise:req.body.exercise, description:req.body.description, uni:req.body.uni});
				newExercise._body = returnedBody._id
				newExercise.save(function(err){
					returnedBody.exercises.push(newExercise);
					returnedBody.save(function(err){
						if(err){
							console.log(err);
						}
						else{
							console.log('all is well...');
						};
					});
				});
			};			
		});
	};
	this.getFull = function(req, res){
		Body.find({}).populate('exercises').exec(function(err, fullList){
			if(err){
				console.log(err);
				res.json({errors:err});
			}
			else{
				res.json(fullList);
			};
		});
	};
};

module.exports = new dataController;