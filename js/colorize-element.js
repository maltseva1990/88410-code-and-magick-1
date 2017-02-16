'use strict';

window.colorizeElement = (function () {
  return function (element, colors, property) {
    var currentColor = null;

    element.addEventListener('click', function () {
      colorChange();
    });

    element.addEventListener('keydown', function (evt) {
      if (window.utils.isActivateEvent(evt)) {
        colorChange();
      }
    });

    var colorChange = function () {
      currentColor = window.utils.getRandomElementExcept(colors, currentColor);
      element.style[property] = currentColor;
    };
  };
})();
