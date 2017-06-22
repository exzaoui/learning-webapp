'use strict';

angular.module('webapp.welcome', ['ngRoute', 'firebase'])

    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/welcome',{
            templateUrl: 'welcome/welcome.html',
            controller: 'WelcomeCtrl'
        });
    }])

.controller('WelcomeCtrl', ['$scope', 'CommonProp', '$firebaseArray', '$firebaseObject', '$location', function($scope, CommonProp, $firebaseArray, $firebaseObject, $location){
    $scope.username = CommonProp.getUser();

    var articlesRef = firebase.database().ref().child('Articles');
    $scope.articles = $firebaseArray(articlesRef);

    var categoriesRef = firebase.database().ref().child('Categories');
    $scope.categories = $firebaseArray(categoriesRef);
}]);
