//DASHBOARD CONTROLLER 

workoutApp.controller("dashboardController", ["$scope", "userFactory", "workoutFactory", "$location", "$routeParams", "$cookies", function($scope, userFactory, workoutFactory, $location, $routeParams, $cookies){

	$scope.todaysWorkout = $cookies.getObject("todaysWorkout");

	var setCurrentUser = function(){
		userFactory.getCurrentUser(function(user){
			$scope.theUser = user.data;
		});
	};
	setCurrentUser();

	$scope.newWorkout = function(length){
		workoutFactory.newWorkout(length, $scope.theUser._id, function(returnedData){
			$scope.todaysWorkout = returnedData.data;
			$cookies.putObject("todaysWorkout", returnedData.data);
		});
	};

	$scope.getNewIndividual = function(workoutObject, indexLocation){
		workoutFactory.getNewIndividual(workoutObject, function(returnedData){
			$scope.todaysWorkout[indexLocation] = returnedData.data[0];
			$cookies.putObject("todaysWorkout", $scope.todaysWorkout);
		});
	};


}]);