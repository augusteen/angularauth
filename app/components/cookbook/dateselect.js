/**
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
            template: '<select ng-model="date.month" ng-options="month for month in months"> </select> <select ng-model="date.day" ng-options="day for day in days"> </select> <select ng-model="date.year" ng-options="year for year in years"> </select>',
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
