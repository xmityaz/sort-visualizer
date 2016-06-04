/**
 * Created by xmityaz on 02.06.16.
 */

import { width, height } from './canvas';

export function clearCanvas(ctx) {
  ctx.clearRect(0, 0, width, height);
}

function calcDrawValues(arr) {
  const maxEl = Math.max.apply(this, arr);

  return {
    verticalStep: Math.round(height / maxEl),
    itemWidth: width / arr.length / 2,
    distance: width / arr.length,
  };
}

export function drawArray(ctx, arr) {
  const { verticalStep, itemWidth, distance } =calcDrawValues(arr);

  ctx.beginPath();

  arr.forEach((item, idx) => {
    drawLine(ctx, distance * (idx + 0.5), height, height - verticalStep * item);
  });

  ctx.lineWidth = itemWidth;
  ctx.strokeStyle = '#000000';
  ctx.stroke();
}

export function drawActiveItems(ctx, arr, items) {
  const { verticalStep, itemWidth, distance } =calcDrawValues(arr);

  ctx.beginPath();

  items.forEach(idx => {
    drawLine(ctx, distance * (idx + 0.5), height, height - verticalStep * arr[idx]);
  });

  ctx.lineWidth = itemWidth;
  ctx.strokeStyle = '#ff0000';
  ctx.stroke();

}

function drawLine(ctx, x, y, Y) {
  ctx.moveTo(x, y);
  ctx.lineTo(x, Y);
}