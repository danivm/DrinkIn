angular.module("myApp",['ngRoute', 'myControllers','ui.bootstrap']) 
	.config( function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'homeController'
		})
		.when('/menu',{
			templateUrl: 'views/menu.html',
			controller: 'menuController'
		})
		.otherwise({redirectTo: '/'});
	})