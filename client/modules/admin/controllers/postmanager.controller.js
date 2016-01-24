app.controller('postmanagerCtrl', function($scope, categoryService, postmanagerService) {
  $scope.categoryService = categoryService;
  $scope.allPosts = {};
  $scope.isAdding = false;
  $scope.isEditing = false;

  $scope.post = {};

  var updateData = function() {
    $scope.categoryService.getAllCallback(function() {
      for (var i = 0; i < $scope.categoryService.categories.length; i++) {
        var categoryId = $scope.categoryService.categories[i]._id;
        var name = $scope.categoryService.categories[i].name;

        postmanagerService.getPostByCategory(categoryId, name, function(posts, name) {
          $scope.allPosts[name] = posts;
          for (var x = 0; x < posts.length; x++) {
            var post = posts[x];
            post.date = moment(post.date).format('MM-DD-YYYY, hh:mm');
          }
        });
      }
    });
  };

  $scope.remove = function(postId) {
    if (confirm('Có muốn xóa bài?')) {
      postmanagerService.remove(postId, function() {
        updateData();
      });
    }
  };

  $scope.edit = function(post) {
    $scope.categoryService.getAllCallback(function() {
      $scope.post = post;
      $scope.isEditing = true;
    });
  };

  $scope.add = function() {
    $scope.categoryService.getAllCallback(function() {
      $scope.isAdding = true;
    });
  };

  $scope.cancel = function(post) {
    $scope.post = {};
    $scope.isEditing = false;
    $scope.isAdding = false;
  };

  $scope.save = function() {
    if ($scope.isAdding) {
      postmanagerService.add($scope.post, function() {
        $scope.cancel();
        updateData();
      });
    } else if ($scope.isEditing) {
      postmanagerService.edit($scope.post, function() {
        $scope.cancel();
        updateData();
      });
    }
  };

  updateData();

});