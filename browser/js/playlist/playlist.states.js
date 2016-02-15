'use strict';

juke.config(function ($stateProvider) {

  $stateProvider.state('addPlaylist', {
    url: '/addPlaylist',
    templateUrl: '/js/playlist/playlist.html',
    controller: 'PlaylistCtrl'
  });

  // $stateProvider.state('album', {
  //   url: '/albums/:albumId',
  //   templateUrl: '/js/album/templates/album.html',
  //   controller: 'AlbumCtrl',
  //   resolve: {
  //     theAlbum: function (AlbumFactory, $stateParams) {
  //       return AlbumFactory.fetchById($stateParams.albumId);
  //     }
  //   }
  // });

});
