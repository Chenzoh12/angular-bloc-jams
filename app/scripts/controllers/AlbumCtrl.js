(function() {
  function AlbumCtrl() {
    this.songs = [];
    this.albumData = albumPicasso;
    for(var i = 0; i < 5; i++){
      this.songs.push(this.albumData.songs);
    }

    
    }

  angular
    .module('blocJams')
    .controller( 'AlbumCtrl', AlbumCtrl );
})();
