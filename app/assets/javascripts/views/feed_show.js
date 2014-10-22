NewsReader.Views.FeedShow = Backbone.View.extend({
  template: JST["show"],
  tagName: 'ul',

  events: {
    "click .refresh": "refresh"
  },

  initialize: function () {
    this.listenTo(this.model.entries(), "sync", this.render);
  },

  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    var that = this;
    this.model.entries().each(function (entry) {

      var view = new NewsReader.Views.Entry({ model: entry });
      that.$el.append(view.render().$el);
    });
    return this;
  },


  refresh: function(event) {
    event.preventDefault();
    this.model.entries().fetch();
  }

});