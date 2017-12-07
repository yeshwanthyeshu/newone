var app = angular.module('myApp',[]);
app.run(function($rootScope) {
	$rootScope.mycolor ='blue';
	$rootScope.tobinary=10;
})
app.directive("myowndirective", function()
{
	return{
		restrict: "EA",
		template:"<div>I myself made this directive</div>"
	};
});