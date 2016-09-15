$(function () {
  var taskListJSON = Persistence.get('taskList');
  var taskList;
  if (! taskListJSON) {
    taskList = new TaskList();
  }
  else {
    taskList = TaskList.fromJSON(taskListJSON);
  }
  taskList.on('change', function () {
    Persistence.save('taskList', this);
  });
  taskList.on('itemChanged', function () {
    Persistence.save('taskList', this);
  });
  var taskListComponent = new TaskListComponent('#task-list', taskList);


})
