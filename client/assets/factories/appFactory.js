//BLANK CLIENT FACTORY

workoutApp.factory("appFactory", ["$http", "$cookies", function($http, $cookies){
	function factoryMethods(){
		console.log("appFactory loaded...");

		this.registerUser = function(userInfo, callback){
			console.log("factory sending out...:", userInfo);
			$http.post("/register_user", userInfo).then(function(returnedData){
				console.log("FACTORY RETURN IS:", returnedData);
				callback(returnedData);
			});
		};

		this.getUsers = function(callback){
			$http.get("/get_users").then(function(returnedData){
				callback(returnedData.data)
			});
		};

		this.loginUser = function(user, pin, callback){
			passed_data = {user: user, pin: pin};
			$http.post("/login_user", passed_data).then(function(returnedData){
				console.log("FACTORY RETURN IS:", returnedData);
				callback(returnedData);
			});
		};
		this.addBody = function(bodyName, bodyRank, callback){
			passed_data = {name: bodyName, rank: bodyRank};
			$http.post("/add_body", passed_data).then(function(returnedData){
				console.log("FACTORY RETURN IS:", returnedData);
				callback(returnedData);
			});
		};
		this.getBody = function(callback){
			$http.get("/get_body").then(function(returnedData){
				callback(returnedData);
			});
		};
		this.addExercise = function(name, description, bodyRank, uni, callback){
			passed_data = {exercise: name, description: description, bodyRank: Number(bodyRank), uni: uni};
			$http.post("/add_exercise", passed_data).then(function(returnedData){
				console.log("FACTORY RETURN IS:", returnedData);
				callback(returnedData);
			});
		};
		this.getFull = function(callback){
			$http.get("/get_full").then(function(returnedList){
				callback(returnedList);
			});
		};
		this.getCurrentUser = function(callback){
			$http.get("/get_user/"+$cookies.get("currentUserId")).then(function(returnedUser){
				callback(returnedUser);
			});
		};


		// this.registerUser = function(userInfo, callback){
		// 	console.log("Factory sending out:", userInfo);
		// 	$http.post("/register_user/", userInfo).then(function(returnedData){
		// 		callback(returnedData);
		// 	});
		// };
		// this.loginUser = function(userInfo, callback){
		// 	console.log("Factory sending out", userInfo);
		// 	$http.post("/login_user/", userInfo).then(function(returnedData){
		// 		console.log("Factory return is:", returnedData);
		// 		callback(returnedData);
		// 	});
		// };
	};
	return new factoryMethods;
}]);