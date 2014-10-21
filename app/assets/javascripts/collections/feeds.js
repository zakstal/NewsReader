NewsReader.Collections.Feeds = Backbone.Collection.extend({
  url: "api/feeds",
  model: NewsReader.Models.Feed,

  getOrFetch: function(id) {
    var feeds = this;
    var feed;
    if (feed = feeds.get(id)) {
    } else {
      var feed = new NewsReader.Models.Feed({
        id: id
      }, {
        success: function() {
          feeds.add(feed);
        }
      });
      feed.fetch();
    }

    return feed;
  }
});