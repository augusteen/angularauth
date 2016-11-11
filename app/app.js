'use strict';
/**
 * @module cookbook
 */
angular.module('cookbook', ['d3']);
// Declare app level module which depends on views, and components

/**
 * @module myApp
 * @requires cookbook
 * @requires ngMaterial
 * @requires ngAnimates
 */

angular.module('myApp', [
    'ngMaterial', 'ngAnimate', 'ui.router',
    'components','cookbook' 
]).
config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', function($stateProvider, $urlRouterProvider, $mdThemingProvider) {


    $mdThemingProvider.theme('docs-dark')
        .primaryPalette('blue')
        .accentPalette('orange');

    console.log('root app reload true');
    // $locationProvider.hashPrefix('!');
    if (localStorage.getItem('token'))
        $urlRouterProvider.otherwise('/home');
    else
        $urlRouterProvider.otherwise('/login');
    // $routeProvider.otherwise({ redirectTo: '/view1' });
    $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'components/ux/login.html'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'components/ux/main.html'
            // resolve: function
        })
        // .state('clock', { 
        //     url: '/clock',
        //     templateUrl: 'components/cookbook/clock.html'
        //     // resolve: function
        // });

    // $state.go('login');
}]);
