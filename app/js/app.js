var angular = require('angular');
var ngRoute = require('angular-route');

var app = angular.module('app', ['ngRoute']);

var HomeCtrl = require('./HomeCtrl');
var ContactCtrl = require('./ContactCtrl');

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: '../views/home.html',
    controller: 'HomeCtrl'
  }).when('/contact', {
    templateUrl: '../views/contact.html',
    controller: 'ContactCtrl'
  }).otherwise({redirectTo: '/'});
  $locationProvider.html5Mode(true);
});

app.controller(HomeCtrl);
app.controller(ContactCtrl);