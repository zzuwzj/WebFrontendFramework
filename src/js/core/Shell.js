/*global define */
define(function (require, exports, module) {
  var $ = require('jquery');

  exports.getMainView = function () {
    return $("#view-main");
  };

  exports.GoToView = function (name) {
    this.getMainView().innerHTML = "<span>got to view:" + name + "</span>";
  };
});
