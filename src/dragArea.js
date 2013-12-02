angular.module('myApp').directive('dragArea', function() {
    return {
        restrict: 'A',
        link: function($scope, $element, $attributes) {
            var callback = $scope[$attributes.dragArea];
            var isValidCallback = !!(callback && typeof callback === 'function');
            $element.bind('dragenter', function(e) {
                $scope.$apply(function() {
                    e.stopPropagation();
                    e.preventDefault();
                    if (isValidCallback) {
                        callback();
                    }
                });
            });
        }
    };
});
