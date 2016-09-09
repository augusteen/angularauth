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
        return (response.data);
    }

    function handleError(response) {
        console.log(response);
    }
}


angular
    .module('components')
    .service('LoginService', ['$http', '$q', LoginService]);
