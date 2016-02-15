'use strict';

juke.factory('PlaylistFactory', function ($http) {

  var PlaylistFactory = {};

  PlaylistFactory.create = function (nameString) {
    return $http.post('/api/playlists', {name: nameString})
    .then (function(newPlaylist)  {
      return  newPlaylist.data
    })
  }

  return PlaylistFactory

})
