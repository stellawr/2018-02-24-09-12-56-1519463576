'use strict';

function compute_average(collection) {
  let result=0;
  for(let i=0;i<collection.length;i++)
    result+=collection[i];
  result=result/collection.length;
  return result;
}

module.exports = compute_average;

