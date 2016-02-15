'use strict';

juke.factory('PlaylistFactory', function ($http) {

  var PlaylistFactory = {};

  PlaylistFactory.fetchAll = function() {
  	return $http.get('/api/playlists')
  	.then(function(response) {
  		console.log("fetching playlists",response.data)
  		return response.data
  	})
  }

  PlaylistFactory.create = function (nameString) {
    return $http.post('/api/playlists', {name: nameString})
    .then (function(newPlaylist)  {
      return  newPlaylist.data
    })
  }

  return PlaylistFactory

})
