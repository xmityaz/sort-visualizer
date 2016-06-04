/**
 * Created by xmityaz on 04.06.16.
 */

export function initArray(len) {
  return Array.from(new Array(len), (v, i) => i + 1);
}

export function shuffle(arr) {
  let i = arr.length;

  while (i > 0) {
    let idx = Math.floor(Math.random() * arr.length);
    i--;

    [arr[idx], arr[i]] = [arr[i], arr[idx]]
  }

  return arr;
}