//EXERCISE MODEL

console.log("loading exerciseModel.js...");

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var ExerciseSchema = new mongoose.Schema({
		active: {type: Boolean, default:true},
		bodyName: {type: String},
		bodyRank: {type: Number, required:true},
		name: {type:String, required:true, index:{unique:true}},
		uni: {type: Boolean, default: false, required: true},
		description: {type:String, required:true},
}, {timestamps:true});

ExerciseSchema.pre('save', function(next){
	var bodyNameList = ['Explosive', 'Knee Dominant', 'Hip Dominant', 'Horizontal Push', 'Horizontal Pull', 'Vertical Push', 'Vertical Pull', 'Rotational', 'Core']
	this.bodyName = bodyNameList[this.bodyRank];
	next();
});

var Exercise = mongoose.model("Exercise", ExerciseSchema);