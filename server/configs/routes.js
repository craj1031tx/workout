//BLANK EXPRESS ROUTE MODULE
console.log("loading routes.js...");

var blankCtrl = require("../controllers/blankSSController.js");
var userCtrl = require("../controllers/userSSController.js");
var dataCtrl = require("../controllers/dataSSController.js");
var exerciseCtrl = require("../controllers/exerciseSSController.js");

module.exports = function(app){

	//User routes
	app.post("/register_user", userCtrl.register);
	app.post("/login_user", userCtrl.login);
	app.get("/get_users", userCtrl.getUsers);
	app.get("/get_user/:id", userCtrl.getAUser);
	app.get("/set_goal/:uId/:eId/:newGoal", userCtrl.setGoal);
	app.post("/modify_goal", userCtrl.modifyGoal);

	
	//Data routes
	app.post("/add_body", dataCtrl.addBody);
	app.get("/get_body", dataCtrl.getBody);
	app.post("/add_exercise", dataCtrl.addExercise);
	app.get("/get_full", dataCtrl.getFull);
	
	//Workout routes
	app.post("/workouts/new_workout", exerciseCtrl.newWorkout);
	app.post("/workouts/new_individual_exercise", exerciseCtrl.newIndividalExercise);

	app.get("/workouts/exercises/:id", exerciseCtrl.singleExercise);
	app.get("/workouts/get_group/:rank", exerciseCtrl.getGroup);
	//Goals routes


	//Populate route
	app.get("/populate/123", dataCtrl.populate);
}