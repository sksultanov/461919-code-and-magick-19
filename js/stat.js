'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP_SHADOW = 10;
var GAP = 50;
var FONT_GAP = 30;
var BAR_WIDTH = 40;
var barHeight = 150;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP_SHADOW, CLOUD_Y + GAP_SHADOW, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, FONT_GAP + FONT_GAP / 2);


  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = 'hsl(225,' + getRandomInt(0, 100) + '%,50%)';
    ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - (barHeight * times[i]) / maxTime, BAR_WIDTH, (barHeight * times[i]) / maxTime);
  }

  for (var j = 0; j < names.length; j++) {
    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * j, CLOUD_Y + CLOUD_HEIGHT - GAP - (barHeight * times[j]) / maxTime, BAR_WIDTH, (barHeight * times[j]) / maxTime);
    }
  }

  for (var k = 0; k < names.length; k++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[k]), CLOUD_X + GAP + (GAP + BAR_WIDTH) * k, CLOUD_HEIGHT - GAP - (barHeight * times[k]) / maxTime);
    ctx.fillText(names[k], CLOUD_X + GAP + (GAP + BAR_WIDTH) * k, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP);

  }
};
