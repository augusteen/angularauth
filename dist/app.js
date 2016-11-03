'use strict';
angular.module('cookbook', []);
// Declare app level module which depends on views, and components
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
;  function ErrorController(){

  	this.list =[{
  		message : 'Oh no error occured',
  		type : 'error'
  	},{
  		message : 'Make sure you have filled all the fields',
  		type : 'warning' 
  	},{
  		message : 'This is invalid',
  		type : 'invalid'
  	}]
 
}

angular.module('cookbook')
	.controller('ErrorController', ErrorController);;function ErrorMessage(){
	return {
		restrict : 'A',
		compile: function($element,$attrs){

			$element.addClass('error');
			console.log(1);
			return {
				pre: function($scope,$element,$attrs){

				},
				post: function($scope,$element,$attrs){
					$element.addClass('error--' + $attrs.type);
				}
			}
			// return function postLink($scope,$element,$attrs){
			// 	$element.addClass('error--' + $attrs.type);
			// }
		}
	};
}

angular.module('cookbook')
	.directive('errorMessage',ErrorMessage);;angular
	.module('components',['ui.router'])
	.config(['$stateProvider',function($stateProvider){
		// console.log($stateProvider;

		// $stateProvider.state('login',{
		// 	url:'/login',
		// 	templateUrl: 'login/login.html'
		// });
	}]);;/**
* cookbook Module
*
* Description
*/
angular.module('cookbook')
	.controller('MainController',function($scope,$interval) {
	
		function calculateRotation(){
			var now = new Date();

			$scope.hourRotation = 360 * now.getHours()/12;
			$scope.minuteRotation = 360 * now.getMinutes()/60;
			$scope.secondRotation = 360 * now.getSeconds()/60;
		}

		// $interval(calculateRotation,1000);
		calculateRotation();

	});;angular.module('cookbook')
    .factory('People', ['$http', function($http) {
        return {
            getList: function() {
                return $http.get('data/person.json'); }
        };
    }])
    .directive('dynamicSelect', ['$injector', function($injector) {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            scope: {
                model: '=',
                resourceId: '@',
                resourceLabel: '@'
            }, // {} = isolate, true = child, false/undefined = no change
            // controller: function($scope, $element, $attrs, $transclude) {},
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
            template: '<select ng-model="model" ng-options="item[resourceId] ' +
                'as item[resourceLabel] for item in items" />',
            // templateUrl: '',
            // replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function($scope, iElm, iAttrs, controller) {
            	var temp = iAttrs.resource.split('.');

            	var params = { name:temp[0], fn:temp[1]};

            	var service = $injector.get(params.name);

            	service[params.fn]().then(function(serviceResponse) {
            		// this.debug(arguments);
            		$scope.items = serviceResponse.data;
            	});
            }
        };
    }])
    .controller('dynCtrl', ['$scope', function($scope){
    	$scope.personId = 2;
    }])
;/**
 * coookbook Module
 *
 * Description
 */
angular.module('cookbook')
    .directive('dateselect', function() {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            scope: {
                model: '='
            }, // {} = isolate, true = child, false/undefined = no change
            // controller: function($scope, $element, $attrs, $transclude) {},
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
            template: '<select ng-model="date.month" ng-options="month as month for month in months"> </select> <select ng-model="date.day" ng-options="day for day in days"> </select> <select ng-model="date.year" ng-options="year for year in years"> </select>',
            controller: function($scope) {
                var i;

                $scope.date = {};

                $scope.days = [];

                for (i = 0; i <= 31; i++) {
                    $scope.days.push(i);
                }

                $scope.months = [];
                
                for (i = 0; i <= 12; i++) {
                    $scope.months.push(i);
                }

                $scope.years = [];
                
                for (i = 1980; i <= (new Date().getFullYear()); i++) {
                     $scope.years.push(i);
                }

                $scope.$watch('model', function(newDate) {
                    $scope.date.month = newDate.getMonth() + 1;
                    $scope.date.day = newDate.getDate();
                    $scope.date.year = newDate.getFullYear();
                }, true);

                $scope.$watch('date', function(newDate) {
                    $scope.model.setDate(newDate.day);
                    $scope.model.setMonth(newDate.month +1);
                    $scope.model.setFullYear(newDate.year);
                    // $scope.date.day = newDate.getDate();
                    // $scope.date.year = newDate.getFullYear();
                }, true);
            },
            // templateUrl: '',
            // replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            //     link: function($scope, iElm, iAttrs, controller) {

            // }
        };
    })
    .controller('dateCtrl', ['$scope', function($scope) {
        // $scope.current = new Date();
    }]);
;
/**
* cookbook Module
*
* Description
*/
angular.module('cookbook')
	.directive('digitalClock', ['$interval', function($interval){
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			// scope: {}, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			template: '<div ng-bind=" now | date:\'HH:mm:ss\'"> </div>',
			// templateUrl: '',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {
				$scope.now = new Date();

				var clockTimer = $interval(function(){$scope.now = new Date();},1000);

				$scope.$on('$destroy',function() {
					// this.debug(arguments);
					$interval.cancel(clockTimer);	
				});
			}
		};
	}]);;/**
* cookbook Module
*
* Description
*/
angular.module('cookbook')
.directive('agFilter', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'components/cookbook/tablefilter.html',
		// replace: true, 
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	};
});
;angular.module('cookbook')
    .directive('tictactoe', function() {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            // scope: {
            // 	board: '='
            // }, 
            scope:true,// {} = isolate, true = child, false/undefined = no change
            // controller: function($scope, $element, $attrs, $transclude) {
            //     $scope.board = [];

            //     for (var i = 9; i >= 0; i--) {
            //         board[i] = "-";
            //     }

            //     console.log('controller o');
            // },
            // // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
            template: '<div> Board <div ng-repeat="obj in board track by $index" >{{obj}}</div>  </div>',
            // templateUrl: '',
            // replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function($scope, iElm, iAttrs, controller) {

            }
        };
    })
    .controller('tictacCont', ['$scope', function($scope) {

        $scope.board = [];

        for (var i = 9; i >= 0; i--) {
            $scope.board[i] = "-";
        }

        console.log($scope.board);
    }]);

/*

app.service('userService', ['$log', 'synthesize', 'defaults',
    function($log, synthesize, defaults)
    {
        var _private = synthesize(this, {
            user_name: defaults.user.user_name,
            user_img_src: defaults.user.user_img_src
        });
       // automatically synthesized getter
       $log.log('in userService:', this.getUserName());
   }
]);

app.factory('synthesize', [
    function()
    {
        return function(self, props)
        {
            var priv = {};
            angular.forEach(props, _synth);
            return priv;
            function _synth(value, name)
            {
                priv[name] = value;
                _makeGetterSetter(value, name);
            }
            function _makeGetterSetter(value, name)
            {
                self[_makeCamelCase(name)] = function() { return priv[name] };
            }
        };
    }
]);

 */
;var loginForm = {
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
;;var views = {
    restrict: 'E',
    controller: function() {
        var registeredViews = {};

        this.$registerView = function(ctrl) {
            registeredViews[ctrl.$name] = ctrl;
        };

        // viewName matches the `name` attribute on &lt;view&gt;
        this.$switchTo = function(viewName) {
            for (var k in registeredViews) {
                debugger;
                if (k == viewName) {
                    views[k].$show();
                } else {
                    views[k].$hide();
                }
            }
        };
    },
    link: function(scope, element, attrs, viewsCtrl) {
        element.on('click', '[view-target]', function() {
            var viewName = angular.element(this).attr('view-target');
            viewsCtrl.$switchTo(viewName);
        });

        // Make the view controls available on the scope
        scope.$views = viewsCtrl;
    }
}

var view = function($animate) {
    return {
        restrict: 'E',
        require: ['view', '^views'],
        controller: function($element, $attrs) {

            this.$name = $attrs.name;
            this.$show = function() { $animate.removeClass($element, 'view-hide'); };
            this.$hide = function() { $animate.addClass($element, 'view-hide'); };
        },
        link: function(scope, el, attrs, ctrls) {
            var viewCtrl = ctrls[0];
            var viewsCtrl = ctrls[1];
            debugger;
            viewsCtrl.$registerView(viewCtrl);

            if (attrs.initial !== undefined) {
                viewCtrl.$show();
            } else {
                viewCtrl.$hide();
            }
        }
    }
};


function arrays($scope) {

    // var self = this;

    $scope.notes = [
        { id: 1, label: 'First Note', done: false },
        { id: 2, label: 'Second Note', done: false },
        { id: 3, label: 'Third Note', done: false },
        { id: 4, label: 'Fourth Note', done: false },
    ];


}

/**
 * directive Module
 *
 * Description
 */
angular.module('directive', ['ngAnimate'])
    .directive('views', [views])
    .directive('view', ['$animate', view])
    .controller('ArrCtrl', [arrays]);
 ;
/**
* myApp Module
*
* Description
*/
angular.module('myApp')
	.controller('tabCtrl', ['$scope','$location','$log', function($scope, $location, $log){
		$scope.selectedIndex = 0;

        $scope.$watch('selectedIndex', function(current, old) {
            switch (current) {
                case 0:
                    $location.url("/clock");
                    break;
                case 1:
                    $location.url("/view2");
                    break;
                case 2:
                    $location.url("/view3");
                    break;
            }
        });
	}]);angular.module('templates-dist', ['../app/components/cookbook/clock.html', '../app/components/cookbook/tablefilter.html', '../app/components/login.html', '../app/components/login/login.html', '../app/components/ux/login.html', '../app/components/ux/main.html', '../app/components/ux/navbar.html', '../app/components/ux/ngcontext/ngcontext.html', '../app/index-async.html', '../app/index.html']);

angular.module("../app/components/cookbook/clock.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/components/cookbook/clock.html",
    "<div ng-controller=\"MainController\">\n" +
    "    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\">\n" +
    "        <g>\n" +
    "            <circle style=\"stroke: #ccc; fill: #fff;\" cx=\"100\" cy=\"100\" r=\"100\" />\n" +
    "            <line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"50\" style=\"stroke-width: 5px; stroke: #333;\" ng-attr-transform=\"rotate({{hourRotation}} 100 100)\" />\n" +
    "            <line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"20\" style=\"stroke-width: 3px; stroke: #888;\" ng-attr-transform=\"rotate({{minuteRotation}} 100 100)\" />\n" +
    "            <line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"5\" style=\"stroke-width: 2px; stroke: #bb0000;\" ng-attr-transform=\"rotate({{secondRotation}} 100 100)\" />\n" +
    "        </g>\n" +
    "    </svg>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../app/components/cookbook/tablefilter.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/components/cookbook/tablefilter.html",
    "<div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "        <h2 class=\"panel-title\">Project List</h2>\n" +
    "        <small>Keep track of project </small>\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\">\n" +
    "        <ul class=\"list-group\">\n" +
    "            <li class=\"list-group-item\">\n" +
    "                <div class=\"row\" >\n" +
    "                    <div class=\"col-xs-6\">\n" +
    "                        <a href=\"#\">\n" +
    "                            <div></div>\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-6\">\n" +
    "                        <div class=\"progress\">\n" +
    "                            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\">\n" +
    "                                <span class=\"sr-only\">40% Complete (success)</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"panel-footer\">Panel footer</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../app/components/login.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/components/login.html",
    "<md-content layout=\"vertical\" flex id=\"content\">\n" +
    "    <div layout=\"row\" layout-align=\"center center\" layout-fill>\n" +
    "        <md-whiteframe class=\"md-whiteframe-z1\" layout=\"column\" flex=\"30\" layout-padding>\n" +
    "            <md-content md-theme=\"docs-dark\">\n" +
    "                <md-input-container>\n" +
    "                    <label>Email</label>\n" +
    "                    <input ng-model=\"user.email\">\n" +
    "                </md-input-container>\n" +
    "                <md-input-container>\n" +
    "                    <label>Password</label>\n" +
    "                    <input ng-model=\"user.password\" type=\"password\">\n" +
    "                </md-input-container>\n" +
    "                <md-input-container layout-align=\"center center\">\n" +
    "                    <div layout=\"row\" layout-sm=\"column\" layout-margin>\n" +
    "                        <md-button class=\"md-raised\" flex=\"50\" flex-sm=\"100\">Login</md-button>\n" +
    "                        <md-button class=\"md-raised md-primary\" flex=\"50\" flex-sm=\"100\">Register</md-button>\n" +
    "                    </div>\n" +
    "                </md-input-container>\n" +
    "            </md-content>\n" +
    "        </md-whiteframe>\n" +
    "    </div>\n" +
    "</md-content>\n" +
    "");
}]);

angular.module("../app/components/login/login.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/components/login/login.html",
    "<div laylayout=\"column\" layout-align=\"center center\">\n" +
    "<div flex>\n" +
    "<md-content  flex id=\"content\">\n" +
    "    <div layout=\"row\" layout-align=\"center center\" layout-fill  style=\"min-height: 500px\">\n" +
    "        <md-whiteframe class=\"md-whiteframe-z1\"  ng-submit=\"$ctrl.submitForm();\" layout=\"column\" flex=\"30\" layout-padding>\n" +
    "            <form name=\"loginForm\" >\n" +
    "            <md-content md-theme=\"docs-dark\">\n" +
    "                <md-input-container>\n" +
    "                    <label>Email</label>\n" +
    "                    <input ng-model=\"$ctrl.user.username\">\n" +
    "                </md-input-container>\n" +
    "                <md-input-container>\n" +
    "                    <label>Password</label>\n" +
    "                    <input ng-model=\"$ctrl.user.password\" type=\"password\">\n" +
    "                </md-input-container>\n" +
    "                <md-input-container layout-align=\"center center\">\n" +
    "                    <div layout=\"row\" layout-sm=\"column\" layout-margin>\n" +
    "                        <md-button class=\"md-raised\" flex=\"50\"   type=\"submit\" flex-sm=\"100\">Login</md-button>\n" +
    "                        <md-button class=\"md-raised md-primary\" type=\"button\" flex=\"50\" flex-sm=\"100\">Register</md-button>\n" +
    "                    </div>\n" +
    "                </md-input-container>\n" +
    "            </md-content>\n" +
    "            </form>\n" +
    "        </md-whiteframe> \n" +
    "    </div>\n" +
    "</md-content>\n" +
    "</div>\n" +
    "<div>\n" +
    "");
}]);

angular.module("../app/components/ux/login.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/components/ux/login.html",
    "<login-form></login-form>");
}]);

angular.module("../app/components/ux/main.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/components/ux/main.html",
    "<div ui-view>\n" +
    "    <div ng-controller=\"tabCtrl\" layout=\"column\" class=\"demo\">\n" +
    "        <!--  <script type=\"text/ng-template\" id=\"partials/view1.html\"> Tab #1 </script>\n" +
    "        <script type=\"text/ng-template\" id=\"partials/view2.html\"> Tab #2 </script>\n" +
    "        <script type=\"text/ng-template\" id=\"coolbook/clock.html\"> Tab #3 </script> -->\n" +
    "        <md-toolbar>\n" +
    "            <h2 class=\"md-toolbar-tools\">\n" +
    "      <span>Toolbar</span>\n" +
    "    </h2>\n" +
    "        </md-toolbar>\n" +
    "        <md-tabs md-stretch-tabs md-selected=\"selectedIndex\">\n" +
    "            <md-tab label=\"tab1\">\n" +
    "                <div ng-controller=\"MainController\">\n" +
    "                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\">\n" +
    "                        <g>\n" +
    "                            <circle style=\"stroke: #ccc; fill: #fff;\" cx=\"100\" cy=\"100\" r=\"100\" />\n" +
    "                            <line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"50\" style=\"stroke-width: 5px; stroke: #333;\" ng-attr-transform=\"rotate({{hourRotation}} 100 100)\" />\n" +
    "                            <line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"20\" style=\"stroke-width: 3px; stroke: #888;\" ng-attr-transform=\"rotate({{minuteRotation}} 100 100)\" />\n" +
    "                            <line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"5\" style=\"stroke-width: 2px; stroke: #bb0000;\" ng-attr-transform=\"rotate({{secondRotation}} 100 100)\" />\n" +
    "                        </g>\n" +
    "                    </svg>\n" +
    "                </div>\n" +
    "            </md-tab>\n" +
    "            <md-tab label=\"tab2\">\n" +
    "                <!--             <div ng-controller=\"dateCtrl\">\n" +
    "                <dateselect model=\"current\"></dateselect><br/>\n" +
    "                <dateselect model=\"current\"></dateselect><br/>\n" +
    "                {{current | date:'yyyy-MM-dd'}} \n" +
    "            </div>\n" +
    "            <div ng-controller=\"dynCtrl\">\n" +
    "                <dynamic-select model=\"personId\" resource=\"People.getList\" resource-id=\"id\" resource-label=\"name\" />\n" +
    "            </div> \n" +
    " -->\n" +
    "            </md-tab>\n" +
    "            <md-tab label=\"Digital Clock\">\n" +
    "                <digital-clock/> \n" +
    "            </md-tab>\n" +
    "            <md-tab label=\"tab4\"> \n" +
    "                <style>\n" +
    "                .error {\n" +
    "                    border: 1px solid blud;\n" +
    "                    padding: 10px 15px;\n" +
    "                    margin: 0 0 10px;\n" +
    "                    border: 1px solid blue;\n" +
    "                }\n" +
    "                 \n" +
    "                .error--warning {\n" +
    "                    border: 1px solid red;\n" +
    "                }\n" +
    "                .error--invalid {\n" +
    "                    border: 1px solid green\n" +
    "                }\n" +
    "                </style>\n" +
    "                <div ng-controller=\"ErrorController as errors\">\n" +
    "                    <div ng-repeat=\"error in errors.list\" error-message type=\"{{error.type}}\"> {{ error.message }}</div>\n" +
    "                </div>\n" +
    "            </md-tab>\n" +
    "            <md-tab label=\"Tic Tac Toe\" > \n" +
    "                <div ng-controller=\"tictacCont\"> \n" +
    "                <tictactoe></tictactoe>\n" +
    "                </div> \n" +
    "            </md-tab>\n" +
    "            <md-tab label=\"Augusteeen\">\n" +
    "                <ag-filter></ag-filter>\n" +
    "            </md-tab>\n" +
    "        </md-tabs>\n" +
    "        <div id=\"content\" ui-view flex> </div>\n" +
    "    </div>\n" +
    "");
}]);

angular.module("../app/components/ux/navbar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/components/ux/navbar.html",
    "<div ng-controller=\"AppCtrl\" ng-cloak>\n" +
    "  <md-content class=\"md-padding\">\n" +
    "    <md-nav-bar md-selected-nav-item=\"currentNavItem\" nav-bar-aria-label=\"navigation links\">\n" +
    "      <md-nav-item md-nav-click=\"goto('page1')\" name=\"page1\">Page One</md-nav-item>\n" +
    "      <md-nav-item md-nav-click=\"goto('page2')\" name=\"page2\">Page Two</md-nav-item>\n" +
    "      <md-nav-item md-nav-click=\"goto('page3')\" name=\"page3\">Page Three</md-nav-item>\n" +
    "      <!-- these require actual routing with ui-router or ng-route, so they won't work in the demo\n" +
    "      <md-nav-item md-nav-sref=\"app.page4\" name=\"page4\">Page Four</md-nav-item>\n" +
    "      <md-nav-item md-nav-href=\"#page5\" name=\"page5\">Page Five</md-nav-item>\n" +
    "      -->\n" +
    "    </md-nav-bar>\n" +
    "    <div class=\"ext-content\">\n" +
    "      External content for `<span>{{currentNavItem}}</span>`\n" +
    "    </div>\n" +
    "  </md-content>");
}]);

angular.module("../app/components/ux/ngcontext/ngcontext.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/components/ux/ngcontext/ngcontext.html",
    "");
}]);

angular.module("../app/index-async.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/index-async.html",
    "<!doctype html>\n" +
    "<html lang=\"en\">\n" +
    "<head>\n" +
    "  <meta charset=\"utf-8\">\n" +
    "  <link rel=\"stylesheet\" href=\"bower_components/html5-boilerplate/dist/css/normalize.css\">\n" +
    "  <link rel=\"stylesheet\" href=\"bower_components/html5-boilerplate/dist/css/main.css\">\n" +
    "  <style>\n" +
    "    [ng-cloak] {\n" +
    "      display: none;\n" +
    "    }\n" +
    "  </style>\n" +
    "  <script src=\"bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js\"></script>\n" +
    "  <script>\n" +
    "    // include angular loader, which allows the files to load in any order\n" +
    "    //@@NG_LOADER_START@@\n" +
    "    // You need to run `npm run update-index-async` to inject the angular async code here\n" +
    "    //@@NG_LOADER_END@@\n" +
    "\n" +
    "    // include a third-party async loader library\n" +
    "    /*!\n" +
    "     * $script.js v1.3\n" +
    "     * https://github.com/ded/script.js\n" +
    "     * Copyright: @ded & @fat - Dustin Diaz, Jacob Thornton 2011\n" +
    "     * Follow our software http://twitter.com/dedfat\n" +
    "     * License: MIT\n" +
    "     */\n" +
    "    !function(a,b,c){function t(a,c){var e=b.createElement(\"script\"),f=j;e.onload=e.onerror=e[o]=function(){e[m]&&!/^c|loade/.test(e[m])||f||(e.onload=e[o]=null,f=1,c())},e.async=1,e.src=a,d.insertBefore(e,d.firstChild)}function q(a,b){p(a,function(a){return!b(a)})}var d=b.getElementsByTagName(\"head\")[0],e={},f={},g={},h={},i=\"string\",j=!1,k=\"push\",l=\"DOMContentLoaded\",m=\"readyState\",n=\"addEventListener\",o=\"onreadystatechange\",p=function(a,b){for(var c=0,d=a.length;c<d;++c)if(!b(a[c]))return j;return 1};!b[m]&&b[n]&&(b[n](l,function r(){b.removeEventListener(l,r,j),b[m]=\"complete\"},j),b[m]=\"loading\");var s=function(a,b,d){function o(){if(!--m){e[l]=1,j&&j();for(var a in g)p(a.split(\"|\"),n)&&!q(g[a],n)&&(g[a]=[])}}function n(a){return a.call?a():e[a]}a=a[k]?a:[a];var i=b&&b.call,j=i?b:d,l=i?a.join(\"\"):b,m=a.length;c(function(){q(a,function(a){h[a]?(l&&(f[l]=1),o()):(h[a]=1,l&&(f[l]=1),t(s.path?s.path+a+\".js\":a,o))})},0);return s};s.get=t,s.ready=function(a,b,c){a=a[k]?a:[a];var d=[];!q(a,function(a){e[a]||d[k](a)})&&p(a,function(a){return e[a]})?b():!function(a){g[a]=g[a]||[],g[a][k](b),c&&c(d)}(a.join(\"|\"));return s};var u=a.$script;s.noConflict=function(){a.$script=u;return this},typeof module!=\"undefined\"&&module.exports?module.exports=s:a.$script=s}(this,document,setTimeout)\n" +
    "\n" +
    "    // load all of the dependencies asynchronously.\n" +
    "    $script([\n" +
    "      'bower_components/angular/angular.js',\n" +
    "      'bower_components/angular-route/angular-route.js',\n" +
    "      'app.js',\n" +
    "      'view1/view1.js',\n" +
    "      'view2/view2.js',\n" +
    "      'components/version/version.js',\n" +
    "      'components/version/version-directive.js',\n" +
    "      'components/version/interpolate-filter.js'\n" +
    "    ], function() {\n" +
    "      // when all is done, execute bootstrap angular application\n" +
    "      angular.bootstrap(document, ['myApp']);\n" +
    "    });\n" +
    "  </script>\n" +
    "  <title>My AngularJS App</title>\n" +
    "  <link rel=\"stylesheet\" href=\"app.css\">\n" +
    "</head>\n" +
    "<body ng-cloak>\n" +
    "  <ul class=\"menu\">\n" +
    "    <li><a href=\"#!/view1\">view1</a></li>\n" +
    "    <li><a href=\"#!/view2\">view2</a></li>\n" +
    "  </ul>\n" +
    "\n" +
    "  <div ng-view></div>\n" +
    "\n" +
    "  <div>Angular seed app: v<span app-version></span></div>\n" +
    "\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("../app/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/index.html",
    "<!DOCTYPE html>\n" +
    "<!--[if lt IE 7]>      <html lang=\"en\" ng-app=\"myApp\" class=\"no-js lt-ie9 lt-ie8 lt-ie7\"> <![endif]-->\n" +
    "<!--[if IE 7]>         <html lang=\"en\" ng-app=\"myApp\" class=\"no-js lt-ie9 lt-ie8\"> <![endif]-->\n" +
    "<!--[if IE 8]>         <html lang=\"en\" ng-app=\"myApp\" class=\"no-js lt-ie9\"> <![endif]-->\n" +
    "<!--[if gt IE 8]><!--> <html lang=\"en\" ng-app=\"myApp\" class=\"no-js\"> <!--<![endif]-->\n" +
    "<head>\n" +
    "  <meta charset=\"utf-8\">\n" +
    "  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
    "  <title>My AngularJS App</title>\n" +
    "  <meta name=\"description\" content=\"\">\n" +
    "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
    "  <link rel=\"stylesheet\" href=\"../bower_components/html5-boilerplate/dist/css/normalize.css\">\n" +
    "  <link rel=\"stylesheet\" href=\"../bower_components/html5-boilerplate/dist/css/main.css\">\n" +
    "  <link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.css\">\n" +
    "  <link rel=\"stylesheet\" href=\"app.css\">\n" +
    "  <script src=\"../bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js\"></script>\n" +
    "\n" +
    "  <!-- Latest compiled and minified CSS -->\n" +
    "<link rel=\"stylesheet\" href=\"../bower_components/bootstrap/dist/css/bootstrap.min.css\" >\n" +
    "\n" +
    "<!-- Optional theme -->\n" +
    "<link rel=\"stylesheet\" href=\"../bower_components/bootstrap/dist/css/bootstrap-theme.min.css\" >\n" +
    "<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n" +
    "<!-- Latest compiled and minified JavaScript -->\n" +
    "<script src=\"../bower_components/bootstrap/dist/js/bootstrap.min.js\"></script>\n" +
    "\n" +
    "\n" +
    "</head>\n" +
    "<body>\n" +
    "  <!--<ul class=\"menu\">\n" +
    "    <li><a href=\"#/home\">view1</a></li>\n" +
    "    <li><a href=\"#/login\">view2</a></li>\n" +
    "  </ul>\n" +
    "  -->\n" +
    "  \n" +
    "  <!--[if lt IE 7]>\n" +
    "      <p class=\"browsehappy\">You are using an <strong>outdated</strong> browser. Please <a href=\"http://browsehappy.com/\">upgrade your browser</a> to improve your experience.</p>\n" +
    "  <![endif]-->\n" +
    "\n" +
    "  <div ui-view></div>\n" +
    "\n" +
    "  <!-- In production use:\n" +
    "  <script src=\"//ajax.googleapis.com/ajax/libs/angularjs/x.x.x/angular.min.js\"></script>\n" +
    "  -->\n" +
    "\n" +
    "  \n" +
    "  <script src=\"../bower_components/angular/angular.js\"></script>\n" +
    "  <script src=\"../bower_components/angular-route/angular-route.js\"></script>\n" +
    "  <script src=\"../bower_components/angular-ui-router/release/angular-ui-router.js\"></script>\n" +
    "  <script src=\"../bower_components/angular-aria/angular-aria.js\"></script>\n" +
    "  <script src=\"../bower_components/angular-messages/angular-messages.js\"></script>\n" +
    "  <script src=\"../bower_components/angular-animate/angular-animate.js\"></script>\n" +
    "  <script src=\"../bower_components/angular-material/angular-material.js\"></script>\n" +
    " \n" +
    "  <!--\n" +
    "  <script src=\"app.js\"></script>\n" +
    "  <script src=\"view1/view1.js\"></script>\n" +
    "  <script src=\"view2/view2.js\"></script>\n" +
    "  <script src=\"components/version/version.js\"></script>\n" +
    "  <script src=\"components/version/version-directive.js\"></script>\n" +
    "  <script src=\"components/version/interpolate-filter.js\"></script>\n" +
    "  -->\n" +
    "  <script type=\"text/javascript\" src=\"../dist/app.js\"></script>\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);
