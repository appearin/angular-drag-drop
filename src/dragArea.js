angular.module('myApp').directive('dragArea', function() {
    return {
        restrict: 'A',
        link: function($scope, $element, $attributes) {
            var callback = $attributes.dragArea;
            var isValidCallback = !!($scope[callback] && typeof $scope[callback] === 'function');
            $element.bind('dragenter', function(e) {
                $scope.$apply(function() {
                    e.stopPropagation();
                    e.preventDefault();
                    if (isValidCallback) {
                        $scope[callback]();
                    }
                });
            });
        }
    };
});
