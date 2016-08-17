(function (context, Component, $) {

  var template = [
    '<div',
      '<% if (model.get("completed")) { %>',
        'class="completed"',
      '<% } %> >',
      '<input type="checkbox"',
        '<% if (model.get("completed")) { %>',
          'checked="checked"',
        '<% } %>',
      '/><%- model.get("title") %>',
    '</div>'
  ].join('\n');

  var TaskComponent = function (container, task) {
    // Call parent constructor
    Component.apply(this, [container, template, task]);
  };

  // Method inheritance
  TaskComponent.prototype = new Component();

  TaskComponent.prototype.bindEvents = function () {
    var task = this.model;
    $(this.container).find('input').on('click', function () {
      task.set('completed', ! task.get('completed'));
    });
  };

  context.TaskComponent = TaskComponent;

})(window, Component, jQuery);
