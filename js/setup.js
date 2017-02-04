'use strict';

// открываем popup окно кликнув по иконке игрока
var popupWindow = document.querySelector('.setup-open');
var openPopupShow = document.querySelector('.setup');

var saveUserConfig = document.querySelector('.setup-submit');
// валидация имени персонажа
var userNameText = document.querySelector('.setup-user-name');
// закрываем popup окно кликнув по крестику X
var closePopupWindow = document.querySelector('.setup-close');

// раскраска мантии у мага
var colorMantMag = document.getElementById('wizard-coat');
var colorRgbMantle = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];

// смена цвета глаз у мага
var colorEyesMag = document.getElementById('wizard-eyes');
var colorKeyEyes = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'];

// смена цвета файерболла мага
var colorFireballMage = document.querySelector('.setup-fireball-wrap');
var colorHexFireball = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'];

// произвольный цвет из массива
var randomColor = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

// установка произвольного цвета в элемент
var colorRgbRandom = function (arr, obj, props) {
  var randRgbColor = randomColor(arr);

  obj.style[props] = randRgbColor;
};

popupWindow.addEventListener('click', function () {
  openPopupShow.classList.remove('invisible');
});

closePopupWindow.addEventListener('click', function () {
  openPopupShow.classList.add('invisible');
});

userNameText.addEventListener('click', function () {
  userNameText.value = '';
  userNameText.placeholder = 'Введите имя мага';
});

saveUserConfig.addEventListener('click', function () {
  userNameText.required = true;
});

colorMantMag.addEventListener('click', function () {
  colorRgbRandom(colorRgbMantle, colorMantMag, 'fill');
});

colorEyesMag.addEventListener('click', function () {
  colorRgbRandom(colorKeyEyes, colorEyesMag, 'fill');
});

colorFireballMage.addEventListener('click', function () {
  colorRgbRandom(colorHexFireball, colorFireballMage, 'backgroundColor');
});
