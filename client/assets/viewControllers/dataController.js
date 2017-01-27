//DATA CLIENT CONTROLLER - FOR ADDING EXERCISE DATA

workoutApp.controller("dataController", ["$scope", "appFactory", "$location", "$routeParams", "$cookies", function($scope, appFactory, $location, $routeParams, $cookies){
	console.log("dataController loaded...");

	$scope.addBody = function(){
		appFactory.addBody($scope.bodyName, $scope.bodyRank, function(returnedData){
			console.log(returnedData);
		})
	}

	var getBody = function(){
		appFactory.getBody(function(returnedData){
			$scope.bodyList = returnedData.data;
		});
	};

	getBody();

	$scope.addExercise = function(){
		var isUni = false;
		if($scope.exerciseUni == '1'){
			isUni = true;
		};
		appFactory.addExercise($scope.exerciseExercise, $scope.exerciseDescription, $scope.exerciseBodyRank, isUni, function(returnedData){
			console.log(returnedData);
		});
		$scope.exerciseExercise = '';
		$scope.exerciseDescription = '';
	};

	var getFull = function(){
		appFactory.getFull(function(fullList){
			$scope.fullList = fullList;
			console.log(fullList);
		});
	};

	getFull();
}]);