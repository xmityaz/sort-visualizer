/**
 * Created by xmityaz on 02.06.16.
 */

import { context, initCanvas } from './js/canvas';
import { drawArray, clearCanvas, drawActiveItems } from './js/visualize';
import { bubbleSort, bogoSort } from './js/sort';
import { shuffle, initArray } from './js/utils';

initCanvas();

function visualize(sortAlg, len) {
  const testArray = initArray(len);
  const iterator = sortAlg(shuffle(testArray));

  tick(iterator);
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

visualize(bubbleSort, 50);