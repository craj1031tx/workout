//BLANK CLIENT VIEWCONTROLLER

workoutApp.controller("loginController", ["$scope", "appFactory", "$location", "$routeParams", "$cookies", function($scope, appFactory, $location, $routeParams, $cookies){
	console.log("loginController loaded...");

	$scope.register = function(){
		appFactory.registerUser($scope.newUserInfo, function(returnedData){
			if(returnedData.data.errors){
				$scope.listOfErrors = [];
				for(var key in returnedData.data.errors){
					if(!returnedData.data.errors.hasOwnProperty(key)) continue;
					var err = returnedData.data.errors[key];
					$scope.listOfErrors.push(err.message);
				};
			}
			else {
				console.log(returnedData);
				$location.url("/")
			};
		});
	};

	var getUsers = function(){
		appFactory.getUsers(function(returnedData){
			$scope.userList = returnedData
		});
	};
	getUsers();

	$scope.testFunction = function(){
		console.log($scope.selectedUser)
	}

	$scope.loginUser = function(){
		appFactory.loginUser($scope.selectedUser, $scope.userPin, function(returnedData){
			console.log(returnedData)
			if(returnedData.data.errors){
				console.log(returnedData.data.errors);
			}
			else{
				$cookies.put('currentUserId', returnedData.data._id);
				console.log($cookies.get('currentUserId'));
				$location.url("/dashboard")
			};
		});
	};

}]);