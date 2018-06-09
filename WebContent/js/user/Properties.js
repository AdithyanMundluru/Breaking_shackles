/**
 * 
 */
var config={
		"protocol" : "http",
		"port" : "8080",
		"domain" : "localhost",
		"project" : "BreakingShackles"
}

function getURI(){
	return config.protocol +"://"+ config.domain +":"+ config.port +"/"+ config.project+"/api/";
}