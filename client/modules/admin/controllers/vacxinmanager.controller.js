app.controller('vacxinmanagerCtrl', function($scope, vacxinmanagerService) {
  $scope.service = vacxinmanagerService;
  $scope.isAdding = true;
  $scope.months = [];
  $scope.years = [];
  $scope.vacxin = {
    content: []
  };
  $scope.list = {};

  for (var i = 0; i <= 11; i++) {
    $scope.months.push(i);
  }

  for (var i = 0; i <= 15; i++) {
    $scope.years.push(i);
  }

  $scope.add = function() {
    for (var key in $scope.list) {
      var content = $scope.list[key];
      if (content.vacxin && content.note)
        $scope.vacxin.content.push(content);
      console.log(content);
    }

    $scope.service.add($scope.vacxin, function() {
      $scope.vacxin = {
        content: []
      };
      $scope.list = {};
    });
  };

  $scope.remove = function(vacxinId) {
    if (confirm('Chắc chắn muốn xóa ?')) {
      $scope.service.remove(vacxinId);
    }
  };

  $scope.edit = function(vacxin) {
    $scope.isAdding = false;

    $scope.vacxin = vacxin;
  };

  $scope.save = function() {
    $scope.service.edit($scope.vacxin, function() {
      $scope.isAdding = true;
      $scope.vacxin = {
        content: []
      };
      $scope.list = {};
    });
  };

  $scope.cancel = function() {
    $scope.isAdding = true;
    $scope.vacxin = {
      content: []
    };
    $scope.list = {};
  };
});