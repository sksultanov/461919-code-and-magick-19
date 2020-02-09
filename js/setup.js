'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SERNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['(101, 137, 164)', '(241, 43, 107)', '(146, 100, 161)', '(56, 159, 117)', '(215, 210, 55)', '(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getRandomElementFromArray = function (arr) {
  var randomElement = arr[Math.floor(Math.random() * arr.length)];
  return randomElement;
};

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var userNameInput = userDialog.querySelector('.setup-user-name');
var wizardCoat = userDialog.querySelector('.wizard-coat');
var coatColorInput = userDialog.querySelector('input[name="coat-color"]');
var wizardEyes = userDialog.querySelector('.wizard-eyes');
var eyesColorInput = userDialog.querySelector('input[name="eyes-color"]');
var wizardFireball = userDialog.querySelector('.setup-fireball-wrap');
var fireballColorInput = userDialog.querySelector('input[name="fireball-color"]');

var wizards = [
  {
    name: WIZARD_NAMES[getRandomInt(0, WIZARD_NAMES.length - 1)] + ' ' + WIZARD_SERNAME[getRandomInt(0, WIZARD_SERNAME.length - 1)],
    coatColor: 'rgb' + COAT_COLOR[getRandomInt(0, COAT_COLOR.length - 1)],
    eysColor: EYES_COLOR[getRandomInt(0, EYES_COLOR.length - 1)]

  },
  {
    name: WIZARD_NAMES[getRandomInt(0, WIZARD_NAMES.length - 1)] + ' ' + WIZARD_SERNAME[getRandomInt(0, WIZARD_SERNAME.length - 1)],
    coatColor: 'rgb' + COAT_COLOR[getRandomInt(0, COAT_COLOR.length - 1)],
    eysColor: EYES_COLOR[getRandomInt(0, EYES_COLOR.length - 1)]
  },
  {
    name: WIZARD_NAMES[getRandomInt(0, WIZARD_NAMES.length - 1)] + ' ' + WIZARD_SERNAME[getRandomInt(0, WIZARD_SERNAME.length - 1)],
    coatColor: 'rgb' + COAT_COLOR[getRandomInt(0, COAT_COLOR.length - 1)],
    eysColor: EYES_COLOR[getRandomInt(0, EYES_COLOR.length - 1)]
  },
  {
    name: WIZARD_NAMES[getRandomInt(0, WIZARD_NAMES.length - 1)] + ' ' + WIZARD_SERNAME[getRandomInt(0, WIZARD_SERNAME.length - 1)],
    coatColor: 'rgb' + COAT_COLOR[getRandomInt(0, COAT_COLOR.length - 1)],
    eysColor: EYES_COLOR[getRandomInt(0, EYES_COLOR.length - 1)]
  }

];


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eysColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape' && evt.target !== userNameInput) {
    userDialog.classList.add('hidden');
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

wizardCoat.addEventListener('click', function () {
  coatColorInput.value = 'rgb' + getRandomElementFromArray(COAT_COLOR);
  wizardCoat.style.fill = coatColorInput.value;
});

wizardEyes.addEventListener('click', function () {
  eyesColorInput.value = getRandomElementFromArray(EYES_COLOR);
  wizardEyes.style.fill = eyesColorInput.value;
});

wizardFireball.addEventListener('click', function () {
  fireballColorInput.value = getRandomElementFromArray(FIREBALL_COLOR);
  wizardFireball.style.backgroundColor = fireballColorInput.value;
});
