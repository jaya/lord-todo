(function (context) {

  var Collection = function (models) {
    if (models) {
      this.models = models;
    } else {
      this.models = [];
    }
  };

  Collection.prototype.push = function (model) {
    this.models.push(model);
  };

  Collection.prototype.remove = function (model) {
    this.models.splice(this.models.indexOf(model), 1);
  };

  Collection.prototype.reset = function () {
    this.models = [];
  };

  Collection.prototype.count = function () {
    return this.models.length;
  };

  Collection.prototype.item = function (i) {
    return this.models[i];
  };

  Collection.prototype.items = function () {
    return this.models;
  };

  Collection.prototype.indexOf = function (model) {
    return this.models.indexOf(model);
  };

  context.Collection = Collection;

})(window);
