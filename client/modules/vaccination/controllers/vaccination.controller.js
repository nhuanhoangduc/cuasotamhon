app.controller('vacxinCtrl', function(vacxinService, $scope) {
  $scope.service = vacxinService;
  $scope.getYear = 0;
  $scope.getCount = [0];
  $scope.schedules = {};


  var updateSchedules = function() {
    for (var i = 0; i < $scope.getCount.length; i++) {
      var list = [];

      for (var x = 0; x < $scope.service.schedules.length; x++) {
        var vacxin = $scope.service.schedules[x];
        if (vacxin.year === i)
          list.push(vacxin);
      }

      $scope.schedules[i] = list;
    }
    console.log($scope.schedules);
  };

  $scope.service.getAll(function() {
    $scope.getYear = $scope.service.schedules[$scope.service.schedules.length - 1].year;
    for (var i = 0; i < $scope.getYear; i++) {
      $scope.getCount.push(i + 1);
    }
    updateSchedules();
  });

});