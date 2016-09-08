'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngMaterial', 'ngAnimate','ui.router',
  'components'
]).
config(['$stateProvider','$urlRouterProvider','$mdThemingProvider',function($stateProvider,$urlRouterProvider,$mdThemingProvider) {


	$mdThemingProvider.theme('docs-dark')
    .primaryPalette('blue')
    .accentPalette('orange');

	console.log('root app reload true');
    // $locationProvider.hashPrefix('!');

    $urlRouterProvider.otherwise('/login');
    // $routeProvider.otherwise({ redirectTo: '/view1' });
	$stateProvider.state('login',{
		url:'/login',
		templateUrl: 'components/ux/login.html'
	})
	.state('home',{
		url:'/home',
		templateUrl: 'components/ux/main.html'	
	});

		// $state.go('login');
}]);
