angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('eMED', {
    url: '/emed',
    templateUrl: 'templates/eMED.html',
    controller: 'eMEDCtrl'
  })

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('consultasEExames', {
    url: '/page4',
    templateUrl: 'templates/consultasEExames.html',
    controller: 'consultasEExamesCtrl'
  })

  .state('inscrevaSe', {
    url: '/inscrevase',
    templateUrl: 'templates/inscrevaSe.html',
    controller: 'inscrevaSeCtrl'
  })

  .state('detalhes', {
    url: '/page7',
    templateUrl: 'templates/detalhes.html',
    controller: 'detalhesCtrl'
  })

  .state('histRico', {
    url: '/historicos',
    templateUrl: 'templates/histRico.html',
    controller: 'histRicoCtrl'
  })

  .state('sobre', {
    url: '/page9',
    templateUrl: 'templates/sobre.html',
    controller: 'sobreCtrl'
  })

$urlRouterProvider.otherwise('/emed')


});