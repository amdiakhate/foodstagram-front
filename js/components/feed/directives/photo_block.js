/**
 * Created by Makhtar on 29/09/2015.
 */


angular.module('foodstagramApp')
    .directive('photoBlock', function ($http) {
        return {
            restrict: 'E',
            templateUrl: 'js/components/feed/views/photo_block.html',
            link: function (scope, element, attrs) {
                element.find('.icon-arrow-up').bind('click', function () {
                    var url = "http://localhost/foodstagram/web/app_dev.php/api"
                    $http.post(url + '/photo/upvote', {
                        'id_photo': scope.photo.id_photo
                    }).then(
                        function (response) {
                            scope.photo = response.data;
                        }
                    )

                })
            }
        }
    });
