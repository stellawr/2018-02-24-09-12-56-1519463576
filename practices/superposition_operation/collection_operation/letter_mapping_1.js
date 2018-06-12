'use strict';

function even_to_letter(collection) {
  let result=[];
  let arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n'];
  for(let i=0;i<collection.length;i++)
    if(collection[i]%2==0)
      result.push(arr[collection[i]-1]);
  return result;
}

module.exports = even_to_letter;
