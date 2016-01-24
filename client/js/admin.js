var app = angular.module('adminApp', ['ui.router', 'ngAnimate', 'toastr', 'ui.bootstrap'])
  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    //$urlRouterProvider.otherwise("/state1");
    //
    // Now set up the states
    $stateProvider
      .state('redirect', {
        url: '',
        template: 'nhuan dien'
      })
      .state('category', {
        url: '/category',
        templateUrl: '../modules/admin/views/category.html',
        controller: 'categoryCtrl'
      });
  });