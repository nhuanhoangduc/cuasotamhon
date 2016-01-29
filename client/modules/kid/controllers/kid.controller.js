app.controller('kidCtrl', function($scope, $http, profileService, toastr) {
  $scope.service = profileService;
  $scope.isAdding = false;
  $scope.isUpdating = false;
  $scope.kid = {};

  $scope.getDate = function(date) {
    var dt = new Date(date);
    dt.setDate(dt.getDate() - 1);

    return (dt.getDate() + '-' + (dt.getMonth() + 1) + '-' + dt.getFullYear());
  };

  /* cancel */
  $scope.cancel = function() {
    $scope.isAdding = false;
    $scope.isUpdating = false;
    $scope.kid = {};
  };

  /* prepare data for adding */
  $scope.add = function() {
    $scope.isAdding = true;
    $scope.kid = {};
  };

  /* prepare data for updating */
  $scope.edit = function(kid) {
    $scope.isUpdating = true;
    delete kid.dob;
    $scope.kid = kid;
  };

  /* save kid */
  $scope.save = function() {
    var date = new Date($scope.kid.dob);
    date.setDate(date.getDate() + 1);
    $scope.kid.dob = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

    if ($scope.isAdding) {
      $http
        .post('/kids', $scope.kid)
        .then(function success(response) {
          // notification
          toastr.success('Thêm mới thành công', 'Thành công', {
            closeButton: true
          });

          // update data
          $scope.service.getCurrentUser();
        }, function error() {
          // notification error
          toastr.error('Kiểm tra đường truyền hoặc chưa nhập đủ thông tin', 'Thất bại', {
            closeButton: true
          });

          // update data
          $scope.service.getCurrentUser();
        });
    } else if ($scope.isUpdating) {
      $http
        .put('/kids', $scope.kid)
        .then(function success(response) {
          // notification
          toastr.success('Đã cập nhật thông tin', 'Thành công', {
            closeButton: true
          });

          // update data
          $scope.service.getCurrentUser();
        }, function error() {
          // notification error
          toastr.error('Kiểm tra đường truyền hoặc chưa nhập đủ thông tin', 'Thất bại', {
            closeButton: true
          });

          // update data
          $scope.service.getCurrentUser();
        });
    }

    $scope.cancel();
  };

  /* update schedules */
  $scope.updateSchedules = function(kid) {
    $http
      .put('/kids', kid)
      .then(function success(response) {
        // notification
        toastr.success('Cập nhật lịch tiêm chủng', 'Thành công', {
          closeButton: true
        });

        // update data
        $scope.service.getCurrentUser();
      }, function error() {
        // notification error
        toastr.error('Kiểm tra đường truyền', 'Thất bại', {
          closeButton: true
        });

        // update data
        $scope.service.getCurrentUser();
      });
  };

  /* delete kid */
  $scope.remove = function(kidId) {
    if (confirm('Bạn có muốn xóa dữ liệu ?')) {
      $http
        .delete('/kids/' + kidId)
        .then(function success(response) {
          // notification
          toastr.success('Xóa thành công', 'Thành công', {
            closeButton: true
          });

          // update data
          $scope.service.getCurrentUser();
        }, function error() {
          // notification error
          toastr.error('Kiểm tra đường truyền', 'Thất bại', {
            closeButton: true
          });

          // update data
          $scope.service.getCurrentUser();
        });
    }
  };

});