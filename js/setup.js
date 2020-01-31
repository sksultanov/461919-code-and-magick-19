'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SERNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['(101, 137, 164)', '(241, 43, 107)', '(146, 100, 161)', '(56, 159, 117)', '(215, 210, 55)', '(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');


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

