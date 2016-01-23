app.controller('headerCtrl', function($scope, profileService) {
  $scope.service = profileService;

  $scope.login = function(username, password) {
    $scope.service.login(username, password);
  };

  $scope.logout = function() {
    if ($scope.service.user.isLogin) {
      if (confirm('Bạn có muốn đăng xuất khỏi trang web ?')) {
        $scope.service.logout();
      }
    } else {
      confirm('Chưa đăng nhập !')
    }
  };

  $scope.search = function(str) {
    console.log(str);
  };
});