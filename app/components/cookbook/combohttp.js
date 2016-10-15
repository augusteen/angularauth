angular.module('cookbook')
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
