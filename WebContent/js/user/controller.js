/**
 * 
 */

var myApp= angular.module("myModule",[]);

var myController = function($scope,$http){ 
  $scope.Money="2,231,324";
 $scope.donerSubmit=function(){
	 	var object = {};
		object.UserName = $scope.UserName
	   object.Password= $scope.Password;
	    object.Name=$scope.Name;
	    object.NodeID=$scope.NodeId;
	    object.Status=$scope.Status;
	 $http.post('http://localhost:4468/BreakingShackles/api/api/function',object).then(function(response){
		 $scope.message=response.data;
	 },function(error){
		 $scope.message="Service Fail";
	 })
 } 
	

	
		
	
}

myApp.controller("myController",myController);