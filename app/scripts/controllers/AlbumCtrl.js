(function() {
<<<<<<< HEAD
  function AlbumCtrl(Fixtures) {
=======
  function AlbumCtrl(Fixtures, SongPlayer) {
>>>>>>> ng-checkpoint-7
      this.albumData = Fixtures.getAlbum();
      this.songPlayer = SongPlayer;
    }


  angular
    .module('blocJams')
    .controller( 'AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl] );
})();
