'use strict';

window.utils = {
  getRandomElement: function (array) {
    var randomElemetIndex = Math.floor(Math.random() * array.length);
    return array[randomElemetIndex];
  },
  getRandomElementExcept: function (arr, val) {
    var randomEl = null;
    while (!randomEl || randomEl === val) {
      randomEl = this.getRandomElement(arr);
    }
    return randomEl;
  }
};
