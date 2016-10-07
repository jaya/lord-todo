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
    '</div>',
    '<button type="button" data-remove class="remove"><span>&times;</span></button>'
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

    $(this.container).find('[data-remove]').on('click', function () {
      task.trigger('remove');
    });
  };

  context.TaskComponent = TaskComponent;

})(window, Component, jQuery);
