'use strict';

angular.module('webapp.post', ['ngRoute', 'firebase'])

    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/post/:id',{
            templateUrl: 'post/post.html',
            controller: 'PostCtrl'
        });
    }])

.controller('PostCtrl', ['$scope', '$routeParams', 'CommonProp', '$firebaseArray', '$firebaseObject', '$location', function($scope, $routeParams, CommonProp, $firebaseArray, $firebaseObject, $location){
    $scope.username = CommonProp.getUser();

    var articleRef = firebase.database().ref().child('Articles').orderByKey().equalTo($routeParams.id);
    $scope.article = $firebaseArray(articleRef);
    console.log($scope.article);

    var categoriesRef = firebase.database().ref().child('Categories');
    $scope.categories = $firebaseArray(categoriesRef);


}]);
