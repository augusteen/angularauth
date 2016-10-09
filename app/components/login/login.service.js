function LoginService($http, $q) {

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
