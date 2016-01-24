app.factory('categoryService', function($http, toastr) {
  var updateCategories = function(source, data) {
    source.length = [];
    for (var i = 0; i < data.length; i++) {
      source.push(data[i]);
    }
  };

  var service = {
    categories: [],

    getAll: function() {
      $http.get('/categories').then(function success(response) {
        updateCategories(service.categories, response.data);
      }, function error() {
        toastr.error('Không cập nhật được nội dung, vui lòng xem lại đường truyền', 'Lỗi đường truyền', {
          closeButton: true
        });
      })
    },

    add: function(category, callback) {
      $http.post('/categories', category).then(function success(response) {
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
      })
    },

    remove: function(categoryId) {
      $http.delete('/categories/' + categoryId).then(function success(response) {
        toastr.success('Xóa hạng mục thành công', 'Thành công', {
          closeButton: true
        });
        service.getAll();
      }, function error() {
        toastr.error('Thêm mới thất bại', 'Lỗi đường truyền', {
          closeButton: true
        });
      })
    },

    edit: function(category, callback) {
      $http.put('/categories', category).then(function success(response) {
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