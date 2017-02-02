//workoutFactory

workoutApp.factory("workoutFactory", ["$http", "$cookies", function($http, $cookies){
	function factoryMethods(){

		this.newWorkout = function(length, id, callback){
			data = {length, id};
			$http.post("/workouts/new_workout", data).then(function(returnedData){
				console.log(returnedData);
			})
		}

	};
	return new factoryMethods;
}]);