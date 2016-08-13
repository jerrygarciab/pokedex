(function () {
  'use strict';

  angular.module('pokedex')
    .directive('typeTag', TypeTag);

  function TypeTag () {
    var directive = {
      scope: {
        type: '@typeName'
      },
      controller: NavBarController,
      restrict: 'EA',
      templateUrl: 'core/directives/type-tag.html'
    };

    function NavBarController ($scope) {
      console.log($scope.type);
    }

    return directive;
  }
})();
