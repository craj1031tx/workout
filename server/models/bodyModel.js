//BODY MODEL

console.log("loading bodyModel.js...");

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var BodySchema = new mongoose.Schema({
	name: {type:String, required:true},
	rank: {type:Number, required:true},
	exercises: [{type:Schema.Types.ObjectId, ref: "Exercise"}]
}, {timestamps:true});

var Body = mongoose.model("Body", BodySchema);