//EXERCISE MODEL

console.log("loading exerciseModel.js...");

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var ExerciseSchema = new mongoose.Schema({
		_body: {type: Schema.Types.ObjectId, ref:"Body"},
		exercise: {type:String, required:true},
		description: {type:String, required:true},
		uni: Boolean
}, {timestamps:true});

var Exercise = mongoose.model("Exercise", ExerciseSchema);