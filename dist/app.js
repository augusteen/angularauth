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
    if(localStorage.getItem('token'))
    $urlRouterProvider.otherwise('/home');
    else	
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
;angular
	.module('components',['ui.router'])
	.config(['$stateProvider',function($stateProvider){
		// console.log($stateProvider;

		// $stateProvider.state('login',{
		// 	url:'/login',
		// 	templateUrl: 'login/login.html'
		// });
	}]);;var loginForm = {
	bindings: {
	 user: '<',
   password: '<',
  //   message: '@',
    onSubmit: '&'
  },
    templateUrl: 'components/login/login.html',
    controller: 'LoginController'
}

angular
    .module('components')
    .component('loginForm',loginForm);
;function LoginController($state,LoginService) {
    var ctrl = this;

    ctrl.submitForm = function() {
    	console.log('clicked submit');


    	console.log(ctrl.user);

      LoginService.authenticate(ctrl.user);

      $state.go('home');
      
    	// LoginService.request();
    };

}

angular
    .module('components')
    .controller('LoginController',['$state','LoginService',LoginController]);
;function LoginService($http, $q) {

    // this.request = function(){
    // 	console.log($http);
    // }

    return ({
        authenticate: authenticate
    });

    function authenticate(formdata) {

        var request = $http({
            method: "post",
            url: "http://localhost:3000/authenticate",
            data: {
                username: formdata.username,
                password: formdata.password
            }
        });
        return (request.then(handleSuccess, handleError));
    }

    function handleSuccess(response) {

        localStorage.setItem('token',response.data.token);

        return (response.data);
    }

  
    function handleError(response) {
        console.log(response);
    }

    function hasToken(){

        var token = localStorage.getItem('user-token');

        return !token;
    }
}


angular
    .module('components')
    .service('LoginService', ['$http', '$q', LoginService]);
;