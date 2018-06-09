/**
 * 
 */

var myApp= angular.module("myModule",[]);

var myController = function($scope,$http){
	
	$scope.Money = "";
	$http({
        method : "GET",
        url : "http://23.101.72.31/rest/breakingshackles/v1/GetData/PoolBalance",
        "async": true,
		  "crossDomain": true,"headers": {
			    "cache-control": "no-cache",
			    "postman-token": "e2df787a-bfc1-dce8-dccb-4b88dcf03114",
			    "Access-Control-Allow-Origin" : "*"
			  }
        
    }).then(function mySuccess(response) {
        $scope.Money = response.data;
    }, function myError(response) {
        $scope.Money = "";
    });
 
 $scope.DonarAccept=function(){
	 	var object = {};
		$scope.donarName;
		$scope.donarEmail;
	    object.amount=$scope.Amount;
	    object.contact=$scope.MobileNo;
	    var url1="http://23.101.72.31:80/rest/breakingshackles/v1/AddToPool/AddToPool?Contact=%22+"+object.contact+"%22&Amount="+object.amount+","
	    debugger;
		$http({
	        method : "GET",
	        url : url1,
	        "async": true,
			  "crossDomain": true,"headers": {
				    "cache-control": "no-cache",
				    "postman-token": "e2df787a-bfc1-dce8-dccb-4b88dcf03114",
				    "Access-Control-Allow-Origin" : "*"
				  }
	        
	    }).then(function mySuccess(response) {
	        $scope.Money = response.data;
	    }, function myError(response) {
	        $scope.Money = "";
	    });
 /*var settings = {
		 "async": true,
		 "crossDomain": true,
		 "url": "http://23.101.72.31:80/rest/breakingshackles/v1/AddToPool/AddToPool?Contact=%22+31649018921%22&Amount="+$scope.Amount,
		 "method": "GET",
		 "headers": {
		   "Cache-Control": "no-cache",
		   "Postman-Token": "256fb08a-45ab-d654-5f5f-dd4b73e50a86"
		 }
		}

		$.ajax(settings).done(function (response) {
		 console.log(response);
		});
*/
 $scope.NGO=function(){
	 	var objectNgo = {};
		objectNgo.NgoName=$scope.NgoName;
		objectNgo.Email=$scope.Email;
	
	    objectNgo.NodeID=$scope.registrationKey;
	    console.log(objectNgo)

	    
}
	
}		
}	

myApp.controller("myController",myController);