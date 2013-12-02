var myApp = angular.module('myApp', []);
myApp.controller('dragAndDropController', function($scope) {

    $scope.showUploadBox = false;
    $scope.handleDragEvent = function(event) {
        $scope.showUploadBox = true;
    };

    $scope.handleDroppedFile = function(files) {
        // Do whatever you please with the dropped file(s)
        if (!files || files.length === 0) {
            $scope.showUploadBox = false;
            return;
        }
        $scope.fileSize = files[0].size;
        $scope.fileType = files[0].type;
    };
});
