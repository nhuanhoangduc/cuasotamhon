app.factory('indexService', function($http) {
  var updatePosts = function(source, data) {
    source.length = [];
    for (var i = 0; i < data.length; i++) {
      source.push(data[i]);
    }
  };

  var service = {
    posts: [],

    getByPage: function(count, categoryId, pageNumber) {
      $http.post('/posts/getbypage/', {
        count: count,
        categoryId: categoryId,
        pageNumber: pageNumber
      }).then(function success(response) {
        updatePosts(service.posts, response.data);
      }, function error() {
        alert();
      })
    },

    count: function(categoryId, callback) {
      $http.post('/posts/count', {
        categoryId: categoryId
      }).then(function success(response) {
        callback(response.data);
      }, function error() {
        alert();
      })
    }
  };

  return service;
});