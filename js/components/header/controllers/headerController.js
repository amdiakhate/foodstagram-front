/**
 * Created by Makhtar on 29/09/2015.
 */

angular.module('foodstagramApp').controller('headerCtrl',['$scope', function ($scope) {
    $scope.foodstagram = 'Test';

    $scope.foodstagramHeader = 'Une appli qui regroupe toutes les photos appétissantes d\'instagram';
}]);