'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngMaterial', 'ngAnimate','ui.router',
  'components'
]).
config(['$stateProvider',function($stateProvider) {

	console.log('root app reload true');
    // $locationProvider.hashPrefix('!');

    // $routeProvider.otherwise({ redirectTo: '/view1' });
		$stateProvider.state('login',{
			url:'/login',
			templateUrl: 'components/login/login.html'
		});
}]);
