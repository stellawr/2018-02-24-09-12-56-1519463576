'use strict';

function double_to_one(collection) {

  let result=[];
  for(let i=0;i<collection.length;i++){
    if(collection[i].length==undefined)
      result.push(collection[i]);
    else{
      for(let j=0;j<collection[i].length;j++)
         result.push(collection[i][j]);
    }
  }
  return result;
}
module.exports = double_to_one;
