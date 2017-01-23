'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура, вы победили!', 140, 40);
  ctx.fillText('Список результатов:', 140, 60);

  // обращение к массиву times через переменную
  var timePassingLevel = times[0];
  var i = 0;

  // цикл перебора значений в массиве - times
  for (; i < times.length; i++) {
    var timeGame = times[i];
    if (timeGame > timePassingLevel) {
      timePassingLevel = timeGame;
    }
  };

  var statisHeight = 150; // высота столбцов статистики
  var columnStatisX = 140; // положение столбцов статистики по горизонтали
  var valuesSum = statisHeight / timePassingLevel; // вычисление высоты столбцов статистики относительно получ. данным
  var columnIndent = 90; // отступ между колонками статистики
  var i = 0;
  
  // цикл перебора значений в массиве - names
  for (; i < times.length; i++) {
    var playerName = names[i];
    var timeGame = times[i];
    var HeightColumnStatis = valuesSum * timeGame;
    
    // Вывод значений из массивов (names, times) в окно статистики
    ctx.fillStyle = playerName === 'Вы' ? '#FF0000' : 'rgb(0, 0, ' + Math.round(80 + Math.random() * (255 - 80)) + ')';
    ctx.fillRect(columnStatisX + columnIndent * i, 245 - HeightColumnStatis, 40, HeightColumnStatis);
    ctx.fillStyle = '#000';
    ctx.fillText(timeGame.toFixed(0), columnStatisX + columnIndent * i, 240 - HeightColumnStatis);
    ctx.fillText(playerName, columnStatisX + columnIndent * i, 260);
  };
};