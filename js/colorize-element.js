'use strict';

window.colorizeElement = (function () {

  var currentColor = null;
  return function (element, colors, callback) {
    currentColor = colors[0];
    element.addEventListener('click', function () {
      colorChange();
    });

    element.addEventListener('keydown', function (evt) {
      if (window.utils.isActivateEvent(evt)) {
        colorChange();
      }
    });
    var colorChange = function (event) {
      var newColor = window.utils.getRandomElementExcept(colors, currentColor);
      if (typeof callback === 'function') {
        callback(element, newColor);
      }
    };
  };

})();
