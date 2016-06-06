/**
 * Created by xmityaz on 02.06.16.
 */

import { width, height, context } from './canvas';
import { shuffle, initArray } from './utils';

export function clearCanvas(ctx) {
  ctx.clearRect(0, 0, width, height);
}

function calcDrawValues(arr) {
  return {
    verticalStep: Math.floor(height / arr.length),
    itemWidth: width / arr.length / 2,
    distance: width / arr.length,
  };
}

export function drawArray(ctx, arr) {
  const { verticalStep, itemWidth, distance } = calcDrawValues(arr);

  ctx.beginPath();

  arr.forEach((item, idx) =>
    drawLine(ctx, distance * (idx + 0.5), height, height - verticalStep * item));

  ctx.lineWidth = itemWidth;
  ctx.strokeStyle = '#000000';
  ctx.stroke();
}

export function drawActiveItems(ctx, arr, items) {
  const { verticalStep, itemWidth, distance } = calcDrawValues(arr);

  ctx.beginPath();

  items.forEach(idx =>
    drawLine(ctx, distance * (idx + 0.5), height, height - verticalStep * arr[idx]));

  ctx.lineWidth = itemWidth;
  ctx.strokeStyle = '#ff0000';
  ctx.stroke();
}

function drawLine(ctx, x, y, Y) {
  ctx.moveTo(x, y);
  ctx.lineTo(x, Y);
}

function tick(iterator) {
  const next = iterator.next();
  const { value: {arr, items}, done } = next;

  clearCanvas(context);
  drawArray(context, arr);

  items && drawActiveItems(context, arr, items);

  if (done) {
    return;
  }

  requestAnimationFrame(tick.bind(null, iterator));
}

export default function (sortAlg, len) {
  const testArray = initArray(len);
  const iterator = sortAlg(shuffle(testArray));

  tick(iterator);
}
