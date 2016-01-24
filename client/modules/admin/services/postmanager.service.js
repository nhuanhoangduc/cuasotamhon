app.factory('postmanagerService', function($http, toastr) {

  var service = {

    getPostByCategory: function(categoryId, name, callback) {
      $http
        .get('/posts/category/' + categoryId)
        .then(function success(response) {
          callback(response.data, name);
        }, function error() {
          toastr.error('Kiểm tra đường truyền', 'Lỗi xảy ra', {
            closeButton: true
          });
        });
    },

    remove: function(postId, callback) {
      $http
        .delete('/posts/' + postId)
        .then(function success(response) {
          toastr.success('Đã xóa thành công !', 'Thành công', {
            closeButton: true
          });
          callback();
        }, function error() {
          toastr.error('Kiểm tra đường truyền', 'Lỗi xảy ra', {
            closeButton: true
          });
        });
    },

    add: function(post, callback) {
      $http
        .post('/posts', post)
        .then(function success(response) {
          toastr.success('Đã thêm thành công !', 'Thành công', {
            closeButton: true
          });
          callback();
        }, function error() {
          toastr.error('Kiểm tra đường truyền, tiêu đề trùng lặp, hay chưa điền đủ nội dung ?', 'Lỗi xảy ra', {
            closeButton: true
          });
          callback();
        });
    },

    edit: function(post, callback) {
      $http
        .put('/posts', post)
        .then(function success(response) {
          toastr.success('Đã sửa thành công !', 'Thành công', {
            closeButton: true
          });
          callback();
        }, function error() {
          toastr.error('Kiểm tra đường truyền, tiêu đề trùng lặp, hay chưa điền đủ nội dung ?', 'Lỗi xảy ra', {
            closeButton: true
          });
          callback();
        });
    },

  };

  return service;

});