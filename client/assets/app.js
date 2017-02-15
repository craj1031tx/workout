//BLANK ANGULAR APP

var workoutApp = angular.module("workoutApp", ["ngRoute", "ngCookies"]);

workoutApp.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "/partials/loginPartial.html",
		controller: "loginController"
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
	.when("/exercise/:id",{
		templateUrl: "/partials/exercisePartial.html",
		controller: "exerciseController"
	})
	.otherwise({redirectTo:"/"})
})