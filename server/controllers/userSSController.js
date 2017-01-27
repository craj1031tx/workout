//BLANK SS CONTROLLER

console.log("loading userSSController.js...");

var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");

var User = mongoose.model("User");

function userController(){
	this.register = function(req, res){
		console.log("userSSControler received...:", req.body);
		var theNewUser = new User({fn: req.body.fn, un: req.body.un, pin: Number(req.body.pin)});
		theNewUser.save(function(err, returnedData){
			if(err){
				res.json({errors:["The registration wasn't successful"]})
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
				console.log("the login was successful:",result);
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




	// this.register = function(req,res){
	// 	console.log("userSSController received:", req.body);
	// 	if(req.body.password!=req.body.plaintext){
	// 		returnObject = {data:{errors:{message:"Password do not match."}}}
	// 		res.json(returnObject);
	// 	}
	// 	var aNewUser = new User({name: req.body.username, email: req.body.email, password: req.body.password, plaintext: req.body.plaintext});
	// 	aNewUser.save(function(err2, returnedData){
	// 		if(err2){			
	// 			res.json(err2);
	// 		}
	// 		else{
	// 			res.json(returnedData);
	// 			console.log("userSSController save successful!");
	// 		};
	// 	});
	// };
	// this.login = function(req,res){
	// 	User.findOne({email:req.body.email}, function(err, result){
	// 		if(err || !result){
	// 			res.json({errors:{message:"Login error (debug: email not found)"}});
	// 		}
	// 		else{
	// 			if(bcrypt.compareSync(req.body.password, result.password)){
	// 				res.json(result)
	// 			}
	// 			else{
	// 				res.json({data:{errors:{message:"Login error (debug: password incorrect)"}}})
	// 			};
	// 		};
	// 	})
	// }
};

module.exports = new userController;