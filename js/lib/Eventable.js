(function (context) {

  var Eventable = {
    on: function (event, callback) {
      if (!this.eventHandlers) {
        this.eventHandlers = {};
      }
      if (!this.eventHandlers[event]) {
        this.eventHandlers[event] = [];
      }
      this.eventHandlers[event].push(callback);
    },

    trigger: function (event) {
      var target = this;
      if (this.eventHandlers && this.eventHandlers[event]) {
        this.eventHandlers[event].forEach(function (callback) {
          callback.apply(target);
        });
      }
    }
  };

  context.Eventable = Eventable;

})(window);
