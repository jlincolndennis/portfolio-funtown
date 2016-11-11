(function() {
  'use strict';

  var dependencies = [
    'ui.router',
  ]

  angular.module('app', dependencies)

    .config(setupStates)

    function setupStates($stateProvider, $urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          templateUrl: "/app/partials/home.html",
          url: '/'
        })
        .state('about', {
          templateUrl: "/app/partials/about.html",
          url: '/about'
        })
        .state('resume', {
          templateUrl: "/app/partials/resume.html",
          url: '/resume'
        })
        .state('projects', {
          templateUrl: "/app/partials/projects.html",
          url: '/projects'
        })
        .state('writing', {
          templateUrl: "/app/partials/writing.html",
          url: '/writing'
        })
        .state('contact', {
          templateUrl: "/app/partials/contact.html",
          url: '/contact'
        })
    }

}());
