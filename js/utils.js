'use strict';

var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

window.utils = {

  isActivateEvent: function (evt) {
    return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
  },

  isDiactivateEvent: function (evt) {
    return evt.keyCode && evt.keyCode === ESCAPE_KEY_CODE;
  },

  getRandomElement: function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  },

  getRandomElementExcept: function (array, colorValue) {
    var randomElement = null;
    while (!randomElement || randomElement === colorValue) {
      randomElement = this.getRandomElement(array);
    }
    return randomElement;
  }
};
