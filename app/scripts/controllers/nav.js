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
    $scope.learnMore = function() {
      $location.hash(null);
      window.resetSidebarMenu();
    };
  });
