function LoginController() {
    var ctrl = this;

    ctrl.submitForm = function() {
    	console.log('clicked submit')
    };

}

angular
    .module('components')
    .controller('LoginController', LoginController);
