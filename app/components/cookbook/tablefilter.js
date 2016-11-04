/**
 * cookbook Module
 *
 * Description
 */
angular.module('cookbook')
    .directive('agFilter', function() {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            // scope: {}, // {} = isolate, true = child, false/undefined = no change
            controller: function($scope, $element, $attrs, $transclude) {
                $scope.list = [{
                    name: 'Alpha',
                    progress: 20
                }, {
                    name: 'Zika',
                    progress: 100
                },{
                    name: 'Omega',
                    progress: 40
                }, {
                    name: 'Beta',
                    progress: 10
                }];

                $scope.setProgress = function(progress){
                	return {width:progress +'%' }
                }

                $scope.setChar = function(name){
                	return name.split('')[0];
                }
            },
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
