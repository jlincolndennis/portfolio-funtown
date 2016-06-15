(function() {
  'use strict';

  angular.module('app')
    .directive('feed', feedDirective)

    function feedDirective() {
      return {
        restrict: 'E',
        scope: {},
        templateUrl: '/app/partials/feed.html',
        controller: feedController,
        controllerAs: 'vm'

      }
    }

    feedController.$inject = ['feedService', '$log']

    function feedController(feedService, $log) {

      $log.log('in controller')
      var vm = this;

      feedService.getFeed()
        .then(function (feed) {
          if (!feed.err) {
            return vm.feed = feed
          } else {
            return vm.error = feed.err
          }

        })

    }

}());
