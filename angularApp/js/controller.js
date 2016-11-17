angular.module('myControllers', ['myServices'])
	.controller('menuController', function($scope, menuService ) {
		menuService.getMenu()
			.then( function(response) {
				console.log(response.data)
				$scope.menu = response.data
			})
	})
	.controller('homeController', function($scope, menuService ) {

	})