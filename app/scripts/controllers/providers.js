'use strict';

/**
 * @ngdoc function
 * @name digitalpassportApp.controller:ProvidersCtrl
 * @description
 * # ProvidersCtrl
 * Controller of the digitalpassportApp
 */
angular.module('digitalpassportApp')
  .controller('ProvidersCtrl', function ($location, $anchorScroll) {
    $location.hash('main');
    $anchorScroll();
    $location.hash(null);
  });
