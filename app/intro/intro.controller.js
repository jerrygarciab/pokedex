(function () {
  'use strict';

  angular.module('pokedex')
    .controller('introCtrl', IntroCtrl);

    function IntroCtrl () {
      var vm = this;

      vm.availability = {
        pokedex: true,
        ev: false,
        login: false
      };
    }
})();
