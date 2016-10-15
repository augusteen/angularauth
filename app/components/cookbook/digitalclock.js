
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
	}]);