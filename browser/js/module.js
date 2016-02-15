'use strict';

var juke = angular.module('juke', ['ui.router']);
// code here can run while app is bootstrapping

// juke.run(function($rootScope, PlaylistFactory) {
// 	PlaylistFactory.fetchAll() 
// 	.then(function(response) {
// 		console.log("juke run ")
// 		$rootScope.allPlaylists = response.data;
// 	})
// })