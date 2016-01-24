var app = angular.module('nhuanApp', ['ui.router', 'ngAnimate', 'toastr', 'ui.bootstrap'])
  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    //$urlRouterProvider.otherwise("/state1");
    //
    // Now set up the states
    $stateProvider
      .state('redirect', {
        url: '',
        template: '',
        controller: function($state) {
          $state.go('indexState', {
            pageNumber: 1
          });
        }
      })
      .state('indexState', {
        url: '/index?pageNumber&categoryId',
        templateUrl: 'modules/index/views/index.html',
        controller: 'indexCtrl'
      })
      .state('postState', {
        url: '/post/:postId',
        templateUrl: 'modules/post/views/post.html',
        controller: 'postCtrl'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: '../modules/profile/views/profile.html',
        controller: 'profileCtrl'
      })
      .state('vacxin', {
        url: '/vacxin',
        templateUrl: 'modules/vaccination/views/vaccination.html',
        controller: 'vacxinCtrl'
      });
  });