angular
  .module('signupApp', ['toastr'])
  .controller('signupCtrl', function($scope, $http) {
    $scope.user = {};

    $scope.add = function() {
    	console.log($scope.user);
    };

  });