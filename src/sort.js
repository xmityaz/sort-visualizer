/**
 * Created by xmityaz on 02.06.16.
 */

export function* bubbleSort (arr, cond = (a, b) => a > b) {
  let cache;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length; j++) {
      if (cond(arr[i], arr[j])) {
        cache = arr[i];
        arr[i] = arr[j];
        arr[j] = cache;
      }

      yield arr;
    }
  }

  return arr;
}
