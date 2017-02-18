'use strict';

window.enableSetup = (function () {
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');
  var onSetupClose = null;

  var openSetup = function () {
    setup.classList.remove('invisible');
  };

  var closeSetup = function () {
    setup.classList.add('invisible');
    setupClose.removeEventListener('keydown', onKeyDown);
    setupClose.removeEventListener('keydown', onClick);

    if (typeof onSetupClose === 'function') {
      onSetupClose();
    }
  };

  var onClick = function () {
    closeSetup();
  };

  var onKeyDown = function (evt) {
    if (window.utils.isActivationEvent(evt)) {
      closeSetup();
    }
  };

  return function (cb) {
    openSetup();
    setupClose.addEventListener('keydown', onKeyDown);
    setupClose.addEventListener('keydown', onClick);

    onSetupClose = cb;
  };
})();
