(function () {
  'use strict';

  angular.module('pokedex')
    .factory('mainListFactory', MainListFactory);

    function MainListFactory ($http) {
      var API = 'http://pokeapi.co/api/v2/';

      var factory = {
        getPokemonList: getPokemonList
      };

      return factory;

      function getPokemonList () {
        return $http.get(API + 'pokemon/')
          .then(getPokemonListSuccess, getPokemonListFailure);
      }

      function getPokemonListSuccess (list) {
        return list.data.results;
      }

      function getPokemonListFailure (err) {
        return err;
      }

    }
})();
