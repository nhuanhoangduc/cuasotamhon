var app = angular.module('nhuanApp', ['ui.router', 'ngAnimate', 'toastr', 'ui.bootstrap'])
  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    //$urlRouterProvider.otherwise("/state1");
    //
    // Now set up the states
    $stateProvider
      .state('indexState', {
        url: '/index?pageNumber&categoryId',
        templateUrl: 'modules/index/views/index.html',
        controller: 'indexCtrl'
      })
      .state('postState', {
        url: '/post/:postId',
        templateUrl: 'modules/post/views/post.html',
        controller: 'postCtrl'
      });
  });