NewsReader.Views.FeedShow = Backbone.View.extend({
  template: JST["show"],

  events: {
    "click .refresh": "refresh"
  },

  initialize: function () {
    this.listenTo(this.model.entries(), "sync", this.render);
  },

  render: function() {
    var renderedContent = this.template({
      entries: this.model.entries()
    });
    this.$el.html(renderedContent);
    console.log("rendering..")
    return this;
  },


  refresh: function(event) {
    event.preventDefault();
    this.model.entries().fetch();
    console.log(this.model.entries().last());
    console.log("you hit refresh");
  }

});