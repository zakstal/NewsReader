NewsReader.Views.FeedsIndex = Backbone.View.extend({
  template: JST["index"],

  events: {
    "click .delete": "removeFeed",
    "click .add-feed": "addFeed"
  },

  initialize: function() {
    this.listenTo(this.collection, "sync remove add", this.render);
  },

  render: function() {
    var renderedContent = this.template({
      collection: this.collection // pass in routes
    });

    this.$el.html(renderedContent);
    return this;
  },

  removeFeed: function(event) {
    event.preventDefault();
    var feedId = $(event.currentTarget).data("id");
    var feed = this.collection.get(feedId)
    feed.destroy();

  },

  addFeed: function(event) {
    event.preventDefault()
    var params = $(event.currentTarget).parent().serializeJSON()
        // debugger;
    this.collection.create(params)
  }
})