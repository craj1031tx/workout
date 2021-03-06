//USER SS CONTROLLER

var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");

var User = mongoose.model("User");

function userController(){
	this.register = function(req, res){
		var theNewUser = new User({fn: req.body.fn, un: req.body.un, pin: Number(req.body.pin)});
		theNewUser.save(function(err, returnedData){
			if(err){
				res.json({errors:["The registration wasn't successful. Please fill out all fields and use a pin that is 4 digits long. "]})
			}
			else{
				res.json(returnedData);
			};
		});
	};

	this.getUsers = function(req,res){
		User.find(function(err,userList){
			if(err){
				res.json({errors:["user list not found..."]})
			}
			else{
				res.json(userList)
			};
		});
	};

	this.login = function(req,res){
		User.findOne({_id:req.body.user}, function(err, result){
			if(err){
				console.log(err)
				res.json({errors:["login failed"]});
			}
			else if(result && result.pin == req.body.pin){
				res.json(result);
			}
			else{
				res.json({errors:["username or password not found"]});
			};
		});
	};

	this.getAUser = function(req,res){
		User.findOne({_id:req.params.id}, function(err, user){
			if(err){
				console.log(err);
			}
			else{
				res.json(user);
			};
		});
	};

	//need to use mark modified to actually save data! because we're using mixed object types. problem with mongoose...
	this.setGoal = function(req,res){
		User.findOne({_id:req.params.uId}, function(err, returnedUser){
			if(err){
				console.log(err)
			}
			else{
				returnedUser.goals[req.params.eId] = Number(req.params.newGoal);
				returnedUser.markModified('goals');
				returnedUser.save(function(err2, result){
					if(err2){
						console.log(err2)
					}
					else{
						res.json(result);
					};
				});
			};
		});
	};

	//Adds or subtracts a passed amount from the goals object of the user document. First checks to see if a key corresponding to an excercises _id exists within the user's goal object. if it does, it is modified, if not, it is created and set to the passed amount value.
	this.modifyGoal = function(req,res){
		User.findOne({_id:req.body.uId}, function(err, returnedUser){
			if(err){
				console.log(err)
			}
			else{
				if(returnedUser.goals.hasOwnProperty(req.body.eId)){
					returnedUser.goals[req.body.eId] += req.body.amount;
					returnedUser.markModified('goals');
					returnedUser.save(function(err2, result){
						if(err2){
							console.log(err2)
						}
						else{
							res.json(result);
						};
					});
				}
				else{
					returnedUser.goals[req.body.eId] = req.body.amount;
					returnedUser.markModified('goals');
					returnedUser.save(function(err2, result){
						if(err2){
							console.log(err2)
						}
						else{
							res.json(result);
						};
					});
				};
			};
		});
	};
};

module.exports = new userController;