
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
	}])