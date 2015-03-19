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

    $locationProvider.html5Mode(true).hashPrefix('!');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/registrars', {
        templateUrl: 'views/registrar.html',
        controller: 'RegistrarsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
