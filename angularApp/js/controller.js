angular.module('myControllers', ['myServices'])
	.controller('menuController', function($scope, mySocket, $rootScope, $route, menuService, $location, $routeParams, ngDialog, $location ) {
		$rootScope.collapsed = true;
		$rootScope.activetab = 'menu';
		$scope.queryName = '';
		$scope.showFilters = false;

		var temp = JSON.parse(localStorage.getItem($routeParams.id))

		if(temp){
			if (temp.orderList == undefined) {
				$rootScope.orderList = {}
			} else {
				$rootScope.orderList = temp.orderList
			}
		} else {			
			localStorage.setItem($routeParams.id, "{}")
			$rootScope.orderList = {}
		}
		
		$scope.numValues = ["0","1","2","3","4","5","6","7","8","9","10"]
		$scope.selectedItem = 0
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
		menuService.getRestaurantName($routeParams.id)
			.then(function(res){
				$rootScope.restaurantName = res.data.name
				$rootScope.totalTables = res.data.numTables
			})
		$scope.addDish = function(idDish){
			if ($rootScope.orderList[idDish]) {
				if($rootScope.orderList[idDish]<10){
					++$rootScope.orderList[idDish]
				}
				
			} else {
				$rootScope.orderList[idDish]=1
			}
			$scope.updateList()
		}
		$rootScope.addTickets = function(numTable){
			$rootScope.finalList.forEach(function(dish){
				for(x=1 ; x <= dish.num; x++){					
					var newTicket = {
						dish: dish.id,
						table: numTable,
						account: $routeParams.id,
						status: 0,
						creationDate: Date.now(),
					};
					mySocket.emit('add-ticket', newTicket);	
				}
			});
			$rootScope.finalList = []
			$rootScope.orderList = {}
			var temp = JSON.parse(localStorage.getItem($routeParams.id))
			temp.orderList = {}
			localStorage.setItem($routeParams.id, JSON.stringify(temp))
			ngDialog.close()
			$scope.updateList()
			ngDialog.open({
				template: '<div class="success" role="alert">Pedido realizado correctamente!</div>',
				plain: true
			});
		}
		$scope.updateList = function(){
			var empty = true
			for (dish in $rootScope.orderList){
				if($rootScope.orderList[dish]>0) {
					empty = false
				} else {
					delete $rootScope.orderList[dish]
				}
			}
			if(empty == false){
				$scope.showConfirm = true
			} else {
				$scope.showConfirm = false
			}
			var temp = JSON.parse(localStorage.getItem($routeParams.id))
			temp.orderList = $rootScope.orderList
			localStorage.setItem($routeParams.id, JSON.stringify(temp))
		}
		$scope.updateList()
		$rootScope.getNumber = function(num) {
    		return new Array(num);   
		}
		$scope.showList = function(){
			var finalList = []
			$rootScope.totalPrice = 0
			angular.forEach($rootScope.orderList, function(num, dishID) {
				var newItem = {
					id: dishID,
					num: num,
					name: document.getElementById(dishID).dataset.name,
					price: document.getElementById(dishID).dataset.price
				};
				finalList.push(newItem)
				$rootScope.totalPrice += (document.getElementById(dishID).dataset.price * num)
			});
			$rootScope.finalList = finalList

			ngDialog.open({
				template: '/ngDialog/orderList.html'
			});
		}

	})
	.controller('homeController', function($scope, $rootScope, homeService, $location ) {
		$rootScope.collapsed = true;
		$rootScope.activetab = 'home';
		$rootScope.restaurantID ='';
		homeService.getRestaurants()
			.then( function(response) {
				$scope.restaurants = response.data
			})
		$rootScope.getMenu = function(){
			const oRestaurant = JSON.parse(this.oRestaurant)
			const restaurantID = oRestaurant.account
			$rootScope.restaurantID = restaurantID
			$location.path('/menu/'+restaurantID)
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
