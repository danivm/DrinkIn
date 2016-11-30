angular.module("myApp",['ngRoute', 'myControllers','ui.bootstrap', 'ngAnimate', 'ngDialog']) 
	.config( function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'homeController'
		})
		.when('/menu/:id',{
			templateUrl: 'views/menu.html',
			controller: 'menuController'
		})
		.when('/dish/:dishId', {
			templateUrl: 'views/dish.html',
			controller: 'dishController'
		})
		.otherwise({redirectTo: '/'});
	})