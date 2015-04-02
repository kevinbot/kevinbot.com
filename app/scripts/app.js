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
    'ngRetina',
    'btford.markdown'
  ])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {

    $locationProvider.html5Mode(true).hashPrefix('!');

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/registrars', {
        templateUrl: 'views/registrar.html',
        controller: 'RegistrarsCtrl'
      })
      .when('/docs', {
        redirectTo: '/docs/Home'
      })
      .when('/docs/:pagename', {
        templateUrl: 'views/docs.html',
        controller: 'DocsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
