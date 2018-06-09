/**
 * 
 */

var myApp= angular.module("myModule",[]);

var myController = function($scope,$http){ 

 $scope.accept=function(){
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
	
/*	$scope.accept=function(){
		var xhr = new XMLHttpRequest();
		xhr.open("POST", 'http://51.144.86.24:8545', true);

		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
		xhr.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
		//xhr.setRequestHeader("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token");

		xhr.onreadystatechange = function() {//Call a function when the state changes.
		    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
		        // Request finished. Do processing here.
		    }
		}
		alert("I am an alert box!");
		xhr.send('{"jsonrpc":"2.0","method":"eth_sendTransaction","params":[{"from": "0x783c5275e068f572dc19c8d1d9a754201c938f38","to": "0x5e193914fcd76b55fe652e244b66890006221276","value": "0xC","data": "0x45617374206f722077657374204b73686974696a206973207468652062657374"}],"id":1}');
		var response = xhr.responseText;
		console.log(xhr.responseText);
		console.log(xhr.response);
		alert(response);
	}*/
	
		
	
}

myApp.controller("myController",myController);