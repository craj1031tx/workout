//DASHBOARD CONTROLLER 

workoutApp.controller("dashboardController", ["$scope", "appFactory", "$location", "$routeParams", "$cookies", function($scope, appFactory, $location, $routeParams, $cookies){
	console.log("dashboardController loaded...");

	var setCurrentUser = function(){
		appFactory.getCurrentUser(function(user){
			console.log(user.data);
			$scope.theUser = user.data;
			console.log('the user is', $scope.theUser);
		});
	};
	setCurrentUser();

	$scope.newWorkout = function(){
		appFactory.newWorkout()
	};
}]);