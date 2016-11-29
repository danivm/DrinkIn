angular.module('myServices', [])
	.factory('menuService', function($http) {
		function getMenu(id) {
			return $http.get("/api/menu/"+id);
		}
		function getAllergens(id) {
			return $http.get("/api/allergens/"+id);
		}
		return {
			getMenu: getMenu,
			getAllergens: getAllergens
		}
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