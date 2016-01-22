app.controller('postCtrl', function($scope, postService, $stateParams) {
  $scope.post = postService.post;
  $scope.isLoading = true;

  var initData = function() {
    $scope.isLoading = true;

    postService.getById($stateParams.postId, function() {
      $scope.isLoading = false;
    });
  };

  initData();
});