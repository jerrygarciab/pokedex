(function () {
  'use strict';

  angular.module('pokedex')
    .directive('favoritePkmn', FavoritePkmn);

  function FavoritePkmn () {
    var directive = {
      bindToController: true,
      controller: FavoritePkmnController,
      link: link,
      restrict: 'E',
      templateUrl: 'main-list/favorite-pkmn.html'
    };

    function link (scope, element, attrs) {
      element.bind('click', function () {
        var img = element.find('img');

        img.toggleClass('favorite-pkmn-image favorite-pkmn-image-selected');
      });
    }

    function FavoritePkmnController ($scope) {

    }

    return directive;
  }
})();
