'use strict';

angular.module('webapp.welcome', ['ngRoute', 'firebase'])

    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/welcome',{
            templateUrl: 'welcome/welcome.html',
            controller: 'WelcomeCtrl'
        });
    }])

.controller('WelcomeCtrl', ['$scope', function($scope){

}])