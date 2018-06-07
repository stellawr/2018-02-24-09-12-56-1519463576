'use strict';

function find_element_first_subscript(collection, element) {
  for(let i=0;i<collection.length;i++)
    if(collection[i]==element)
     return i;
}

module.exports = find_element_first_subscript;

