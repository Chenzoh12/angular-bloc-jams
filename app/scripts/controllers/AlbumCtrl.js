(function() {
<<<<<<< HEAD
  function AlbumCtrl() {
    this.albumData = albumPicasso;
    }
    
=======
  function AlbumCtrl(Fixtures) {
      this.albumData = Fixtures.getAlbum();
    }

>>>>>>> ng-checkpoint-6

  angular
    .module('blocJams')
    .controller( 'AlbumCtrl', ['Fixtures', AlbumCtrl] );
})();
