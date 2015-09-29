/**
 * Created by Makhtar on 29/09/2015.
 */

angular.module('foodstagramApp').controller('feedCtrl',['$scope','Photo', function ($scope,Photo) {

    Photo.query(function (data) {
        $scope.photos = data;
    })
}]);