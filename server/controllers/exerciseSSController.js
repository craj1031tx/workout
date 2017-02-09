//EXERCISE SS CONTROLLER

var mongoose = require("mongoose");
var moment = require("moment");

var Exercise = mongoose.model("Exercise");

function exerciseController(){
	this.newWorkout = function(req,res){
		//using moment.js library to set day and date number fields. will be used to psuedo-randomly generate workout types.
		var dateNumber = moment().date();
		var dayNumber = moment().day();
		//scaffold arrays that dictate which type of workouts should be picked based on day/date.
		var shortOdd = [0,1,4,6,7,8];
		var shortEven = [0,2,3,5,7,8];
		var shortOddDayLateral = [false, true, false, true, false, false];
		var shortEvenDayLateral = [false, false, true, false, false, false];
		var longRank = [0,1,2,3,4,5,6,7,8];
		var longOddLateral = [false, true, false, true, false, true, false, false, false];
		var longEvenLateral = [false, false, true, false, true, false, true, false, false];
		var todaysWorkout = [];

		//setting bodyRank and unilateral type lists based on what day it is. 
		if(dateNumber%2==0){
			var shortRank = shortEven;
		}
		else{
			var shortRank = shortOdd;
		};

		if(dayNumber%2==0){
			var shortLateral = shortEvenDayLateral;
			var longLateral = longEvenLateral;}
		else{
			var shortLateral = shortOddDayLateral;
			var longLateral = longOddLateral;};

		//begin generating workout. uses passed in 'short' or 'long' params to determine which workout length to create.
		if(req.body.length == "short"){
			//short length workout
			Exercise.find({}, function(err, allE){
				//looping through every body rank type
				for(var i=0; i<shortRank.length; i++){
					//creating a temp list that will be populated with all exercises that fit into a body type
					var aBodyList = []
					//looping through every single exercise type one time for each body type present.
					for(var j=0; j<allE.length; j++){
						//if an exercises body type matches the current body type's loop AND shortLateral requirement, push it into aBodyList
						if(allE[j].bodyRank==shortRank[i] && allE[j].uni==shortLateral[i]){
							aBodyList.push(allE[j]);
						};
					};
					//aBodyList is now populated with all exercise documents of its body type. 
					//Picking and pushing a random exercise from the list of available exercises per body type. 
					var randomExercisePerType = aBodyList[Math.floor(Math.random()*aBodyList.length)];
					todaysWorkout.push(randomExercisePerType);
				};
				//return object and finishing promise.
				res.json(todaysWorkout);
				//end of promise for short length workout.
			});
		}
		else if(req.body.length == "long"){
			//long length workout
			Exercise.find({}, function(err, allE){
				//looping through every body rank type
				for(var i=0; i<longRank.length; i++){
					//creating a temp list that will be populated with all exercises that fit into a body type
					var aBodyList = []
					//looping through every single exercise type one time for each body type present.
					for(var j=0; j<allE.length; j++){
						//if an exercises body type matches the current body type's loop AND shortLateral requirement, push it into aBodyList
						if(allE[j].bodyRank==longRank[i] && allE[j].uni==longLateral[i]){
							aBodyList.push(allE[j]);
						};
					};
					//aBodyList is now populated with all exercise documents of its body type. 
					//Picking and pushing a random exercise from the list of available exercises per body type. 
					var randomExercisePerType = aBodyList[Math.floor(Math.random()*aBodyList.length)];
					todaysWorkout.push(randomExercisePerType);
				};
				//return object and finishing promise.
				res.json(todaysWorkout);
				//end of promise for long length workout.
			});
		};
	};

	this.newIndividalExercise = function(req,res){
		//original exercise object is passed in. new exercise is found using the original's bodyRank number and unilateral boolean via the aggregation pipeline. $sample is then used to select one at random from the sample set of exercises that match the aggregation. 
		Exercise.aggregate([{$match:{$and:[{bodyRank: req.body.bodyRank},{uni: req.body.uni}, {active:true}]}},{$sample:{size:1}}], function(err, result){
			if(err){
				console.log(err);
			}
			else{
				//new found single exercise object is passed back to client. 
				res.json(result);
			};
		});
	};

	this.singleExercise = function(req,res){
		Exercise.findOne({_id:req.params.id}, function(err,result){
			if(err){
				console.log(err);
			}
			else{
				res.json(result);
			};
		});
	};
};

module.exports = new exerciseController;