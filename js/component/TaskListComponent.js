(function (context, Component, TaskComponent) {

  var template = '<input type="text" class="new_task" placeholder="New task..." /><ul></ul>';

  var TaskListComponent = function (container, taskList) {
    // Call parent constructor
    Component.apply(this, [container, template, taskList]);
  };

  // Method inheritance
  TaskListComponent.prototype = new Component();

  TaskListComponent.prototype.bindEvents = function () {
    var taskList = this.model;
    $(this.container).find('.new_task').on('keydown', function (event) {
      var textField = $(this);
      if (event.which === 13 && $.trim(textField.val())) {
        taskList.unshift(new Task(textField.val(), false));
      }
    });
  };

  TaskListComponent.prototype.render = function () {
    Component.prototype.render.apply(this);

    var i = 0;
    for (i = 0; i < this.model.count(); i++) {
      var li = $("<li></li>");
      this.container.find('ul').append(li);
      new TaskComponent(li, this.model.item(i));
    };
  }

  context.TaskListComponent = TaskListComponent;

})(window, Component, TaskComponent);
