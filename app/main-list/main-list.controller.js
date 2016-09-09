(function () {
  'use strict';

  angular.module('pokedex')
    .controller('mainListCtrl', MainListCtrl);

    function MainListCtrl ($state, blockUI, MainListFactory) {
      var vm = this;

      //blockUI.start();

      // mainListFactory.getPokemonList()
      //   .then(getPokemonListSuccess, getPokemonListFailure);
      //
      // function getPokemonListSuccess (data) {
      //   console.log(data);
      //   vm.receivedPokeData = data;
      //
      //   blockUI.stop();
      // }
      //
      // function getPokemonListFailure (err) {
      //
      // }
      MainListFactory.getPkmnDetails(0)
        .then(getPkmnDetailsSuccess, getPkmnDetailsFailure);

    }

    // ***** Auxiliary Functions ***** //
    function getPkmnDetailsSuccess (pkmnObject) {
      console.log(pkmnObject);
    }

    function getPkmnDetailsFailure (err) {
      console.log(err);
    }

})();
