/**
 * Created by xmityaz on 05.06.16.
 */

import { availableAlgorithms } from './sort';
import { width, height } from './canvas';
import visualize from './visualize';

const form = document.forms[0];
const arrLengthEl = form.elements.arrLength;
const sortSelect = form.elements.sort;

// TODO: do not use appendChild inside loop
function initSortOptions() {
  Object.keys(availableAlgorithms).forEach((alg) => {
    sortSelect.appendChild((new Option(alg, alg)));
  });
}

function initArrLengthEl() {
  // Array length shouldn't be more then half of canvas width or it height
  arrLengthEl.max = Math.min(Math.floor(width / 2), height);

  // Default value
  arrLengthEl.value = 40;
}

function initSortButton() {
  form.onsubmit = function (e) {
    const sortAlg = availableAlgorithms[sortSelect.value];
    const arrLength = +arrLengthEl.value;

    e.preventDefault();

    visualize(sortAlg, arrLength);
  }
}

export function initForm() {
  initSortOptions();

  initArrLengthEl();
  initSortButton();
}
