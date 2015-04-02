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

    $scope.$on('$routeChangeStart', function(next, current) {
        var container = document.getElementById('st-container');
        window.classie.remove(container, 'st-menu-open');
    });
  });
