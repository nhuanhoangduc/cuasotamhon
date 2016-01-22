app.controller('indexCtrl', function($scope, indexService, $stateParams) {
  $scope.isLoading = true;

  $scope.pageNumber = $stateParams.pageNumber;
  $scope.categoryId = $stateParams.categoryId;

  $scope.numberPage = [];
  $scope.data = 'nasdfasdfasdfasdfasdf asdf asdf a';
  $scope.service = indexService;

  $scope.active = function(number) {
    console.log(number);
    if (number === $scope.pageNumber)
      return 'active';
    else
      return '';
  };

  var initData = function() {
    $scope.isLoading = true;

    $scope.service.count($scope.categoryId, function(result) {
      for (var i = 1; i <= Math.ceil(result.count / 6); i++) {
        $scope.numberPage.push(i);
      }
    });

    $scope.service.getByPage(6, $scope.categoryId, $scope.pageNumber, function done() {
      $scope.isLoading = false;
    });
  };

  initData();
});