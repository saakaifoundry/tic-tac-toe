// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('tic-tac-toe', [
  'ionic',
  'tic-tac-toe.controllers',
  'tic-tac-toe.services'
])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        cache: false,
        controller: 'HomeCtrl',
        templateUrl: 'templates/home.html'
      })
      .state('play-game-3by3', {
        url: '/play-game-3by3',
        cache: false,
        controller: 'HomeCtrl',
        templateUrl: 'templates/play-game-3by3.html'
      })
      .state('play-game-4by4', {
        url: '/play-game-4by4',
        cache: false,
        controller: 'HomeCtrl',
        templateUrl: 'templates/play-game-4by4.html'
      })
      .state('play-game-5by5', {
        url: '/play-game-5by5',
        cache: false,
        controller: 'HomeCtrl',
        templateUrl: 'templates/play-game-5by5.html'
      });

    $urlRouterProvider.otherwise('/home')

  });