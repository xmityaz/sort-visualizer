/**
 * Created by xmityaz on 02.06.16.
 */

import { width, height } from './canvas';

export function clearCanvas(ctx) {
  ctx.clearRect(0, 0, width, height);
}

export function drawArray(ctx, arr) {
  const maxEl = Math.max.apply(this, arr);
  const hStep = Math.round(height / maxEl);
  const itemWidth = width / arr.length / 8;
  const distance = width / arr.length;

  ctx.beginPath();

  arr.forEach((item, idx) => {
    drawLine(ctx, distance * (idx + 0.5), height, height - hStep * item);
  });

  ctx.lineWidth = itemWidth;
  ctx.stroke();
}

function drawLine(ctx, x, y, Y) {
  ctx.moveTo(x, y);
  ctx.lineTo(x, Y);
}