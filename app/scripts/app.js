'use strict';

/**
 * @ngdoc overview
 * @name digitalpassportinfoApp
 * @description
 * # digitalpassportinfoApp
 *
 * Main module of the application.
 */
angular
  .module('digitalpassportinfoApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
