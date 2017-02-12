//workoutFactory

workoutApp.factory("workoutFactory", ["$http", "$cookies", function($http, $cookies){
	function factoryMethods(){

		this.newWorkout = function(length, id, callback){
			data = {length, id};
			$http.post("/workouts/new_workout", data).then(function(returnedData){
				callback(returnedData.data);
			});
		};

		this.getNewIndividual = function(exerciseObject, callback){
			$http.post("/workouts/new_individual_exercise", exerciseObject).then(function(returnedData){
				callback(returnedData.data);
			});
		};

		this.singleExercise = function(id, callback){
			$http.get("/workouts/exercises/"+id).then(function(returnedData){
				callback(returnedData.data);
			});
		};

		this.getGroup = function(rank, callback){
			$http.get("/workouts/get_group/"+rank).then(function(returnedData){
				callback(returnedData.data)
			})
		}

	};
	return new factoryMethods;
}]);