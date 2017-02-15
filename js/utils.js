'use strict';

window.utils = (function () {
  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;

  var isActivateEvent = function (evt) {
    return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
  };

  var isDiactivateEvent = function (evt) {
    return evt.keyCode && evt.keyCode === ESCAPE_KEY_CODE;
  };

  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };

  var getRandomElementExcept = function (array, colorValue) {
    var randomElement = null;
    while (!randomElement || randomElement === colorValue) {
      randomElement = getRandomElement(array);
    }
    return randomElement;
  };

  return {
    isActivateEvent: isActivateEvent,
    isDiactivateEvent: isDiactivateEvent,
    getRandomElement: getRandomElement,
    getRandomElementExcept: getRandomElementExcept
  };
})();
