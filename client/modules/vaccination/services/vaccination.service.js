app.factory('vacxinService', function($http, toastr) {

  var updateSchedules = function(source, data) {
    source.length = [];
    for (var i = 0; i < data.length; i++) {
      source.push(data[i]);
    }
  };

  var service = {

    schedules: [],

    getAll: function(callback) {
      $http
        .get('/vacxin')
        .then(function success(response) {
          updateSchedules(service.schedules, response.data);
          callback();
        }, function error() {
          toastr.error('Không cập nhật được nội dung, vui lòng xem lại đường truyền', 'Lỗi đường truyền', {
            closeButton: true
          });
        });
    }
  };

  return service;

});