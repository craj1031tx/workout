//DASHBOARD CONTROLLER 

workoutApp.controller("dashboardController", ["$scope", "userFactory", "workoutFactory", "$location", "$routeParams", "$cookies", function($scope, userFactory, workoutFactory, $location, $routeParams, $cookies){

	var setCurrentUser = function(){
		userFactory.getCurrentUser(function(user){
			$scope.theUser = user.data;
		});
	};
	setCurrentUser();

	$scope.newWorkout = function(length){
		workoutFactory.newWorkout(length, $scope.theUser._id, function(){
			//some callback...
		})
	};
}]);