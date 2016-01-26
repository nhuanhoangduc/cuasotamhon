angular.module('app', ['toastr']).controller('registerCtrl', function($scope, $http, toastr) {
  $scope.user = {};
  $scope.password;

  $scope.checkPhone = function() {
    return $scope.user.phone && $scope.user.phone.length >= 10 && /^[0-9]+$/.test($scope.user.phone);
  };

  $scope.checkUsername = function() {
    return $scope.user.username && $scope.user.username.length >= 1;
  };

  $scope.checkPassword = function() {
    return $scope.user.password && $scope.user.password.length >= 1;
  };

  $scope.checkMatchPassword = function() {
    return $scope.user.password === $scope.password;
  };

  $scope.isValid = function() {
    return ($scope.checkPhone() && $scope.checkUsername() && $scope.checkPassword() && $scope.checkMatchPassword());
  };

  $scope.add = function() {
    $http
      .post('/users', $scope.user)
      .then(function success(response) {
        alert('Đã thêm tài khoản');
        $scope.user = {};
      }, function error() {
        alert('Tài khoản đã tồn tại hoặc đường truyền bị lỗi');
      });
  };
});