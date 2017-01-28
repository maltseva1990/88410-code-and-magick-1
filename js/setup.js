'use strict';

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
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
var wizarEyes = wizard.querySelector('#wizard-eyes');
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var fireballWrap = document.querySelector('.setup-fireball-wrap');
var wizardFireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
var nameField = document.querySelector('.setup-user-name');
nameField.required = true;
nameField.maxLength = 50;

var getRandom = function (min, max) {
  return Math.floor((Math.random() * (max - min) + min));
};

setupOpen.addEventListener('click', function () {
  setup.classList.remove('invisible');
});

setupClose.addEventListener('click', function () {
  setup.classList.add('invisible');
});

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = wizardCoatColors[getRandom(0, 5)];
});

wizarEyes.addEventListener('click', function () {
  wizarEyes.style.fill = wizardEyesColors [getRandom(0, 5)];
});

fireballWrap.addEventListener('click', function () {
  fireballWrap.style.background = wizardFireballColors [getRandom(0, 5)];
});
