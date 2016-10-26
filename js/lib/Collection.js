(function (context) {

  var Collection = function (models) {
    var collection = this;
    this.models = [];
    if (models) {
      models.forEach(function (model) {
        collection.push(model);
      });
    }
  };

  Collection.prototype.bindEvents = function (model) {
    var collection = this;

    model.on('change', function () {
      collection.trigger('itemChanged');
    });

    model.on('remove', function() {
      collection.remove(model);
      collection.trigger('itemChanged');
    });
  };

  Collection.prototype.push = function (model) {
    this.models.push(model);
    this.bindEvents(model);
    this.trigger('change');
  };

  Collection.prototype.unshift = function (model) {
    this.models.unshift(model);
    this.bindEvents(model);
    this.trigger('change');
  };

  Collection.prototype.remove = function (model) {
    this.models.splice(this.models.indexOf(model), 1);
    this.trigger('change');
    model.off('change');
  };

  Collection.prototype.reset = function () {
    this.models = [];
    this.trigger('change');
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

  Collection.prototype.toJSON = function () {
    var json = [];
    this.models.forEach(function (model) {
      json.push(model.toJSON());
    });
    return json;
  };

  _.extend(Collection.prototype, Eventable);

  context.Collection = Collection;

})(window);
