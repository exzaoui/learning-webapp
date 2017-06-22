
'use strict';

// Declare app level module which depends on views, and components
angular.module('webapp', [
  'ngRoute',
    'webapp.home',
    'webapp.register',
    'webapp.welcome',
    'webapp.addPost',
    'webapp.post'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $routeProvider.otherwise({redirectTo: '/welcome'});
}]);
