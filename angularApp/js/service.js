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