(function () {
  'use strict';

  angular.module('pokedex')
    .directive('navBar', NavBar);

  function NavBar () {
    var directive = {
      link: link,
      restrict: 'E',
      templateUrl: 'core/directives/nav-bar.html'
    };

    function link (scope, element, attrs) {
      element.bind('click', function () {
        var btn = $('nav > button#menu-icon > i.fa');

        btn.toggleClass('fa-bars fa-times');
      });
    }

    return directive;
  }
})();
