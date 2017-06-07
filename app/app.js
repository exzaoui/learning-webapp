'use strict';

// Declare app level module which depends on views, and components
angular.module('webapp', [
  'ngRoute',
    'webapp.home',
    'webapp.register'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
