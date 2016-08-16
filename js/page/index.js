var task1 = new Task("mein");
var task2 = new Task("top", true);
var task3 = new Task("animal");

var taskList = new TaskList([task1, task2, task3]);

$(function () {
  var taskListComponent = new TaskListComponent('#task-list', taskList);
})
