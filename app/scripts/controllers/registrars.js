'use strict';

/**
 * @ngdoc function
 * @name digitalpassportApp.controller:RegistrarsCtrl
 * @description
 * # RegistrarsCtrl
 * Controller of the digitalpassportApp
 */
angular.module('digitalpassportApp')
  .controller('RegistrarsCtrl', function ($location, $anchorScroll) {
    $location.hash('main');
    $anchorScroll();
    $location.hash(null);
  });
