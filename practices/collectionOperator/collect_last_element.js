'use strict';

function collect_last_element(collection) {
  let last;
  let length=collection.length;
  last=collection[length-1];
  return last;

}

module.exports = collect_last_element;
