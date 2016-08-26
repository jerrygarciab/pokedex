(function () {
  'use strict';

  angular.module('pokedex')
    .factory('mainListFactory', MainListFactory);

    function MainListFactory (PkmnDetailsFactory) {

      var pkmnDetails = {};

      var factory = {
        getPokemonList: getPokemonList,
        getPkmnDetails: getPkmnDetails
      };

      return factory;

      //***** Main Functions *****//
      function getPkmnDetails (pageNumber) {
        return PkmnDetailsFactory.getPokemonList(pageNumber)
          .then(getPkmnDetailsSuccess, getPkmnDetailsFailure);
      }

      function getPokemonList () {
        return PkmnDetailsFactory.getPokemonList().then(getPokemonListSuccess);
      }

      //***** Bussiness logic Functions *****//
      function getPokemonDetailsFromList (pkmnObject) {
        for (var i=0; i<pkmnObject.length; i++) {
          for(var j=0; j<pkmnObject[i].length; j++) {
            factory.getPokemonDetailsByName(pkmnObject[i][j].name);
          }
        }
      }

      //***** Auxiliary Functions *****//
      function getPkmnDetailsSuccess (data) {
        return data;
      }

      function getPkmnDetailsFailure (err) {
        return err;
      }

      function getPokemonListSuccess (list) {
        return list.data.results;
      }

      function getPokemonListFailure (err) {
        return err;
      }

    }
})();
