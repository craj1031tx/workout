//DASHBOARD CONTROLLER 

workoutApp.controller("dashboardController", ["$scope", "userFactory", "workoutFactory", "$location", "$routeParams", "$cookies", function($scope, userFactory, workoutFactory, $location, $routeParams, $cookies){

	//route protection
	if(!$cookies.get("currentUserId")){
		$location.url("/");
	};

	//loading cookies for controller view binding 
	$scope.todaysWorkout = JSON.parse(localStorage.getItem("todaysWorkout"));
	$scope.workoutTimestamp = JSON.parse(localStorage.getItem("workoutTimestamp"));
	$scope.theUser = JSON.parse(localStorage.getItem("theUser"));

	//helper method for setting current user (useful for reloading goals)
	var setCurrentUser = function(){
		userFactory.getCurrentUser(function(user){
			$scope.theUser = user.data;
		});
	};
	setCurrentUser();

	$scope.logout = function(){
		$cookies.remove("currentUserId");
		localStorage.removeItem("theUser");
		$location.url("/");
	};

	//function call to app factory to generate a new workout. Sorting of exercise data is all done serverside. length is passed in as a string.
	$scope.newWorkout = function(length){
		workoutFactory.newWorkout(length, $scope.theUser._id, function(returnedData){
			$scope.todaysWorkout = returnedData;
			localStorage.setItem("todaysWorkout", JSON.stringify($scope.todaysWorkout));
			//date on which newWorkout was created. Must be done as an object because normal $cookies.put only support string types.
			$scope.workoutTimestamp = {time: new Date()};
			localStorage.setItem("workoutTimestamp", JSON.stringify($scope.workoutTimestamp));
		});
	};

	//function to get a new individual exercise that has the same parameters as the exercise that it replaces. All sorting and aggregating is done server side.
	$scope.getNewIndividual = function(workoutObject, indexLocation){
		workoutFactory.getNewIndividual(workoutObject, function(returnedData){
			$scope.todaysWorkout[indexLocation] = returnedData[0];
			localStorage.setItem("todaysWorkout", JSON.stringify($scope.todaysWorkout));
		});
	};

	//returns a goal value by receiving todaysWorkout's index number per exercise and concatenating that exercises id into the user.goals object.
	$scope.getGoal = function(indexValue){
		var eId = $scope.todaysWorkout[indexValue]._id;
		if($scope.theUser.goals){
			var testVar = $scope.theUser.goals
			if(testVar[eId]){
				return testVar[eId];
			}
		};
		return "0";		
	};

	//can increase or decrease goal by an argument defined amount. if goal doesn't exist, one is created and set to zero. 
	$scope.modifyGoal = function(eId, uId, amount){
		var data = {eId, uId, amount};
		userFactory.modifyGoal(data, function(returnedData){
			setCurrentUser();
		});
	};	
}]);