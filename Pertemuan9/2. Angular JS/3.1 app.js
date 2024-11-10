var app = angular.module('myApp', []);

app.controller('MainController', function($scope) {

    //ng-model
    $scope.name = '';

    //ng-repeat
    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    //ng-show and ng-hide
    $scope.isVisible = true;
    $scope.toggleShowHide = function(){
        $scope.isVisible = !$scope.isVisible;
    };

    //ng-if
    $scope.toggleCondition = false
    $scope.toggleCondition = function() {
        $scope.isConditionMet = !$scope.isConditionMet;
    };

    //ng-click
    $scope.counter = 0;
    $scope.incrementCounter = function() {
        $scope.counter++;
    }
})