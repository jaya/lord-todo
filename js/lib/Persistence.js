(function (context) {

  var Persistence = {};

  Persistence.save = function (key, item) {
      localStorage.setItem(key, JSON.stringify(item));
      Persistence.sync();
  };
  Persistence.get = function (key) {
    Persistence.sync();
    return JSON.parse(localStorage.getItem(key));
  };
  Persistence.doSync = function () {
    console.log("Syncing");
  };

  Persistence.sync = _.throttle(Persistence.doSync, 5000);

  window.onbeforeunload = Persistence.doSync;
  context.Persistence = Persistence;

})(window);
