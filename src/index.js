/**
 * Created by xmityaz on 02.06.16.
 */

import { context, initCanvas } from './canvas';
import { drawArray, clearCanvas } from './visualize';
import { bubbleSort } from './sort';

initCanvas();

const testArray = [5, 1, 9, 10, 2, 12, 8, 3, 4, 6, 7, 11];
const iterator = bubbleSort(testArray);

function visualize() {
  const next = iterator.next();

  if (next.done) {
    return;
  }

  clearCanvas(context);
  drawArray(context, next.value);

  requestAnimationFrame(visualize);
}

visualize();