//workoutFactory

workoutApp.factory("workoutFactory", ["$http", "$cookies", function($http, $cookies){
	function factoryMethods(){

		this.newWorkout = function(length, id, callback){
			data = {length, id};
			$http.post("/workouts/new_workout", data).then(function(returnedData){
				callback(returnedData);
			});
		};

		this.getNewIndividual = function(exerciseObject, callback){
			$http.post("/workouts/new_individual_exercise", exerciseObject).then(function(returnedData){
				callback(returnedData);
			});
		};

	};
	return new factoryMethods;
}]);