'use strict';

function calculate_elements_sum(collection, element) {
  for(let i=collection.length;i>0;i--)
    if(collection[i]==element)
      return i;
}

module.exports = calculate_elements_sum;
