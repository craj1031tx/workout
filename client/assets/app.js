//BLANK ANGULAR APP

var workoutApp = angular.module("workoutApp", ["ngRoute", "ngCookies"]);

workoutApp.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl:"/partials/loginPartial.html",
		controller: "loginController"
	})
	.when("/blank", {
		templateUrl:"/partials/blankPartial.html",
		controller: "blankController"
	})
	.when("/data",{
		templateUrl:"/partials/dataPartial.html",
		controller: "dataController"
	})
	.when("/dashboard",{
		templateUrl:"/partials/dashboardPartial.html",
		controller: "dashboardController"
	})
	.otherwise({redirectTo:"/"})
})