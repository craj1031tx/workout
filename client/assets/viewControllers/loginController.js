//BLANK CLIENT VIEWCONTROLLER

workoutApp.controller("loginController", ["$scope", "userFactory", "$location", "$routeParams", "$cookies", function($scope, userFactory, $location, $routeParams, $cookies){
	
	if($cookies.get("currentUserId") != null || $cookies.get("currentUserId") != undefined){
		$location.url("/dashboard");
	}

	//test
	$scope.testChange = function(){
		if($scope.test123.length>4){
			console.log('runnin!')
			$scope.test123 = $scope.test123.slice(0,4);
		};
	};

	$scope.register = function(){
		userFactory.registerUser($scope.newUserInfo, function(returnedData){
			if(returnedData.data.errors){
				$scope.listOfErrors = returnedData.data.errors;
			}
			else {
				$cookies.putObject("theUser", returnedData.data);
				$cookies.put("currentUserId", returnedData.data._id);
				$location.url("/dashboard")
			};
		});
	};

	var getUsers = function(){
		userFactory.getUsers(function(returnedData){
			$scope.userList = returnedData
		});
	};
	getUsers();

	$scope.testFunction = function(){
		console.log($scope.selectedUser)
	}

	$scope.loginUser = function(){
		userFactory.loginUser($scope.selectedUser, $scope.userPin, function(returnedData){
			console.log(returnedData)
			if(returnedData.data.errors){
				$scope.listOfErrors = returnedData.data.errors;
			}
			else{
				$cookies.put('currentUserId', returnedData.data._id);
				$cookies.putObject("theUser", returnedData.data);
				$location.url("/dashboard")
			};
		});
	};

}]);