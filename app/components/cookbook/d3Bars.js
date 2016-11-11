angular.module('cookbook')
    .directive('d3Bars', ['d3Service', function(d3Service) {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            scope: {
                data: "=",
                label: "@",
                onClick: "&"
            }, // {} = isolate, true = child, false/undefined = no change
            // controller: function($scope, $element, $attrs, $transclude) {},
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            // templateUrl: '',
            // replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function($scope, iElm, iAttrs, controller) {
                d3Service.d3().then(function(d3) {
                    var margin = parseInt(iAttrs.margin) || 20,
                        barHeight = parseInt(iAttrs.barHeight) || 20,
                        barPadding = parseInt(iAttrs.barPadding) || 5;


                    var svg = d3.select(iElm[0])
                        .append('svg')
                        .style('width', '100%');

                    window.onresize = function() {
                        $scope.apply();
                    }

                    // $scope.data = [
                    //     { name: 'Greg', score: 99 },
                    //     { name: 'Ari', score: 98 },
                    //     { name: 'Q', score: 96 },
                    //     { name: 'Loser', score: 44 }
                    // ];
                    $scope.$watch(function() {
                        return angular.element(window)[0].innerWidth;
                    }, function() {
                        $scope.render($scope.data);
                    });

                    $scope.render = function(data) {
                        svg.selectAll('*').remove();

                        // If we don't pass any data, return out of the element
                        // if (!data) return;

                        // setup variables
                        var width, height, max;
                        width = d3.select(iElm[0])._groups[0][0].offsetWidth - 20;
                        // 20 is for margins and can be changed
                        height = $scope.data.length * 35;
                        // 35 = 30(bar height) + 5(margin between bars)
                        max = 98;

                        // set the height based on the calculations above
                        svg.attr('height', height);

                        //create the rectangles for the bar chart
                        svg.selectAll('rect')
                            .data(data)
                            .enter()
                            .append("rect")
                            .on("click", function(d, i) {
                                return $scope.onClick({ item: d }); })
                            .attr("height", 30) // height of each bar
                            .attr("width", 0) // initial width of 0 for transition
                            .attr("x", 10) // half of the 20 side margin specified above
                            .attr("y", function(d, i) {
                                return i * 35;
                            }) // height + margin between bars
                            .attr('fill','yellow')
                            .transition()
                            .duration(1000) // time of duration
                            .attr("width", function(d) {
                                return d.score / (max / width);
                            }); // width based on scale

                        svg.selectAll("text")
                            .data(data)
                            .enter()
                            .append("text")
                            .attr("fill", "#fff")
                            .attr("y", function(d, i) {
                                return i * 35 + 22;
                            })
                            .attr("x", 15)
                            .text(function(d) {
                                return d[$scope.label];
                            });
                    }
                });
            }
        };
    }]).controller('D3Ctrl', ['$scope', function($scope){
      $scope.title = "D3Ctrl";
      $scope.d3Data = [
        {name: "Greg", score:98},
        {name: "Ari", score:96},
        {name: "Loser", score: 48}
      ];
      $scope.d3OnClick = function(item){
        alert(item.name);
      };
    }])
