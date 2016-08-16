(function (context, Component, $) {

  var template = [
    '<input type="checkbox"',
      '<% if (model.get("completed")) { %>',
        'checked="checked"',
      '<% } %>',
    '/>',
    '<%- model.get("title") %>'
  ].join('\n');

  var TaskComponent = function (container, task) {
    // Call parent constructor
    Component.apply(this, [container, template, task]);

    this.checkbox = $(container).find('input');

    this.checkbox.on('click', function () {
      task.set('completed', ! task.get('completed'));
    });

  };

  // Method inheritance
  TaskComponent.prototype = new Component();

  context.TaskComponent = TaskComponent;

})(window, Component, jQuery);
