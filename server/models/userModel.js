//USER BLANK MODEL

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	fn: {type:String, required:true},
	un: {type:String, required:true},
	pin: {
			type:String, required:true,
			minlength: [4,"Pin must be 4 characters long"],
			maxlength: [4,"Pin must be 4 characters long"]
			 },
	goals: {type: Object, default:{}}
}, {timestamps:true});

var User = mongoose.model("User", UserSchema);