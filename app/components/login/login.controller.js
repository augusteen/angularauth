function LoginController(LoginService) {
    var ctrl = this;

    ctrl.submitForm = function() {
    	console.log('clicked submit');


    	console.log(ctrl.user);

      LoginService.authenticate(ctrl.user);
    	// LoginService.request();
    };

}

angular
    .module('components')
    .controller('LoginController',['LoginService',LoginController]);
