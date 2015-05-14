'use strict';

var app = angular.module("snap-around",['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/index.html',
  }).when('/support', {
    templateUrl: 'partials/support.html',
  })
}]);