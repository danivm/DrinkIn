angular.module('myControllers', ['myServices'])
	.controller('menuController', function($scope, $rootScope, menuService, $location, $routeParams ) {
		$rootScope.collapsed = true;
		$rootScope.activetab = 'menu';
		$scope.queryName = ''
		$scope.showFilters = false
		menuService.getMenu($routeParams.id)
			.then( function(response) {
				$scope.menu = response.data
			})
		menuService.getAllergens($routeParams.id)
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
	.controller('homeController', function($scope, $rootScope, homeService, $location ) {
		$rootScope.collapsed = true;
		$rootScope.activetab = 'home';
		homeService.getRestaurants()
			.then( function(response) {
				$scope.restaurants = response.data
			})
		$rootScope.getMenu = function(){
			$rootScope.restaurantID=this.restaurantID
			$location.path('/menu/'+this.restaurantID)
		}
	})
	.controller('dishController', function($scope, $rootScope, dishService, $window, $routeParams ) {
		$rootScope.collapsed = true;
		dishService.getDish($routeParams.dishId)
			.then( function(response) {
				$scope.dishInfo = response.data
			})
		$scope.close = function(){
			$window.history.back()
			// $location.path('/menu/'+$rootScope.restaurantID)
		}
	})
