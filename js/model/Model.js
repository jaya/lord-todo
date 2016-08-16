(function (context) {

  var Model = function (properties) {
    if (properties) {
      this.properties = properties;
    } else {
      this.properties = {};
    }
  };

  /**
   * Sets the property
   *
   * @param {string} property The property name
   * @param {Object} value The value of the property
   */
  Model.prototype.set = function (property, value) {
    this.properties[property] = value;
  };

  /**
   * Gets the property
   *
   * @param {string} property The property name
   * @return {Object} The value of the property
   */
  Model.prototype.get = function (property) {
    return this.properties[property];
  };

  // Exports the Model
  context.Model = Model;

})(window);
