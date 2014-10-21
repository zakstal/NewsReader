NewsReader.Views.FeedsIndex = Backbone.View.extend({
  template: JST["index"],

  render: function() {
    var renderedContent = this.template({
      collection: this.collection // pass in routes
    });

    this.$el.html(renderedContent);
    return this;
  },

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
  }
})