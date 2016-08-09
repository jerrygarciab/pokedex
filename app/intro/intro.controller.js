(function () {
  'use strict';

  angular.module('pokedex')
    .controller('introCtrl', IntroCtrl);

    function IntroCtrl ($state) {
      var vm = this;

      vm.goToPokedex = goToPokedex;

      vm.availability = {
        pokedex: true,
        ev: false,
        login: false
      };

      function goToPokedex () {
        $state.go('main-list');
      }
    }
})();
