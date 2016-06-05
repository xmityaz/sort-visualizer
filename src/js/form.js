/**
 * Created by xmityaz on 05.06.16.
 */

import { availableAlgorithms } from './sort';
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

  arrLengthEl.value = 20;
  initSortButton();
}
