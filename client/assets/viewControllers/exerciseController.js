//EXERCISE CLIENT VIEWCONTROLLER

workoutApp.controller("exerciseController", ["$scope", "userFactory", "workoutFactory", "$location", "$routeParams", "$cookies", function($scope, userFactory, workoutFactory, $location, $routeParams, $cookies){

	workoutFactory.singleExercise($routeParams.id, function(returnedData){
		$scope.cE = returnedData;
	});

	var reloadUser = function(){
		userFactory.getCurrentUser(function(user){
		$scope.theUser = user.data;
		console.log($scope.theUser);
		});
	};
	reloadUser();
	

	$scope.setGoal = function(eId, uId, goal){
		userFactory.setGoal(eId, uId, goal, function(returnedData){
			reloadUser();
		});
	};

	$scope.modifyGoal = function(eId, uId, amount){
		var data = {eId, uId, amount};
		userFactory.modifyGoal(data, function(returnedData){
			reloadUser();
		});
	};
}]);