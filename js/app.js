/**
 * Created by Makhtar on 19/09/2015.
 */

angular.module('foodstagramApp', ['ngResource'], function($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    /**
     * The workhorse; converts an object to x-www-form-urlencoded serialization.
     * @param {Object} obj
     * @return {String}
     */
    var param = function(obj) {
        var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

        for(name in obj) {
            value = obj[name];

            if(value instanceof Array) {
                for(i=0; i<value.length; ++i) {
                    subValue = value[i];
                    fullSubName = name + '[' + i + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if(value instanceof Object) {
                for(subName in value) {
                    subValue = value[subName];
                    fullSubName = name + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if(value !== undefined && value !== null)
                query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }

        return query.length ? query.substr(0, query.length - 1) : query;
    };

    // Override $http service's default transformRequest
    $httpProvider.defaults.transformRequest = [function(data) {
        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];
});


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