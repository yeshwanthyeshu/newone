// a sample controller
app.controller('myctrl',function($scope,$location,$timeout,$interval,myownservice){
	$scope.name = "yeshu";
	$scope.defaultcolor = "lightblue";
	$scope.myfriendsarray=['venu','subbu','prudhvi'];
	$scope.mydetails=[{"name":"yeshu"},
		{"name":"sai"},
		{"name":"melpati"}];
		
	$scope.selection="";	
	$scope.email="";
	$scope.likes =0;
	$scope.plusOne = function() {
			this.likes = this.likes+1;
	};
	$scope.myUrl = $location.absUrl();		
	$scope.alertme = function() {
		window.alert("Hi! there .how are you?");
	};
	$scope.mymessage="Hi every one";
	$timeout(function () {
        $scope.mymessage = "How are you today?";
    }, 2000);
	$scope.mytime = new Date().toLocaleString();
	$interval(function(){
		$scope.mytime = new Date().toLocaleString();
	},1000);
	$scope.tobinary = 4
	$scope.mybinaryfunc = myownservice.binaryfunc(255);
	
});
// the following is a service
app.service("myownservice",function() {
	this.binaryfunc = function(value) {
		return value.toString(2);
	};
});