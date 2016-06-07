/**
 * Created by xmityaz on 02.06.16.
 */

import { shuffle, initArray } from './utils';

export function* bubbleSort(arr, cond = (a, b) => a > b) {
  yield { arr };

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (cond(arr[j], arr[j + 1])) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }

      yield { arr, items: [j, j + 1] };
    }
  }

  return { arr };
}


export function* selectSort(arr, cond = (a, b) => a > b) {
  yield { arr };
  let min;
  let idx;

  for (let i = 0; i < arr.length - 1; i++) {
    min = arr[i];
    for (let j = i; j < arr.length; j++) {
      if (!cond(arr[j], min)) {
        min = arr[j];
        idx = j;
      }
      yield { arr, items: [i, j, idx] };
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }

  return { arr };
}

export function* gnomeSort(arr, cond = (a, b) => a > b) {
  yield { arr };
  let i = 1;
  let last = 0;

  while (i < arr.length) {
    if (!cond(arr[i - 1], arr[i])) {
      yield { arr, items: [i, i - 1] };

      if (last > ++i) {
        i = last;
      } else {
        last = i;
      }
    } else {
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];

      yield { arr, items: [i, --i] };
    }

    yield { arr, items: [i, i + 1] };
  }

  return { arr };

}

export function* cocktailSort(arr, cond = (a, b) => a > b) {
  yield { arr };

  let right = arr.length - 1;
  let left = 0;

  while (left < right) {
    for (let j = left; j < right; j++) {
      if (cond(arr[j], arr[j + 1])) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }

      yield { arr, items: [j, j + 1] };
    }
    right--;

    for (let j = right; j > left; j--) {
      if (cond(arr[j - 1], arr[j])) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }

      yield { arr, items: [j, j - 1] };
    }

    left++;
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

export function* strangeSort(arr, cond = (a, b) => a > b) {
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

export const availableAlgorithms = {
  bubbleSort,
  gnomeSort,
  //strangeSort,
  selectSort,
  cocktailSort,
  bogoSort,
};
