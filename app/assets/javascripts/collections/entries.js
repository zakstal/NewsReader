NewsReader.Collections.Entries = Backbone.Collection.extend({
  model: NewsReader.Models.Entry,
  //set this.feed on creation
  initialize: function(models, options) {
    this.feed = options.feed;
  },

  url: function() {
    return this.feed.url() + '/entries';
  }
});