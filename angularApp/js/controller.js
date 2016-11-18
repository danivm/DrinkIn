angular.module('myControllers', ['myServices'])
	.controller('menuController', function($scope, $rootScope, menuService ) {
		$rootScope.collapsed = true;
		$rootScope.activetab = 'menu';
		menuService.getMenu()
			.then( function(response) {
				$scope.menu = response.data
			})
		menuService.getAllergens()
			.then( function(response) {
				$scope.allergens = response.data
			})
	})
	.controller('homeController', function($scope, $rootScope, menuService ) {
		$rootScope.collapsed = true;
		$rootScope.activetab = 'home';
	})