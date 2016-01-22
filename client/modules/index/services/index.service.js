app.factory('indexService', function($http, toastr) {
  var updatePosts = function(source, data) {
    source.length = [];
    for (var i = 0; i < data.length; i++) {
      source.push(data[i]);
    }
  };

  var service = {
    posts: [],

    getByPage: function(count, categoryId, pageNumber, callback) {
      $http.post('/posts/getbypage/', {
        count: count,
        categoryId: categoryId,
        pageNumber: pageNumber
      }).then(function success(response) {
        updatePosts(service.posts, response.data);
        callback();
      }, function error() {
        toastr.error('Không cập nhật được nội dung, vui lòng xem lại đường truyền', 'Lỗi đường truyền', {
          closeButton: true
        });
      })
    },

    count: function(categoryId, callback) {
      $http.post('/posts/count', {
        categoryId: categoryId
      }).then(function success(response) {
        callback(response.data);
      }, function error() {
        toastr.error('Không cập nhật được nội dung, vui lòng xem lại đường truyền', 'Lỗi đường truyền', {
          closeButton: true
        });
      })
    }
  };

  return service;
});