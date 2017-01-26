'use strict';

window.renderStatistics = function (ctx, names, times) {
  var statisHeight = 150; // высота столбцов статистики
  var columnStatisX = 140; // положение столбцов статистики по горизонтали
  var columnIndent = 90; // отступ между колонками статистики
  var timePassingLevel = times[0]; // обращение к массиву times через переменную

  var drawRect = function(x1, y1, x2, y2, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x1, y1, x2, y2);
  };

  var drawText = function(text, x, y, color) {
    ctx.font = '16px PT Mono';
    ctx.fillStyle = color || '#000';
    ctx.fillText(text, x, y);
  };

  // фон статистики
  drawRect(110, 20, 420, 270, 'rgba(0, 0, 0, 0.7)');
  drawRect(100, 10, 420, 270, 'rgba(256, 256, 256, 1.0)');

  drawText('Ура, вы победили!', 140, 40);
  drawText('Список результатов:', 140, 60);

  // получение максимального значения массива - times
  for (var i = 0; i < times.length; i++) {
    var timeGame = times[i];
    if (timeGame > timePassingLevel) {
      timePassingLevel = timeGame;
    }
  };

  var valuesSum = statisHeight / timePassingLevel; // вычисление высоты столбцов статистики

  // получение максимального значения массива - names
  for (var i = 0; i < times.length; i++) {
    var playerName = names[i];
    var timeGame = times[i];
    var HeightColumnStatis = valuesSum * timeGame;

    // Вывод значений из массивов (names, times) в окно статистики
  var fillColor = playerName === 'Вы' ? '#FF0000' : 'rgb(0, 0, ' + Math.round(80 + Math.random() * (255 - 80)) + ')';

    drawRect(columnStatisX + columnIndent * i, 245 - HeightColumnStatis, 40, HeightColumnStatis, fillColor);
    drawText(timeGame.toFixed(0), columnStatisX + columnIndent * i, 240 - HeightColumnStatis);
    drawText(playerName, columnStatisX + columnIndent * i, 260);
  };
};
