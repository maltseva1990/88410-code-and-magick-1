'use strict';

window.renderStatistics = function (ctx, names, times) {

  var drawCloud = function () {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);

    ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
    ctx.fillRect(100, 10, 420, 270);
  };

  drawCloud();

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

// поиск максимального значения с помошью Math.max

  var max = Math.max.apply(null, times);
  var histoHeight = 150;
  var histoX = 140;
  var step = histoHeight / max;
  var columnIndent = 90;

  for (var i = 0; i < times.length; i++) {

    var name = names[i];
    var time1 = times[i];
    var height = step * time1;

    // вынесены одинаковые строки

    var fillRect = function () {
      ctx.fillRect(histoX + columnIndent * i, 100 + histoHeight - height, 40, height);
    };
    var fillStyle = function () {
      ctx.fillStyle = '#000';
    };

    var fillText = function () {
      ctx.fillText(name, histoX + columnIndent * i, 100 + histoHeight + 20);
    };
    ctx.fillText(time1.toFixed(0), histoX + columnIndent * i, 90 + histoHeight - height );
    if ( name === 'Вы') {
      ctx.fillStyle = '#FF0000';
      fillRect();
      fillStyle();
      fillText();
    } else {
      var color = Math.floor(Math.random() * 244);
      ctx.fillStyle = 'rgba(0,0,' + color + ', ' + Math.random() + ')';
      fillRect();
      fillStyle();
      fillText();
    }
  }
};
