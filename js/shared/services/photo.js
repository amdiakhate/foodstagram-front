/**
 * Created by Makhtar on 29/09/2015.
 */


angular.module('foodstagramApp')
    .factory("Photo", function ($resource) {
        return $resource('http://localhost//foodstagram/web/app_dev.php/api/photos/:id');
    });