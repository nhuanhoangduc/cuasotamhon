app.controller('profileCtrl', function($scope, profileService, toastr) {
  $scope.service = profileService;

  $scope.service.getCurrentUser();

  $scope.save = function(newPassword, rePassword) {
    if (newPassword !== rePassword)
      toastr.error('Vui lòng kiểm tra lại mật khẩu', 'Lỗi xảy ra', {
        closeButton: true
      });
    else {
      if (newPassword)
        $scope.service.user.password = newPassword;
      
      $scope.service.editUser($scope.service.user);
    }
  };
});