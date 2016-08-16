var task1 = new Task("Task 1");
var task2 = new Task("Task 2", true);
var task3 = new Task("Task 3");

var taskList = new TaskList([task1, task2, task3]);

$(function () {
  var taskListComponent = new TaskListComponent('#task-list', taskList);
})
