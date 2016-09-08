var login = {
	bindings: {
	 // user: '<',
  //   button: '@',
  //   message: '@',
    onSubmit: '&'
  },
    templateUrl: 'components/login/login.html',
    controller: 'LoginController'
}

angular
    .module('components')
    .component('loginForm',login);
