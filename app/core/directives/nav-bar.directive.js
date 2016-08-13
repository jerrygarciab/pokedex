(function () {
  'use strict';

  angular.module('pokedex')
    .directive('navBar', NavBar);

  function NavBar () {
    var directive = {
      bindToController: true,
      controllerAs: 'navbar',
      restrict: 'E',
      templateUrl: 'core/directives/nav-bar.html'
    };

    return directive;
  }
})();
