var myApp = angular.module('myApp', []);
myApp.controller('dragAndDropController', function($scope) {

    $scope.showUploadBox = false;
    $scope.handleDragEvent = function() {
        $scope.showUploadBox = true;
        console.log("Drag!");
    };

    $scope.handleDroppedFile = function(files) {
        // Do whatever you please with the dropped file(s)
        if (!files) {
            $scope.showUploadBox = false;
            console.log("Drag left or nothing dropped");
            return;
        }
        console.log("Drop!");
    };
});
