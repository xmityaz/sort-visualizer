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

export function* insertionSort(arr, cond = (a, b) => a > b) {
  yield { arr };

  for (var i = 0; i < arr.length; i++) {
    let temp = arr[i];

    for (var j = i - 1; j >= 0 && cond(arr[j], temp); j--) {
      arr[j + 1] = arr[j];

      yield { arr, items: [i, j] };
    }

    arr[j + 1] = temp;
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

// helper functions for mergeSort
//
function divideArr(arr) {
  const mid = Math.floor(arr.length / 2);

  return { left: arr.slice(0, mid), right: arr.slice(mid) };
}

function* mergeSortedArrays(left, right, cond, idx) {
  let res = [];
  let temp;

  while (left.length && right.length) {
    temp = cond(right[0], left[0]) ? left.shift() : right.shift();
    res.push(temp);

    yield {
      arr: res.concat(left).concat(right),
      items: [idx + res.length, idx + left.length + res.length],
      idx
    };
  }

  if (left.length) {
    res = res.concat(left);
  } else if (right.length) {
    res = res.concat(right);
  }

  return { arr: res, idx };
}


// Merge sorting algorithm function
//
// @arr  - unsorted array
// @cond - sorting condition
// @idx  - index from which extracted @arr part from initial array
//
export function* mergeSortAlg(arr, cond = (a, b) => a > b, idx = 0) {
  let res;

  if (arr.length === 1) {
    return { arr, idx };
  }
  else {
    yield { arr, idx };

    const {left, right} = divideArr(arr);

    const leftGen = yield* mergeSortAlg(left, cond, idx);
    yield { arr: leftGen.arr, idx };

    const rightGen = yield* mergeSortAlg(right, cond, idx + left.length);
    yield { arr: rightGen.arr, idx: idx + left.length };

    res = yield* mergeSortedArrays(leftGen.arr, rightGen.arr, cond, idx);
  }

  return res;
}

// Functions which runs actual mergeSort algorithm and keeps array indivisible if mergeSortAlg
// yields just a small part of initial array
//
export function* mergeSort(arr, cond = (a, b) => a > b) {
  for (let step of mergeSortAlg(arr, cond, 0)) {
    const {idx, items} = step;
    const nextArr = step.arr;

    arr = arr.slice(0, idx)
      .concat(nextArr)
      .concat(arr.slice(idx + nextArr.length));

    yield { arr, items };
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
  selectSort,
  insertionSort,
  gnomeSort,
  //strangeSort,
  cocktailSort,
  mergeSort,
  bogoSort,
};
