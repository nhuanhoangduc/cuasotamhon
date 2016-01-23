app.controller('naviCtrl', function($scope, profileService) {
  $scope.service = profileService;

  $scope.service.getCurrentUser();
});