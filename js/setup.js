'use strict';

// открываем popup окно кликнув по иконке игрока
var popupWindow = document.querySelector('.setup-open');
var openPopupShow = document.querySelector('.setup');

popupWindow.addEventListener('click', function () {
  openPopupShow.classList.remove('invisible');
});

// закрываем popup окно кликнув по крестику X
var closePopupWindow = document.querySelector('.setup-close');

closePopupWindow.addEventListener('click', function () {
  openPopupShow.classList.add('invisible');
});

// валидация имени персонажа
var userNameText = document.querySelector('.setup-user-name');

userNameText.addEventListener('click', function () {
  userNameText.value = '';
  userNameText.placeholder = 'Введите имя мага';
});

var saveUserConfig = document.querySelector('.setup-submit');

saveUserConfig.addEventListener('click', function () {
  userNameText.required = true;

  if (userNameText.value.length > 50) {
    userNameText.value = '';
    userNameText.placeholder = 'Max 50 символов!';
  }
});

// раскраска мантии у мага
var colorMantMag = document.getElementById('wizard-coat');
var colorRgbMantle = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];

colorMantMag.addEventListener('click', function () {

  function colorRgbRandom(arr, obj) {
    for (var i = 0; i < 10; i++) {

      var randRgbColor = arr[Math.floor(Math.random() * arr.length)];
      if (obj.style.fill !== randRgbColor) {
        obj.style.fill = randRgbColor;
        break;
      }
    }
  }
  colorRgbRandom(colorRgbMantle, colorMantMag);
});

// смена цвета глаз у мага
var colorEyesMag = document.getElementById('wizard-eyes');
var colorKeyEyes = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'];

colorEyesMag.addEventListener('click', function () {

  for (var i = 0; i < 10; i++) {

    var randKeyColor = colorKeyEyes[Math.floor(Math.random() * colorKeyEyes.length)];

    if (colorEyesMag.style.fill !== randKeyColor) {
      colorEyesMag.style.fill = randKeyColor;
      break;
    }
  }
});

// смена цвета файерболла мага
var colorFireballMage = document.querySelector('.setup-fireball-wrap');
var colorHexFireball = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'];

colorFireballMage.style.background = '#ee4830';
var colorIndex = 1;

colorFireballMage.addEventListener('click', function () {

  if (colorIndex < colorHexFireball.length) {
    if (colorIndex < colorHexFireball.length) {
      colorFireballMage.style.backgroundColor = colorHexFireball[colorIndex];
    }
  }
  colorIndex++;
  if (colorIndex === colorHexFireball.length) {
    colorIndex = 0;
  }
});
