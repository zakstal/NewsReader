NewsReader.Routers.FeedsRouter = Backbone.Router.extend({

  routes: {
    "": "feedsIndex",
    "feeds/:id": "feedShow"
  },

  initialize: function(options) {
    this.$el = options.$el;
    NewsReader.feeds.fetch();
  },

  feedsIndex: function() {

    var newIndex = new NewsReader.Views.FeedsIndex({
      collection: NewsReader.feeds
    })

    this.swapView(newIndex);
  },

  feedShow: function (id){
    var feed = NewsReader.feeds.getOrFetch(id);
    feed.entries().fetch();
    var newShow = new NewsReader.Views.FeedShow({
      model: feed
    })

    this.swapView(newShow);
  },

  swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$el.html(view.render().$el);
  }


});