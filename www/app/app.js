﻿var app = angular.module('planApp', ['ngRoute', 'ngSanitize', 'ngAnimate', 'ngTouch']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
	//Define a route that has a route parameter in it (:customerID)
	.when('/index/:date',
		{
			controller: 'IndexController',
			templateUrl: 'app/views/main.html'
		})
	.when('/about',
		{
			controller: 'AboutController',
			templateUrl: 'app/views/about.html'
		})
	.otherwise({ redirectTo: '/index/0' });
	
});





