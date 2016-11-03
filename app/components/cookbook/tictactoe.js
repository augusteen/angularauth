/**
 * 
 * @class TicTacToe
 */

angular.module('cookbook')
    .directive('tictactoe', function() {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            // scope: {
            //  board: '='
            // }, 
            scope: { board: '=', hello: '=', play: '&' }, // {} = isolate, true = child, false/undefined = no change
            // controller: function($scope, $element, $attrs, $transclude) {
            //     $scope.board = [];

            //     for (var i = 9; i >= 0; i--) {
            //         board[i] = "-";
            //     }

            //     console.log('controller o');
            // },
            // // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            templateUrl: 'components/cookbook/tictactoe/tictactoe.html',
            // replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function($scope, iElm, iAttrs, controller) {

            }
        };
    })
    .controller('tictacCont', ['$scope', function($scope) {

        $scope.board = [];
        $scope.hello = 'hello austin';
        $scope.play = play;

        for (var i = 0; i < 9; i++) {
            $scope.board[i] = "-";
        }

        // console.log($scope.board);

        function play(num) {
            console.log(num);
        }

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
