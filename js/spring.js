$(document).ready(function () {
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.sidenav').sidenav(
        {
            edge: 'right'
        }
    );
    $('.slider').slider({
        indicators: false,
        height: 500
    });
    $('.modal').modal();
    $('.dropdown-trigger').dropdown({
        alignment: 'right',
        constrainWidth: false
    });
});

//ng admin
var app = angular.module('admin', []);
app.controller('manege', function ($scope, $http) {
    $http.get('Data.json').then(function (response) {
        $scope.names = response.data.records;
    });
});
//Register
