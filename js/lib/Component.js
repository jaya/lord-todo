(function (context, _, $) {

  var Component = function (container, template, model) {
    if (!template || !container) {
      return;
    }
    this.container = $(container);
    this.template = _.template(template);
    this.model = model;
    this.model.on('change', _.bind(this.render, this));
    this.render();
  };

  Component.prototype.render = function () {
    this.container.html(this.template({ model: this.model }));
  };

  context.Component = Component;

})(window, _, $);
