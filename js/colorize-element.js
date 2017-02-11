'use strict';

window.colorizeElement = function (element, colors, property) {
  var currentColor = null;

  element.addEventListener('click', function () {
    colorChange();
  });

  element.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
      colorChange();
    }
  });
  var colorChange = function () {

    var newColor = null;
    while (!newColor || newColor === currentColor) {
      newColor = window.utils.getRandomElementExcept(colors, currentColor);
    }
    currentColor = newColor;
    element.style[property] = currentColor;
  };
};
