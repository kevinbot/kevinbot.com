'use strict';

/**
 * @ngdoc function
 * @name digitalpassportApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the digitalpassportApp
 */
angular.module('digitalpassportApp')
  .controller('NavCtrl', function ($scope, $location) {
    $scope.scroll = function() {
      $location.hash(null);
      //$anchorScroll();
    };
  });
