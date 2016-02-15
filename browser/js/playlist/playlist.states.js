'use strict';

juke.config(function ($stateProvider) {

  $stateProvider.state('addPlaylist', {
    url: '/addPlaylist',
    templateUrl: '/js/playlist/playlist.html',
    controller: 'PlaylistCtrl'
  });

  $stateProvider.state('onePlaylist', {
    url: '/onePlaylist/:playlistId',
    templateUrl: '/js/playlist/onePlaylist.html',
    controller: 'OnePlaylistCtrl',
    resolve: {
      thePlaylist: function(PlaylistFactory, $stateParams) {
        return PlaylistFactory.fetchById($stateParams.playlistId)
      }
    }
  });

  // $stateProvider.state('getPlaylists', {
  //   url: '/',
  //   // templateUrl: '',
  //   template: '<a>{{playlist.name}}</a>',
  //   controller: '',
  //   resolve: {

  //     // theAlbum: function (AlbumFactory, $stateParams) {
  //     //   return AlbumFactory.fetchById($stateParams.albumId);
  //     }
  //   }
  // });

});
