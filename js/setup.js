'use strict';

var setupOpen = document.querySelector('.setup-open');
var setupOverlay = document.querySelector('.overlay');
var setupClose = setupOverlay.querySelector('.setup-close');
var saveBtn = document.querySelector('.button setup-submit');
var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

var isActivateEvent = function (evt) {
  return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
};

var setupKeydownHandler = function (evt) {
  if (evt.keyCode === ESCAPE_KEY_CODE) {
    setupOverlay.classList.add('invisible');
  }
};

var showSetupElement = function () {
  setupOverlay.classList.remove('invisible');
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESCAPE_KEY_CODE) {
      setupOverlay.classList.add('invisible');
    }
  });
};

var hideSetupElement = function () {
  setupOverlay.classList.add('invisible');
  document.removeEventListener('keydown', setupKeydownHandler);
};

setupOpen.addEventListener('click', function () {
  showSetupElement();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    showSetupElement();
  }
});

setupClose.addEventListener('click', function () {
  hideSetupElement();
});

setupClose.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    hideSetupElement();
  }
});

saveBtn.addEventListener('click', function () {
  hideSetupElement();
});

saveBtn.addEventListener('click', function (evt) {
  if (isActivateEvent(evt)) {
    hideSetupElement();
  }
});
