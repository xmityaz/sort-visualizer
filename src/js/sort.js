/**
 * Created by xmityaz on 02.06.16.
 */

import { shuffle, initArray } from './utils';

export function* bubbleSort(arr, cond = (a, b) => a > b) {
  yield { arr };

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length; j++) {
      if (cond(arr[i], arr[j])) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }

      yield { arr, items: [i, j] };
    }
  }

  return { arr };
}

export function* bogoSort(arr, cond = a => a.toString() === initArray(a.length).toString()) {
  yield { arr };

  while (!cond(arr)) {
    arr = shuffle(arr);
    yield { arr };
  }

  return { arr }
}
