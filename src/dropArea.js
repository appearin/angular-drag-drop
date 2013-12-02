angular.module('myApp').directive('dropArea', function() {
    return {
        restrict: 'A',
        link: function($scope, $element, $attributes) {
            var callback = $scope[$attributes.dropArea];
            var isValidCallback = !!(callback && typeof callback === 'function');
            // In order for the 'drop' event not to navigate away from the page
            // we need to stop the 'dragover' event propagation
            $element.bind('dragover', function(e) {
                e.stopPropagation();
                e.preventDefault();
            });
            $element.bind('dragleave', function(e) {
                $scope.$apply(function() {
                    e.stopPropagation();
                    e.preventDefault();
                    if (isValidCallback) {
                        callback();
                    }
                });
            });
            $element.bind('drop', function(e) {
                $scope.$apply(function() {
                    e.stopPropagation();
                    e.preventDefault();
                    var files = e.dataTransfer.files;
                    if (isValidCallback) {
                        callback(files);
                    }
                });
            });
        }
    };
});
