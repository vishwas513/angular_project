var app1 = angular.module('app1',[]);

app1.controller('ctrl1',function($scope, $location){

	$scope.first = 1;

$scope.go = function () {
  console.log("hi");
  $location.path('/join.html');
  
};


$scope.close = function () {
console.log("hi");

$scope.lay = true;
$scope.overlay = false;

  


};


});




app1.controller('ctrl2',function($scope, $location){

	//console.log($scope.email);


	$scope.validate = function () {
	console.log($scope.email);

  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test($scope.email) && $scope.fName.split("").length > 2 && $scope.lName.split("").length > 2){

  	$scope.cal = false;
  	$scope.UI = true;

  	


  }else {

	$scope.status = "invalid Data"	

  }


};


$scope.hideCal = function() {

	
  $scope.drop == true?$scope.drop = false:$scope.drop = true; 

}



	





});

