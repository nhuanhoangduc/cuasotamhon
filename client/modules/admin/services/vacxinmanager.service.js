app.factory('vacxinmanagerService', function($http, toastr) {

  var updateSchedules = function(source, data) {
    source.length = [];
    for (var i = 0; i < data.length; i++) {
      source.push(data[i]);
    }
  };

  var service = {

    schedules: [],

    getAll: function() {
      $http
        .get('/vacxin')
        .then(function success(response) {
          updateSchedules(service.schedules, response.data);
        }, function error() {
          toastr.error('Không cập nhật được nội dung, vui lòng xem lại đường truyền', 'Lỗi đường truyền', {
            closeButton: true
          });
        });
    },

    add: function(vacxin, callback) {
      $http
        .post('/vacxin', vacxin)
        .then(function success(response) {
          toastr.success('Thêm mới thành công', 'Thành công', {
            closeButton: true
          });
          callback();
          service.getAll();
        }, function error() {
          toastr.error('Thêm mới thất bại', 'Lỗi đường truyền', {
            closeButton: true
          });
          callback();
        });
    },

    remove: function(vacxinId) {
      $http
        .delete('/vacxin/' + vacxinId)
        .then(function success(response) {
          toastr.success('Xóa lịch tiêm chủng thành công', 'Thành công', {
            closeButton: true
          });
          service.getAll();
        }, function error() {
          toastr.error('Thêm mới thất bại', 'Lỗi đường truyền', {
            closeButton: true
          });
        })
    },

    edit: function(vacxin, callback) {
      $http
        .put('/vacxin', vacxin)
        .then(function success(response) {
          toastr.success('Cập nhật thành công', 'Thành công', {
            closeButton: true
          });
          service.getAll();
          callback();
        }, function error() {
          toastr.error('Thêm mới thất bại', 'Lỗi đường truyền', {
            closeButton: true
          });
          callback();
        })
    }
  };

  service.getAll();

  return service;
});