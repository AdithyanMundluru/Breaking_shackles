/**
 * 
 */
var myApp= angular.module("myModule",[]);

var myController = function($scope){ 
	$scope.UserName = "";
    $scope.Password = "";
    $scope.Money="Eur 2837402"
}

myApp.controller("myController",myController);