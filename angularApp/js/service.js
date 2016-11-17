angular.module('myServices', [])
	.factory('menuService', function($http) {
		function getMenu() {
			return $http.get("/api");
		}
		return {
			getMenu: getMenu
		}
	})