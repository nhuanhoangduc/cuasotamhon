app.factory('postService', function($http, toastr) {
  var updatePost = function(post, data) {
    /* remove old data*/
    for (var key in post) {
      delete post[key];
    }

    /* update new data */
    for (var key in data) {
      post[key] = data[key];
    }
  };

  var service = {
    post: {},

    getById: function(postId, callback) {
      $http.get('/posts/id/' + postId).then(function success(response) {
        updatePost(service.post, response.data);
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