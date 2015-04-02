'use strict';

/**
 * @ngdoc function
 * @name digitalpassportApp.controller:DocsCtrl
 * @description
 * # DocsCtrl
 * Controller of the digitalpassportApp
 */
angular.module('digitalpassportApp')
  .controller('DocsCtrl', function ($scope, $location, $anchorScroll, $http) {
    $scope.pageName = $location.path().replace('/docs/', '');

    $location.hash('main');
    $anchorScroll();
    $location.hash(null);

    $scope.markdown = '';

    var githubProxyURL = 'https://github-raw-cors-proxy.herokuapp.com/wiki';
    var repoExtension = '/openname/specifications/';
    var url = githubProxyURL + repoExtension + $scope.pageName + '.md';
    $http.get(url)
        .success(function(data) {
            $scope.markdown = data;
        })
        .error(function(data) { console.log(data); });

  });
