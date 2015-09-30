/**
 * Created by Makhtar on 29/09/2015.
 */

angular.module('foodstagramApp').controller('feedCtrl', ['$scope', 'Photo', '$http', function ($scope, Photo, $http) {
    $scope.loading = true;
    Photo.query(function (data) {
        $scope.photos = data;
        $scope.loading = false;
    })


}]);