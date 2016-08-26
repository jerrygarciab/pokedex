(function () {
  'use strict';

  angular.module('pokedex')
    .factory('PkmnDetailsFactory', PkmnDetailsFactory);

    function PkmnDetailsFactory ($http) {
      var API = 'http://pokeapi.co/api/v2/';

      var factory = {
        getPokemonList: getPokemonList,
        getPokemonDetailsByName: getPokemonDetailsByName
      };

      return factory;

      //***** Main Functions *****//
      function getPokemonList () {
        return $http.get(API + 'pokemon/')
          .then(getPokemonListSuccess, getPokemonListFailure);
      }

      function getPokemonDetailsByName (pkmnName) {
        return $http.get(API + 'pokemon/' + pkmnName + '/')
          .then(getPokemonListDetailsSuccess, getPokemonListDetailsFailure);
      }


      //***** Auxiliary Functions *****//
      function getPokemonListSuccess (data) {
        return data;
      }

      function getPokemonListFailure (err) {
        return err;
      }

      function getPokemonListDetailsSuccess (list) {
        console.log(list);
      }

      function getPokemonListDetailsFailure (err) {
        return err;
      }

    }
})();
