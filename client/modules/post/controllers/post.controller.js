app.controller('postCtrl', function($scope, postService, $stateParams, $sce) {
  $scope.post = postService.post;
  $scope.isLoading = true;

  var initData = function() {
    $scope.isLoading = true;

    postService.getById($stateParams.postId, function() {
      $scope.isLoading = false;
    });
  };

  $scope.getContent = function(content) {
    return $sce.trustAsHtml(content);
  };

  initData();
});