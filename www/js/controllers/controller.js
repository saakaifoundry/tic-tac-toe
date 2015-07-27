angular.module('tic-tac-toe.controllers', [])

  .controller('HomeCtrl', ['$scope', '$state', '$log', '$ionicSlideBoxDelegate', '$ionicPopup','GameService',
    function ($scope, $state, $log, $ionicSlideBoxDelegate, $ionicPopup, GameService) {

      $scope.started = false;
      $scope.gameOver = false;

      var home_page_slider = $ionicSlideBoxDelegate.$getByHandle('home_page_slider');

      $scope.startGame = function () {
        $scope.started = true;
        $ionicSlideBoxDelegate.slide(1);
      };

      $scope.running = true;
      var winCount = 0;

      winCount = GameService.getWinCount();
      $scope.gameArray = GameService.getGameArray();

      $scope.playGame = function () {
        home_page_slider.slide(1);
      };
      $scope.selectGameType = function (type) {
        if (type === 3) {
          $state.go('play-game-3by3');
          GameService.setWinCount(3);
          GameService.setGameArray(GameService.getGameArray3by3);
        } else if (type === 4) {
          $state.go('play-game-4by4');
          GameService.setWinCount(4);
          GameService.setGameArray(GameService.getGameArray4by4);
        } else if (type === 5) {
          $state.go('play-game-5by5');
          GameService.setWinCount(5);
          GameService.setGameArray(GameService.getGameArray5by5);
        }
      };

      $scope.reStartGame = function () {
        $state.go($state.current, {}, {reload: true});
      };

      $scope.goToGame = function () {
        $state.go('home', {}, {reload: true});
        $scope.started = false;
      };

      $scope.pauseResumeGame = function () {
        $scope.running = !$scope.running;
      };

      $scope.player_no = 'First';
      $scope.clickCount = 0;
      $scope.clickedArray = [];
      $scope.playerOneArray = [];
      $scope.playerTwoArray = [];
      $scope.wonGame = {player: '', status: false};

      var icons = ["<i class='icon ion-android-radio-button-off'></i>", "<i class='icon ion-android-close'></i>"];
      var css_classes = ['odd_click', 'even_click'];

      $scope.cellClicked = function (val) {
        if ($scope.wonGame.status === false) {
          console.log(winCount)

          $scope.clickCount += 1;

          if ($scope.clickCount % 2 === 1) {
            $scope.playerOneArray.push(val);
          } else {
            $scope.playerTwoArray.push(val);
          }

          if ($scope.playerOneArray.length >= winCount && $scope.clickCount % 2 === 1) {
            angular.forEach($scope.gameArray, function (val, key) {
              var temp = 0;
              angular.forEach($scope.playerOneArray, function (pVal, pKey) {
                if (val.indexOf(pVal) >= 0) {
                  temp += 1;
                }
              });
              if (temp === winCount) {
                $scope.wonGame.player = 'Player 1';
                $scope.wonGame.status = true;
                $scope.gameOver = true;

                $ionicPopup.alert({
                  title: 'Game Over',
                  template: $scope.wonGame.player + ' won the game'
                }).then(function () {
                  $state.go($state.current, {}, {reload: true});
                })
              }
            });
          }

          if ($scope.clickCount === (winCount * winCount) && $scope.wonGame.status === false) {
            $scope.gameOver = true;
            $ionicPopup.alert({
              title: 'Game Tie',
              template: 'Game tie up'
            }).then(function () {
              $state.go($state.current, {}, {reload: true});
            })
          }

          if ($scope.playerTwoArray.length >= winCount && $scope.clickCount % 2 === 0) {
            angular.forEach($scope.gameArray, function (val, key) {
              var temp = 0;

              angular.forEach($scope.playerTwoArray, function (pVal, pKey) {
                if (val.indexOf(pVal) >= 0) {
                  temp += 1;
                }
              });

              if (temp === winCount) {
                $scope.wonGame.player = 'Player 2';
                $scope.wonGame.status = true;
                $scope.gameOver = true;

                $ionicPopup.alert({
                  title: 'Game Over',
                  template: $scope.wonGame.player + ' won the game'
                }).then(function () {
                  $state.go($state.current, {}, {reload: true});
                })
              }
            });
          }

          if ($scope.clickCount % 2 == 0) {
            $scope.player_no = 'First';
          } else {
            $scope.player_no = 'Second';
          }

          document.getElementById(val).innerHTML = icons[$scope.clickCount % 2];
          document.getElementById(val).classList.add(css_classes[$scope.clickCount % 2]);
          //document.getElementById('id').classList.remove('class');
        }
      };


    }]);