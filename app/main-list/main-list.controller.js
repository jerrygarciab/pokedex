(function () {
  'use strict';

  angular.module('pokedex')
    .controller('mainListCtrl', MainListCtrl);

    function MainListCtrl ($state) {
      var vm = this;

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
