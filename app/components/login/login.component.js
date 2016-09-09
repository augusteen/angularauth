var loginForm = {
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
