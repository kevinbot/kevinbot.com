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
    'ngRoute',
    'ngRetina'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/providers', {
        templateUrl: 'views/providers.html',
        controller: 'ProvidersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true).hashPrefix('!');
  });
