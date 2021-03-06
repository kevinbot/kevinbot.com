'use strict';

/**
 * @ngdoc function
 * @name digitalpassportApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the digitalpassportApp
 */
angular.module('digitalpassportApp')
  .controller('NavCtrl', function ($scope, $location, $window) {
    $scope.scroll = function() {
      $location.hash(null);
      //$anchorScroll();
    };

    $scope.$on('$routeChangeStart', function() {
        var container = document.getElementById('st-container');
        window.classie.remove(container, 'st-menu-open');
    });

    var forceSSL = function (productionDomain) {
        if ($location.protocol() !== 'https' &&
            $location.host() === productionDomain) {
            $window.location.href = $location.absUrl().replace('http', 'https');
        }
    };
    forceSSL('passcard.info');
  });
