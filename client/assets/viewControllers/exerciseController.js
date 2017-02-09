//EXERCISE CLIENT VIEWCONTROLLER

workoutApp.controller("exerciseController", ["$scope", "userFactory", "workoutFactory", "$location", "$routeParams", "$cookies", function($scope, userFactory, workoutFactory, $location, $routeParams, $cookies){

	workoutFactory.singleExercise($routeParams.id, function(returnedData){
		$scope.cE = returnedData;
	});

	var setCurrentUser = function(){
		userFactory.getCurrentUser(function(user){
			$scope.theUser = user.data;
		});
	};
	setCurrentUser();
	

	$scope.setGoal = function(eId, uId, goal){
		userFactory.setGoal(eId, uId, goal, function(returnedData){
			setCurrentUser();
		});
	};

	$scope.modifyGoal = function(eId, uId, amount){
		var data = {eId, uId, amount};
		userFactory.modifyGoal(data, function(returnedData){
			setCurrentUser();
		});
	};
}]);