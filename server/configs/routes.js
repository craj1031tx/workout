//BLANK EXPRESS ROUTE MODULE
console.log("loading routes.js...");

var blankSScontroller = require("../controllers/blankSSController.js");
var userSSController = require("../controllers/userSSController.js");
var dataSSController = require("../controllers/dataSSController.js");

module.exports = function(app){
	app.post("/register_user", userSSController.register);
	app.post("/login_user", userSSController.login);
	app.get("/get_users", userSSController.getUsers);
	app.post("/add_body", dataSSController.addBody);
	app.get("/get_body", dataSSController.getBody);
	app.post("/add_exercise", dataSSController.addExercise);
	app.get("/get_full", dataSSController.getFull);
	app.get("/get_user/:id", userSSController.getAUser);
}