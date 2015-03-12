'use strict';

/**
 * @ngdoc overview
 * @name digitalpassportApp
 * @description
 * # digitalpassportApp
 *
 * Main module of the application.
 */
angular
  .module('digitalpassportApp', [
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
