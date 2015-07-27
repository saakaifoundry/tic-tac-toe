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
      function detectDevice() {
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
          return true;
        } else {
          return false;
        }
      }

      var device = detectDevice();

      if (device) {
        //console.log(device.cordova);
        //alert(device.cordova);
        //alert(navigator);

        navigator.globalization.getPreferredLanguage(
          function (language) {
            console.log('language: ' + language.value + '\n');
          },
          function () {
            console.log('Error getting language\n');
          }
        );
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