angular-drag-drop
=================

Two small Angular.js directives we are using for detecting drag and drop events in appear.in. Not tested in anything other than the latest version of Chrome and Firefox.

Usage
=====
Let's say you want to show a drop field when an image is dragged into the page, or on some other element. 

```
<html ng-app="myApp">
    <head>
        <title>Drag & drop</title>
    </head>
    <body ng-controller="dragAndDropController" drag-area="handleDragEvent">
        <div ng-show="showUploadBox" drop-area="handleDroppedFile">
        </div>
    </body>
</html>
```

```
angular.module('myApp').controller('dragAndDropController', function() {

    $scope.showUploadBox = false;
    $scope.handleDragEvent = function() {
        $scope.showUploadBox = true;
    };

    $scope.handleDroppedFile = function(files) {
        // Do whatever you please with the dropped file(s)
    };
});
```

You can use the ```dropArea``` directive without a callback if you wish to cancel the default drop event on your site. Normally, dropping a file will load that file in the browser.


Limitations
=====
These directives were built for a very specific purpose, and may not work in your case. In our case, we wanted to spawn a modal box with a drop surface when a file was dragged into the room. 

It only passes in files, but it can extended to parse links, images from websites, text, etc.