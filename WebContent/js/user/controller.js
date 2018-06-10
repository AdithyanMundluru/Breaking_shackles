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
        $scope.Money = "10,000,000";
    });
 
 $scope.DonarAccept=function(){
	 	var object = {};
		$scope.donarName;
		$scope.donarEmail;
	    object.amount=$scope.Amount;
	    object.contact=$scope.MobileNo;
	    var url1="http://23.101.72.31:80/rest/breakingshackles/v1/AddToPool/AddToPool?Contact=%22+"+object.contact+"%22&Amount="+object.amount
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
	        $scope.message = "Success";
	    }, function myError(response) {
	        $scope.message = "";
	    });
 }
 $scope.NGO=function(){
	 	var objectNgo = {};
		objectNgo.NgoName=$scope.NgoName;
		objectNgo.Email=$scope.Email;
	    objectNgo.NodeID=$scope.registrationKey;
	    var url2="http://23.101.72.31:80/rest/breakingshackles/v1/Onboarding/RegisterPeer?username=Jaimatadi&password='xyz'&contact='+31685468877'&_password='abcdef'&name="+objectNgo.NgoName+"&nodeid="+objectNgo.NodeID
		$http({
	        method : "GET",
	        url : url2,
	        "async": true,
			  "crossDomain": true,"headers": {
				    "cache-control": "no-cache",
				    "postman-token": "e2df787a-bfc1-dce8-dccb-4b88dcf03114",
				    "Access-Control-Allow-Origin" : "*"
				  }
	        
	    }).then(function mySuccess(response) {
	        $scope.message = "Success";
	    }, function myError(response) {
	        $scope.message = "";
	    });
    
}
 $scope.Request=function(){
	 	var objectRequest = {};
		objectRequest.Name=$scope.RequestName;
		$scope.RequestEmail;
	    objectRequest.Amount=$scope.Amount;
	    objectRequest.MobileNo=$scope.MobileNo;
	    
	    var url3="http://23.101.72.31:80/rest/breakingshackles/v1/TransferOps/TransferToPeer?nodeusername="+objectRequest.Name+"&amount="+objectRequest.Amount
		$http({
	        method : "GET",
	        url : url3,
	        "async": true,
			  "crossDomain": true,"headers": {
				    "cache-control": "no-cache",
				    "postman-token": "e2df787a-bfc1-dce8-dccb-4b88dcf03114",
				    "Access-Control-Allow-Origin" : "*"
				  }
	        
	    }).then(function mySuccess(response) {
	        $scope.message = "Success";
	    }, function myError(response) {
	        $scope.message = "";
	    });
 
 }
}


myApp.controller("myController",myController);