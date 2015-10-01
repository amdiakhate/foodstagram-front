/**
 * Created by Makhtar on 29/09/2015.
 */

angular.module('foodstagramApp').controller('feedCtrl', ['$scope', 'Photos', '$http', function ($scope, Photos, $http) {
    $scope.loading = true;
    $scope.searchText = '';
    $scope.page = 1;
    //No photos at the beginning
    $scope.photos = [];
    $scope.photo = null;

    //This function loads the photos
    $scope.loadMore = function () {
        Photos.query({page: $scope.page}, function (data) {
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    $scope.photos.push(data[i]);
                }
                $scope.loading = false;
                $scope.page++;

                $scope.photo = $scope.photos.shift();
            } else {
                $('.load-more').text('No more data');
            }

        })
    };
    $scope.loadMore();

    /**
     * This function loads the next photo
     */
    $scope.nextPhoto = function() {
        if ($scope.photos.length > 0) {
            $scope.photo = $scope.photos.shift();
        } else {
            $scope.loadMore();
        }
    }

    //Search by clicking on tags
    $scope.updateSearch = function (tag) {
        $scope.searchText = tag;
    }

}]);