'use strict';

function choose_no_repeat_number(collection) {

  let result=[];
  result.push(collection[0]);
  for(let i=1;i<collection.length;i++)
    if(collection[i]!=collection[i-1])
      result.push(collection[i]);
  return result;
}

module.exports = choose_no_repeat_number;
