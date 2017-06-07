'use strict';

angular.module('webapp.home', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/home',{
        templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
    });
}])

.controller('HomeCtrl', ['$scope', '$firebaseAuth', function($scope, $firebaseAuth){
    $scope.singIn = function(){
        var username = $scope.user.email;
        var password = $scope.user.password;
        var auth = $firebaseAuth();

        auth.$signInWithEmailAndPassword(username,password).then(function(){
            console.log('User login Successful');
        }).catch(function(error){
            $scope.errMsg = true;
            $scope.errorMessage = error.message;
        });
    }
}])
