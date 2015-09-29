/**
 * Created by Makhtar on 19/09/2015.
 */

angular.module('foodstagramApp', ['ngResource']);

//
//foodstagramApp.controller('GreetingsCtrl', ['$scope', function ($scope) {
//    $scope.greeting = 'Bonjour ';
//    $scope.message = "hello"
//}]);
//
//foodstagramApp.controller('DoubleCtrl', ['$scope', function ($scope) {
//    $scope.double = 4;
//}]);
//
//foodstagramApp.controller('TripleCtrl', ['$scope', function ($scope) {
//    console.log($scope.double);
//
//    $scope.triple = function (value) {
//        return $scope.double * value * 3;
//    }
//}])
//
//foodstagramApp.directive('welcome', function () {
//    return {
//        restrict: 'E',
//        controller: function ($scope) {
//            $scope.words = [];
//            this.sayHello = function () {
//                $scope.words.push('hello');
//            }
//
//            this.sayHi = function () {
//                $scope.words.push('hi');
//            }
//        },
//        link: function (scope, element) {
//            element.bind('mouseenter', function () {
//                console.log(scope.words);
//            })
//        }
//    }
//})
//
//foodstagramApp.directive('hello', function () {
//    return {
//        require : 'welcome',
//        link: function (scope, element, attrs, welcomeCtrl) {
//            element.bind('mouseenter', function () {
//                welcomeCtrl.sayHello();
//            })
//        },
//        template : '<p>hello</p>'
//    }
//})
//
//foodstagramApp.directive('hi', function () {
//    return {
//        require : 'welcome',
//        link: function (scope, element, attrs, welcomeCtrl) {
//            element.bind('mouseenter', function () {
//                welcomeCtrl.sayHi();
//            })
//        },
//        template : '<p>hi</p>'
//
//    }
//})