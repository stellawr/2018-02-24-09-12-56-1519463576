'use strict';

function average_uneven(collection) {
  let count=0;
  let result=0;
  for(let i=0;i<collection.length;i++)
    if(collection[i]%2!=0){
      result+=collection[i];
      count++;
  }
  result=result/count;
  return result;
}

module.exports = average_uneven;
