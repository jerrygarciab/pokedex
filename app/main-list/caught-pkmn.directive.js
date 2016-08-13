(function () {
  'use strict';

  angular.module('pokedex')
    .directive('caughtPkmn', CaughtPkmn);

  function CaughtPkmn () {
    var directive = {
      bindToController: true,
      controller: CaughtPkmnController,
      link: link,
      restrict: 'E',
      templateUrl: 'main-list/caught-pkmn.html'
    };

    function link (scope, element, attrs) {
      element.bind('click', function () {
        var img = element.find('img');

        img.toggleClass('caught-pkmn-image caught-pkmn-image-selected');
      });
    }

    function CaughtPkmnController ($scope) {

    }

    return directive;
  }
})();
