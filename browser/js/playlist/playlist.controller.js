'use strict';

juke.controller('PlaylistCtrl', function ($scope, $log, PlaylistFactory) {
  $scope.showPlaylist = function() {
    console.log("THIS IS THE TITLE:", $scope.NewPlaylist)
  }

  $scope.createPlaylist = function(playlistString) {
    return PlaylistFactory.create(playlistString)
  }

});