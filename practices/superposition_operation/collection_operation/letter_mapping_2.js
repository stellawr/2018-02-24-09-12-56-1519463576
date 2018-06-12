'use strict';

function average_to_letter(collection) {
  let result=null;
  let arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n'];
  let avg=0;
  for(let i=0;i<collection.length;i++)
    avg+=collection[i];
  avg=Math.ceil(avg/collection.length);
  result=arr[avg-1];
  return result;
}

module.exports = average_to_letter;

