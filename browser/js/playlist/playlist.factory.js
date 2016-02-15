'use strict';

// juke.factory('PlaylistFactory', function ($http) {

//   var PlaylistFactory = {};

//   PlaylistFactory.fetchAll = function() {
//   	return $http.get('/api/playlists')
//   	.then(function(response) {
//   		return response.data
//   	})
//   }

//   PlaylistFactory.create = function (nameString) {
//     return $http.post('/api/playlists', {name: nameString})
//     .then (function(newPlaylist)  {
//       return  newPlaylist.data
//     })
//   }

//   return PlaylistFactory

// })

juke.factory('PlaylistFactory', function ($http) {

    var cachedPlaylists = [];

    var PlaylistFactory = {};

    PlaylistFactory.fetchAll = function () {
        return $http.get('/api/playlists')
        .then(function (response) {
            angular.copy(response.data, cachedPlaylists);
            return cachedPlaylists;
        });
    };

    PlaylistFactory.create = function (data) {
        return $http.post('/api/playlists', {name: data})
        .then(function (response) {
            var playlist = response.data
            cachedPlaylists.push(playlist);
            return playlist;
        });
    };

    PlaylistFactory.fetchById = function(id) {
      return $http.get('/api/playlists/' + id)
      .then(function(response) {
        return response.data
      })
    }

    return PlaylistFactory;

});
