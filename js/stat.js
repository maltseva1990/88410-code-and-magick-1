'use strict';

window.renderStatistics = function (ctx, names, times) {

  var drawCloud = function (color, x, y, width, height) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };

  drawCloud('rgba(0, 0, 0, 0.7)', 110, 20, 420, 270);
  drawCloud('white', 100, 10, 420, 270);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = Math.max.apply(null, times);
  var histoHeight = 150;
  var histoX = 140;
  var step = histoHeight / max;
  var columnIndent = 90;

  for (var i = 0; i < times.length; i++) {

    var name = names[i];
    var time = times[i];
    var height = step * time;

    var fillColor;

    ctx.fillText(time.toFixed(0), histoX + columnIndent * i, 90 + histoHeight - height);

    if (name === 'Вы') {
      fillColor = '#FF0000';

    } else {
      var color = ((Math.random()*5)*50).toFixed();
      var opacity = Math.random().toFixed(1);
      fillColor = 'rgba(0,0,' + color + ', ' + opacity + ')';
    }

    ctx.fillStyle = fillColor;
    ctx.fillRect(histoX + columnIndent * i, 100 + histoHeight - height, 40, height);
    ctx.fillStyle = 'black';
    ctx.fillText(name, histoX + columnIndent * i, 100 + histoHeight + 20);
  }
};
