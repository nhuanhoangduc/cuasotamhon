var app = angular.module('adminApp', ['ui.router', 'froala', 'ngAnimate', 'toastr', 'ui.bootstrap', 'angularMoment'])
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
      })
      .state('postmanager', {
        url: '/postmanager',
        templateUrl: '../modules/admin/views/postmanager.html',
        controller: 'postmanagerCtrl'
      })
      .state('vacxinmanager', {
        url: '/vacxinmanager',
        templateUrl: '../modules/admin/views/vacxinmanager.html',
        controller: 'vacxinmanagerCtrl'
      });
  })
  .value('froalaConfig', {
    toolbarInline: false,
    placeholderText: 'Enter Text Here'
  });