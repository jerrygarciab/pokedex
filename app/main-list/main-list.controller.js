(function () {
  'use strict';

  angular.module('pokedex')
    .controller('mainListCtrl', MainListCtrl);

    function MainListCtrl ($state, mainListFactory) {
      var vm = this;

      mainListFactory.getPokemonList()
        .then(getPokemonListSuccess, getPokemonListFailure);

      function getPokemonListSuccess (data) {
        console.log(data);
        vm.receivedPokeData = data;
      }

      function getPokemonListFailure (err) {

      }
      vm.pokeTypes = [
        {
          "slot": 2,
          "type": {
            "url": "https://pokeapi.co/api/v2/type/3/",
            "name": "flying"
          }
        },
        {
          "slot": 1,
          "type": {
            "url": "https://pokeapi.co/api/v2/type/10/",
            "name": "fire"
          }
        }
      ];

    }
})();
