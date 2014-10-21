NewsReader.Views.Entry = Backbone.View.extend({
  template: JST["entry"],

  tagName: 'li',

  render: function () {
    var content = this.template({
      model: this.model
    });

    this.$el.html(content);
    return this;
  }
});