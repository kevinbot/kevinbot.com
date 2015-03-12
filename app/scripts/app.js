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
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true).hashPrefix('!');
  });
