//EXERCISE CLIENT VIEWCONTROLLER

workoutApp.controller("exerciseController", ["$scope", "userFactory", "workoutFactory", "$location", "$routeParams", "$cookies", function($scope, userFactory, workoutFactory, $location, $routeParams, $cookies){

	workoutFactory.singleExercise($routeParams.id, function(returnedData){
		$scope.cE = returnedData;
	});

	$scope.logout = function(){
		//$cookies.remove("todaysWorkout");
		//$cookies.remove("workoutTimestamp");
		$cookies.remove("currentUserId");
		$cookies.remove("theUser");
		$location.url("/");
	};
	
	//helper to set current user.
	var setCurrentUser = function(){
		userFactory.getCurrentUser(function(user){
			$scope.theUser = user.data;
		});
	};
	setCurrentUser();
	
	//sets the goal via a user input. goal setting is done serverside.
	$scope.setGoal = function(eId, uId, goal){
		userFactory.setGoal(eId, uId, goal, function(returnedData){
			setCurrentUser();
		});
	};

	//can increase or decrease goal by an argument defined amount. if goal doesn't exist, one is created and set to zero. 
	$scope.modifyGoal = function(eId, uId, amount){
		var data = {eId, uId, amount};
		userFactory.modifyGoal(data, function(returnedData){
			setCurrentUser();
		});
	};

	//Accepts argument of bodyRank and gives back a list of each type
	$scope.getGroup = function(rank){
		workoutFactory.getGroup(rank, function(returnedData){
			$scope.eList = returnedData;
		});
	};
}]);