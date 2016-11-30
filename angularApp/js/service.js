angular.module('myServices', [])
	.factory('menuService', function($http) {
		function getMenu(id) {
			return $http.get("/api/menu/"+id);
		}
		function getAllergens(id) {
			return $http.get("/api/allergens/"+id);
		}
		function getRestaurantName(id){
			return $http.get("/api/restaurant/"+id);
		}
		return {
			getMenu: getMenu,
			getAllergens: getAllergens,
			getRestaurantName: getRestaurantName
		}
	})
	.factory('mySocket', function(){
		console.log("socket....")
		var socket = io.connect('http://localhost:3000')
//		var socket = io.connect('https://drinkin.herokuapp.com/')
		
		socket.on('connect', function(){
			console.log('User is connected!');
			socket
		});
  		return socket;
	})
	.factory('homeService', function($http){
		function getRestaurants() {
			return $http.get("/api/restaurants");
		}
		return {
			getRestaurants: getRestaurants
		}
	})
	.factory('dishService', function($http){
		function getDish(id){
			return $http.get("/api/dish/"+id);
		}
		return {
			getDish: getDish
		}
	})