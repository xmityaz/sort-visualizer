/**
 * Created by xmityaz on 02.06.16.
 */

const canvas = document.getElementById('sort-visualizer');

export const width = window.innerWidth;
export const height = window.innerHeight / 2;
export const context = canvas.getContext('2d');

export function initCanvas() {
  canvas.width = width;
  canvas.height = height;
}