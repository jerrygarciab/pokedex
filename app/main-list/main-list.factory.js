(function () {
  'use strict';

  angular.module('pokedex')
    .factory('MainListFactory', MainListFactory);

    function MainListFactory (PkmnDetailsFactory) {

      var pkmnDetails = {};

      var factory = {
        getPkmnDetails: getPkmnDetails
      };

      return factory;

      //***** Main Functions *****//
      function getPkmnDetails (pageNumber) {
        return PkmnDetailsFactory.getPokemonList(pageNumber)
          .then(getPkmnDetailsSuccess, getPkmnDetailsFailure);
      }

      //***** Auxiliary Functions *****// return list.data.results;
      function getPkmnDetailsSuccess (list) {
        var pkmnObject = list.data.results;

        for (var i=0; i<pkmnObject.length; i++) {
          return PkmnDetailsFactory.getPokemonDetailsByName(pkmnObject[i].name)
            .then(getPokemonDetailsByNameSuccess, getPokemonDetailsByNameFailure);
        }
      }

      function getPkmnDetailsFailure (err) {
        return err;
      }

      function getPokemonDetailsByNameSuccess (data) {
        pkmnDetails.push({
          sprite: data.sprites.front_default,
          name: data.name,
          number: data.id,
          types: data.types
        });

        return pkmnDetails;
      }

      function getPokemonDetailsByNameFailure (err) {
        return err;
      }

    }
})();
