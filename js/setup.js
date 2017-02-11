'use strict';

var setupOpen = document.querySelector('.setup-open');
var setupOverlay = document.querySelector('.setup');
var setupCloseOverlay = setupOverlay.querySelector('.setup-close');
var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
window.colorizeElement(wizardCoat, wizardCoatColors, 'fill');
var wizarEyes = wizard.querySelector('#wizard-eyes');
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
window.colorizeElement(wizarEyes, wizardEyesColors, 'fill');
var fireballWrap = document.querySelector('.setup-fireball-wrap');
var wizardFireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

window.colorizeElement(fireballWrap, wizardFireballColors, 'background');
var nameField = document.querySelector('.setup-user-name');
nameField.required = true;
nameField.maxLength = 50;

var saveBtn = document.querySelector('.button setup-submit');
var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

var isActivateEvent = function (evt) {
  return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
};

var isDiactivateEvent = function (evt) {
  return evt.keyCode && evt.keyCode === ESCAPE_KEY_CODE;
};

var setupKeydownHandler = function (evt) {
  if (isDiactivateEvent(evt)) {
    setupOverlay.classList.add('invisible');
  }
};

var showSetupElement = function () {
  setupOverlay.classList.remove('invisible');
  document.addEventListener('keydown', function (evt) {
    if (isDiactivateEvent(evt)) {
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

setupCloseOverlay.addEventListener('click', function () {
  hideSetupElement();
});

setupCloseOverlay.addEventListener('keydown', function (evt) {
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


