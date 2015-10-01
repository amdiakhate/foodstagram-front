/**
 * Created by Makhtar on 29/09/2015.
 */

angular.module('foodstagramApp').controller('feedCtrl', ['$scope', 'Photo', '$http', function ($scope, Photo, $http) {
    $scope.loading = true;
    $scope.searchText = '';
    $scope.page = 1;
    //No photos at the beginning
    $scope.photos = [];

    //This function loads the photos
    $scope.loadMore = function () {
        Photo.query({page: $scope.page}, function (data) {
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    $scope.photos.push(data[i]);
                }
                $scope.loading = false;
                $scope.page++;
            } else {
                $('.load-more').text('No more data');
            }

        })
    };
    $scope.loadMore();

    //Search by clicking on tags
    $scope.updateSearch = function (tag) {
        $scope.searchText = tag;
    }

}]);