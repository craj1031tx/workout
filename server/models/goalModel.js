//GOAL MODEL

console.log("loading goalModel.js...");

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var GoalSchema = new mongoose.Schema({
	_user: {type: Schema.Types.ObjectId, ref:"User"},
	_exercise: {type: Schema.Types.ObjectId, ref:"Exercise"},
	goal: {type:Number, required:true}
}, {timestamps:true});

var Goal = mongoose.model("Goal", GoalSchema);