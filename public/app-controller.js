var app = angular.module('app', ['ngMaterial']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('orange');
});

app.controller('appController', function ($scope) {
    $scope.hello = 'Hello Angular';
});

