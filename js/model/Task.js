(function (context, Model) {

  var Task = function (title, completed) {
    var properties = {
      "title": title,
      "completed": !!completed
    };

    // Call parent constructor
    Model.apply(this, [properties]);
  };

  // Method inheritance
  Task.prototype = new Model();

  context.Task = Task;

})(window, Model);
