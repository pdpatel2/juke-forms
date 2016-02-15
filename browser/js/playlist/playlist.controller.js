'use strict';

juke.controller('PlaylistCtrl', function ($scope, $log, PlaylistFactory) {

  PlaylistFactory.fetchAll()
  .then(function(response) {
    // console.log(response);
    $scope.allPlaylists = response;
  });

  $scope.showPlaylist = function() {
    console.log("THIS IS THE TITLE:", $scope.NewPlaylist)
  }

  $scope.createPlaylist = function(playlistString) {
    return PlaylistFactory.create(playlistString)
  }

    $scope.reset = function() {
    	// console.log("resetting")
	    $scope.NewPlaylist = "";
	    $scope.newPlaylistForm.$setPristine();
  }

});