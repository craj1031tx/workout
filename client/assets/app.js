//BLANK ANGULAR APP

var workoutApp = angular.module("workoutApp", ["ngRoute", "ngCookies"]);

workoutApp.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "/partials/loginPartial.html",
		controller: "loginController"
	})
	.when("/blank", {
		templateUrl: "/partials/blankPartial.html",
		controller: "blankController"
	})
	.when("/data",{
		templateUrl: "/partials/dataPartial.html",
		controller: "dataController"
	})
	.when("/dashboard",{
		templateUrl: "/partials/dashboardPartial.html",
		controller: "dashboardController"
	})
	.when("/list",{
		templateUrl: "/partials/listPartial.html",
		controller: "exerciseController"
	})
	// .when("/pick",{
	// 	templateUrl: "/partials/pickPartial.html",
	// 	controller: "exerciseController"

	// })
	.when("/exercise/:id",{
		templateUrl: "/partials/exercisePartial.html",
		controller: "exerciseController"
	})
	.otherwise({redirectTo:"/"})
})