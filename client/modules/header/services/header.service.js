app.factory('headerService', function($http, toastr) {
  var updateUser = function(user, data) {
    /* remove old data*/
    for (var key in user) {
      delete user[key];
    }

    /* update new data */
    for (var key in data) {
      user[key] = data[key];
    }
  };

  var service = {
    user: {},

    getCurrentUser: function(callback) {
      $http.get('/users').then(function success(response) {
        updateUser(service.user, response.data);
        console.log(service.user);
        callback;
      }, function error() {
        toastr.error('Không cập nhật được nội dung, vui lòng xem lại đường truyền', 'Lỗi đường truyền', {
          closeButton: true
        });
      });
    },

    login: function(username, password, callback) {
      $http.post('/users/login', {
        username: username,
        password: password
      }).then(function success() {
        toastr.success('Đăng nhập thành công', 'Thông báo', {
          closeButton: true
        });
        callback;
        service.getCurrentUser();
      }, function error() {
        toastr.warning('Thông tin đăng nhập sai', 'Cảnh báo', {
          closeButton: true
        });
      })
    },

    logout: function(callback) {
      $http.get('/users/logout').then(function success(response) {
        service.getCurrentUser();
        toastr.success('Đăng xuất thành công', 'Thông báo', {
          closeButton: true
        });
        callback;
      }, function error() {
        toastr.error('Vui lòng kiểm tra lại đường truyền', 'Lỗi xảy ra', {
          closeButton: true
        });
      });
    }

  };

  service.getCurrentUser();

  return service;
});