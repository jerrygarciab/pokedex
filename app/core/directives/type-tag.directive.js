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
      controllerAs: 'type',
      restrict: 'EA',
      templateUrl: 'core/directives/type-tag.html'
    };

    function NavBarController ($scope) {
      $scope.types = [
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
    	]
      console.log($scope.type);
    }

    return directive;
  }
})();
