(function () {
	'use strict';  // gives error for vague behaviours
	angular.module('LunchCheck', [])
	.controller('lunchCheckController', lunchCheckController);
	lunchCheckController.$inject=['$scope'];  // will protect on minification
	function lunchCheckController($scope) {
		$scope.result="";
		$scope.check = function() {
			var input=document.getElementById('lunch-menu').value.trim();
			if (input==""){
				$scope.result="Please enter data first.";
				return;
			}
			var result=input.split(',').length;
			// console.log(result);
			if (result<=3){
				$scope.result="Enjoy!";
			}
			else{
				$scope.result="Too much!";
			}	
		}
	}
})();