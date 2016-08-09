(function () {
  'use strict';

  angular.module('pokedex')
    .config(routeConfig);

  function routeConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('intro');

    $stateProvider
      .state('splash', {
        url: '/splash',
        templateUrl: 'intro/splash.html',
        controller: 'splashCtrl',
        controllerAs: 'splash'
      })
      .state('intro', {
        url: '/intro',
        templateUrl: 'intro/intro.html',
        controller: 'introCtrl',
        controllerAs: 'intro'
      })
      .state('main-list', {
        url: '/main-list',
        templateUrl: 'main-list/main-list.html',
        controller: 'mainListCtrl',
        controllerAs: 'mainList'
      })
      .state('pkmn-details', {
        url: '/pkmn-details',
        templateUrl: 'pkmn-details/pkmn-details.html',
        controller: 'pkmnDetailsCtrl',
        controllerAs: 'pkmnDetails'
      });

  }
})();
