angular.module('myControllers', ['myServices'])
	.controller('menuController', function($scope, $rootScope, menuService, $location ) {
		$rootScope.collapsed = true;
		$rootScope.activetab = 'menu';
		$scope.queryName = ''
		$scope.showFilters = false
		menuService.getMenu()
			.then( function(response) {
				$scope.menu = response.data
			})
		menuService.getAllergens()
			.then( function(response) {
				$scope.allergens = response.data
			})
		$scope.containDish = function(category) {
			let output = false
			category.dishes.forEach(function(dish){
				if(dish.name.toLowerCase().includes($scope.queryName.toLowerCase())){
					if ( output === false ){
						output = $scope.containAllergens(dish)
					}
					
				}
			})
			return output
		}
		

		$scope.containAllergens = function(dish) {
			let output = true
			for(allergen in $scope.allergens){
				var a = $scope.allergens[allergen];
				if(a.on && dish.allergens && dish.allergens.includes(a.name)){
					output = false;   
				}
			}
			return output
		};
		$scope.showDish = function(dishId) {

			$location.path('/dish/'+dishId)
		}
		$scope.toggleFilters = function(){

		}
	})
	.controller('homeController', function($scope, $rootScope ) {
		$rootScope.collapsed = true;
		$rootScope.activetab = 'home';
	})
	.controller('dishController', function($scope, $rootScope, dishService, $location, $routeParams ) {
		dishService.getDish($routeParams.dishId)
			.then( function(response) {
				$scope.dishInfo = response.data
			})
		$scope.close = function(){
			$location.path('/menu')
		}
	})
