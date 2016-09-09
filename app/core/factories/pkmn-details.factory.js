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
      function getPokemonList (offsetNumber) {
        return $http.get(API + 'pokemon/?offset=' + offsetNumber)
          .then(getPokemonListSuccess, getPokemonListFailure);
      }

      function getPokemonDetailsByName (pkmnName) {
        return $http.get(API + 'pokemon/' + pkmnName + '/')
          .then(getPokemonDetailsByNameSuccess, getPokemonDetailsByNameFailure);
      }


      //***** Auxiliary Functions *****//
      function getPokemonListSuccess (data) {
        return data;
      }

      function getPokemonListFailure (err) {
        return err;
      }

      function getPokemonDetailsByNameSuccess (list) {
        return list;
      }

      function getPokemonDetailsByNameFailure (err) {
        return err;
      }

    }
})();
