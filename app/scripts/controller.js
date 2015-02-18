angular.module('app.controllers', []).controller('loginController', function($scope) {

	$scope.submit = function() {
		'use strict';
		//console.log($scope.email.indexOf('@'));
		//$scope.website.indexOf("http://",0);

		var errorArray = [
			'Name cannot be left empty',
			'Email cannot be left empty',
			'Email must contain an "@"',
			'Website cannot be left empty',
			'Website must start with http://',
			'Message cannot be left empty'
		];

		if(angular.isUndefined($scope.name) || $scope.name === "") {
			$scope.error1 = errorArray[0];
		} else {
			$scope.error1 = undefined;
		}
		if(angular.isUndefined($scope.email) || $scope.email === "") {
			$scope.error2 = errorArray[1];
		} 
		else {
			for(var i=0; i < $scope.email.length; i++) {
				if($scope.email.indexOf('@') == -1) {
					$scope.error2 = errorArray[2];
				} else {
					$scope.error2 = "";
				}
			}
		}
		if(angular.isUndefined($scope.website)) {
			$scope.error3 = errorArray[3];
		} else {
			if($scope.website.indexOf("http://",0)) {
				$scope.error3 = "";
			} else {
				$scope.errorArray[4];
			}
		}
	}

});