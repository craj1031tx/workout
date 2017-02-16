//BLANK CLIENT VIEWCONTROLLER

workoutApp.controller("loginController", ["$scope", "userFactory", "$location", "$routeParams", "$cookies", function($scope, userFactory, $location, $routeParams, $cookies){
	
	if($cookies.get("currentUserId") != null || $cookies.get("currentUserId") != undefined){
		$location.url("/dashboard");
	}

	$scope.register = function(){
		userFactory.registerUser($scope.newUserInfo, function(returnedData){
			if(returnedData.data.errors){
				$scope.listOfErrors = returnedData.data.errors;
			}
			else {
				localStorage.setItem("theUser", JSON.stringify(returnedData.data));
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
				localStorage.setItem("theUser", JSON.stringify(returnedData.data));
				$location.url("/dashboard")
			};
		});
	};

}]);