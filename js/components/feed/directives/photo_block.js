/**
 * Created by Makhtar on 29/09/2015.
 */


angular.module('foodstagramApp')
    .directive('photoBlock', function ($http) {
        return {
            restrict: 'E',
            templateUrl: 'js/components/feed/views/photo_block.html',
            link: function (scope, element, attrs) {
                //Upvoting
                element.find('.icon-arrow-up').bind('click', function () {
                    var url = "http://foodstagram.lifeswift.fr/api"
                    $http.post(url + '/photo/upvote', {
                        'id_photo': scope.photo.id_photo
                    }).then(
                        function (response) {
                            scope.photo = response.data;
                        }
                    )

                })
                //Downvoting
                element.find('.icon-arrow-down').bind('click', function () {
                    var url = "http://foodstagram.lifeswift.fr/api"
                    $http.post(url + '/photo/downvote', {
                        'id_photo': scope.photo.id_photo
                    }).then(
                        function (response) {
                            //If we got a response we check
                            if (response.data !== "") {
                                scope.photo = response.data;
                            } else {
                                //We delete the element (that means it had more than 10 dislikes)
                                scope.$destroy();
                                element.hide();
                            }
                        }
                    )

                })
            }
        }
    });
