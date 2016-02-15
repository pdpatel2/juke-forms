'use strict';

juke.controller('PlaylistCtrl', function ($scope, $log, $state, PlaylistFactory) {

  PlaylistFactory.fetchAll()
  .then(function(response) {
    $scope.allPlaylists = response;
  });

  $scope.showPlaylist = function() {
    console.log("THIS IS THE TITLE:", $scope.NewPlaylist)
  }

  $scope.createPlaylist = function(playlistString) {
    PlaylistFactory.create(playlistString)
    .then(function(response) {
      $state.go('onePlaylist', {playlistId: response._id})
      return response
    })
  }

  $scope.reset = function() {
    // console.log("resetting")
    $scope.NewPlaylist = "";
    $scope.newPlaylistForm.$setPristine();
  }

})
.controller('OnePlaylistCtrl', function($scope, PlaylistFactory, thePlaylist, SongFactory) {

  $scope.playlist = thePlaylist;

  SongFactory.fetchAll()
  .then(function(response) {
    $scope.songList = response
  });

})