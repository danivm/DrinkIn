angular.module('myServices', [])
	.factory('menuService', function($http) {
		function getMenu() {
			return $http.get("/api/menu");
		}
		function getAllergens() {
			return $http.get("/api/allergens");
		}
		return {
			getMenu: getMenu,
			getAllergens: getAllergens
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