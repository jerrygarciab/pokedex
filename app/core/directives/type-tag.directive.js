(function () {
  'use strict';

  angular.module('pokedex')
    .directive('typeTag', TypeTag);

  function TypeTag () {
    var directive = {
      scope: {
        type: '@typeName'
      },
      restrict: 'EA',
      templateUrl: 'core/directives/type-tag.html'
    };

    return directive;
  }
})();
