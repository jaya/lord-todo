(function (context, Collection) {

  var TaskList = function (tasks) {
    // Call parent constructor
    Collection.apply(this, [tasks]);
  };

  // Method inheritance
  TaskList.prototype = new Collection();

  TaskList.fromJSON = function (json) {
    var tasks = [];
    json.forEach(function (taskJSON) {
      tasks.push(Task.fromJSON(taskJSON));
    });
    return new TaskList(tasks);
  };

  context.TaskList = TaskList;

})(window, Collection);
