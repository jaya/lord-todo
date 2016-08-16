(function (context, Collection) {

  var TaskList = function (tasks) {
    // Call parent constructor
    Collection.apply(this, [tasks]);
  };

  // Method inheritance
  TaskList.prototype = new Collection();

  context.TaskList = TaskList;

})(window, Collection);
