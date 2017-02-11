//EXERCISE CLIENT VIEWCONTROLLER

workoutApp.controller("exerciseController", ["$scope", "userFactory", "workoutFactory", "$location", "$routeParams", "$cookies", function($scope, userFactory, workoutFactory, $location, $routeParams, $cookies){

	workoutFactory.singleExercise($routeParams.id, function(returnedData){
		$scope.cE = returnedData;
	});

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
}]);