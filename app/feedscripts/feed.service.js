(function() {
  'use strict';

  angular.module('app')
    .factory('feedService', feedFactory);

    feedFactory.$inject = ['$http', '$log']

    function feedFactory($http, $log) {
      let _feed = {}
      let _error = {}

      return {
        getFeed: getFeed
      }

      function getFeed() {
        let url = "https://rss2json.com/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40jlincolndennis"

        return $http.get(url)
          .then(function (res) {
            if (res.data.status === 'ok') {
              let fullFeed = res.data.items;
              _feed = [fullFeed[0], fullFeed[1], fullFeed[2]]
              _feed.forEach(function (item) {
                item.date = Date.parse(item.pubDate)
              })
              return _feed
            } else {
              _error = {
                err: 'There was an error retrieving these posts, please try again later.'
              }
              return _error

            }

          })

      }
    }
}());
