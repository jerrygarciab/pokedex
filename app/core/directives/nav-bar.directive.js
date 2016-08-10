(function () {
  'use strict';

  angular.module('pokedex')
    .directive('navBar', NavBar);

  function NavBar () {
    var directive = {
      bindToController: true,
      controller: NavBarController,
      controllerAs: 'navbar',
      link: link,
      restrict: 'E',
      templateUrl: 'core/directives/nav-bar.html'
    };

    function link (scope, element, attrs) {

    }

    function NavBarController () {

    }

    return directive;
  }
})();
