//DATA SS CONTROLLER - receives data for adding workouts...

var mongoose = require("mongoose");

var Exercise = mongoose.model("Exercise");


// var Data = mongoose.model("Data");
 
function dataController(){
	this.addBody = function(req, res){
		
	};
	this.getBody = function(req,res){
		
	};
	this.addExercise = function(req, res){
		
	};
	this.getFull = function(req, res){
		
	};
	this.populate = function(req, res){
		var errorList = [];
		var list = [
			{
			active:true,
			bodyRank:0,
			name:"Squat Jump",
			uni: false,
			description:"Explosive Squat Jump"},

			{
			active:true,
			bodyRank:0,
			name:"Hang Jump Shrug",
			uni: false,
			description:"Explosive Hang Jump Shrug"},

			{
			active:true,
			bodyRank:1,
			name:"Front Squat",
			uni: false,
			description:"Knee Front Squat"},

			{
			active:true,
			bodyRank:1,
			name:"Forward Lunge",
			uni: true,
			description:"Knee Forward Lunge UNI"},

			{
			active:true,
			bodyRank:2,
			name:"Good Morning",
			uni: false,
			description:"Hip Good Morning"},

			{
			active:true,
			bodyRank:2,
			name:"Split Good Morning",
			uni: true,
			description:"Hip Split Good Morning UNI"},

			{
			active:true,
			bodyRank:3,
			name:"Bench Press",
			uni: false,
			description:"HPush Bench Press"},

			{
			active:true,
			bodyRank:3,
			name:"test111",
			uni: false,
			description:"HPush Bench Press"},

			{
			active:true,
			bodyRank:3,
			name:"test222",
			uni: false,
			description:"HPush Bench Press"},

			{
			active:true,
			bodyRank:3,
			name:"Dumbbell Bench Press",
			uni: true,
			description:"HPush Dumbbell Bench Press"},

			{
			active:true,
			bodyRank:4,
			name:"Bent-Over Row",
			uni: false,
			description:"HPull Bent-Over Row"},

			{
			active:true,
			bodyRank:4,
			name:"Bent-Over 2 Point Alternating Row",
			uni: true,
			description:"HPull Bent-Over 2 Point Alternating Row"},

			{
			active:true,
			bodyRank:5,
			name:"Shoulder Press",
			uni: false,
			description:"VPush Should Press"},

			{
			active:true,
			bodyRank:5,
			name:"Dumbbell Should Press",
			uni: true,
			description:"VPush Dumbbell Shoulder Press"},

			{
			active:true,
			bodyRank:6,
			name:"Chinup",
			uni: false,
			description:"VPull Chinup"},
			
			{
			active:true,
			bodyRank:6,
			name:"Single-Arm Pullup",
			uni: true,
			description:"VPull Single-Arm Pullup"},
			
			{
			active:true,
			bodyRank:7,
			name:"Corkscrew",
			uni: false,
			description:"Rotational Corkscrew"},
			
			{
			active:true,
			bodyRank:7,
			name:"Cable Rotation",
			uni: false,
			description:"Rotational Cable Rotation"},
			
			{
			active:true,
			bodyRank:8,
			name:"Four-Point Plank",
			uni: false,
			description:"Core Four-Point Plank"},

			{
			active:true,
			bodyRank:8,
			name:"Side Bridge",
			uni: false,
			description:"Core Side Bridge"},	
		];
		for(item of list){
			tempAdd = new Exercise(item);
			tempAdd.save(function(err, info){
				if(err){
					errorList.push(err);
					console.log(err);
				}
				else{
					console.log(info);
				};
			});
		};
	};
};

module.exports = new dataController;