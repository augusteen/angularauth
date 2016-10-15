var views = {
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
 