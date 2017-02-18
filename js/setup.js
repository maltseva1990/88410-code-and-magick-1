'use strict';

window.setup = (function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupOverlay = document.querySelector('.setup');
  var setupCloseOverlay = setupOverlay.querySelector('.setup-close');
  var onSetupClose = null;
  if (typeof onSetupClose === 'function') {
    onSetupClose();
  }
  var fillColor = function (element, property, color) {
    element.style[property] = color;
  };

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
  window.colorizeElement(wizardCoat, wizardCoatColors, 'fill', fillColor);
  var wizarEyes = wizard.querySelector('#wizard-eyes');
  var wizardEyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  window.colorizeElement(wizarEyes, wizardEyesColors, 'fill', fillColor);
  var fireballWrap = document.querySelector('.setup-fireball-wrap');
  var wizardFireballColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  window.colorizeElement(fireballWrap, wizardFireballColors, 'background', fillColor);
  var nameField = document.querySelector('.setup-user-name');
  nameField.required = true;
  nameField.maxLength = 50;

  var saveBtn = document.querySelector('.setup-submit');

  var setupKeydownHandler = function (evt) {
    if (window.utils.isDiactivateEvent(evt)) {
      setupOverlay.classList.add('invisible');
    }
  };

  var showSetupElement = function () {
    setupOverlay.classList.remove('invisible');
    document.addEventListener('keydown', function (evt) {
      if (window.utils.isDiactivateEvent(evt)) {
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
    if (window.utils.isActivateEvent(evt)) {
      showSetupElement();
    }
  });

  setupCloseOverlay.addEventListener('click', function () {
    hideSetupElement();
  });

  setupCloseOverlay.addEventListener('keydown', function (evt) {
    if (window.utils.isActivateEvent(evt)) {
      hideSetupElement();
    }
  });

  saveBtn.addEventListener('click', function () {
    hideSetupElement();
  });

  saveBtn.addEventListener('keydown', function (evt) {
    if (window.utils.isActivateEvent(evt)) {
      hideSetupElement();
    }
  });
  var focusOpenButton = function() {
    setupOpen.focus();
  };

  var onSetupKeydown = function(evt) {
    if (window.utils.isActivateEvent(evt)) {
      window.enableSetup(focusOpenButton);
    }
  };
})();
