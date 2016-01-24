app.controller('categoryCtrl', function($scope, categoryService) {
  $scope.service = categoryService;
  $scope.isAdding = true;
  $scope.category = {};

  $scope.add = function() {
    $scope.service.add($scope.category, function() {
      delete $scope.category.name;
    });
  };

  $scope.remove = function(categoryId) {
    if (confirm('Chắc chắn muốn xóa ?')) {
      $scope.service.remove(categoryId);
    }
  };

  $scope.edit = function(category) {
    $scope.isAdding = false;

    $scope.category.name = category.name;
    $scope.category._id = category._id;
  };

  $scope.save = function() {
    $scope.service.edit($scope.category, function() {
      $scope.isAdding = true;
      delete $scope.category.name;
      delete $scope.category._id;
    });
  };

  $scope.cancel = function() {
    $scope.isAdding = true;
    delete $scope.category.name;
    delete $scope.category._id;
  };
});