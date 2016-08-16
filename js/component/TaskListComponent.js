(function (context, Component, TaskComponent) {

  var template = '<ul></ul>';

  var TaskListComponent = function (container, taskList) {
    console.log(template);
    // Call parent constructor
    Component.apply(this, [container, template, taskList]);
  };

  // Method inheritance
  TaskListComponent.prototype = new Component();

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
