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
          toastr.error('Kiểm tra đường truyền', 'Thất bại', {
            closeButton: true
          });
        });
    } else if ($scope.isUpdating) {
      $http
        .put('/kids', $scope.kid)
        .then(function success(response) {
          // notification
          toastr.success('Thêm mới thành công', 'Thành công', {
            closeButton: true
          });

          // update data
          $scope.service.getCurrentUser();
        }, function error() {
          // notification error
          toastr.error('Kiểm tra đường truyền', 'Thất bại', {
            closeButton: true
          });
        });
    }

    $scope.cancel();
  };

});