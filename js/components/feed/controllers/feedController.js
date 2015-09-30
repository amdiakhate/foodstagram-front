/**
 * Created by Makhtar on 29/09/2015.
 */

angular.module('foodstagramApp').controller('feedCtrl', ['$scope', 'Photo', '$http', function ($scope, Photo, $http) {
    $scope.loading = true;
    $scope.searchText = '';
    Photo.query(function (data) {
        $scope.photos = data;
        $scope.loading = false;
    })

    //Search by clicking on tags
    $scope.updateSearch = function (tag) {
        $scope.searchText = tag;
    }

}]);