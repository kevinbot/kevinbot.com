'use strict';

/**
 * @ngdoc function
 * @name digitalpassportApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the digitalpassportApp
 */
angular.module('digitalpassportApp')
  .controller('MainCtrl', function ($scope) {
    $scope.pageName = 'index';

    $scope.triggerAlert = function() {
    	alert('Hey!');
    };

    $scope.name = 'Guy';
  });
