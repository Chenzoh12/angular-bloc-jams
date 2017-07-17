<<<<<<< HEAD
(function() {
  function CollectionCtrl(Fixtures) {
    this.albums = Fixtures.getCollection(12);
  }
=======
+(function() {
   function CollectionCtrl() {
     this.albums = [];
     for (var i=0; i < 12; i++) {
       this.albums.push(angular.copy(albumPicasso));
     }
   }
>>>>>>> ng-assignment-5


  angular
<<<<<<< HEAD
    .module('blocJams')
    .controller('CollectionCtrl', ['Fixtures', CollectionCtrl] );
=======
     .module('blocJams')
     .controller('CollectionCtrl', CollectionCtrl);
>>>>>>> ng-assignment-5
})();
