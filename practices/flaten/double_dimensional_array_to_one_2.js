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
  for(let i=result.length;i>=0;i-- ){
    for(let j=0;j<i;j++)
      if(result[i]==result[j])
        result.splice(i,1);
  }

  return result;
}

module.exports = double_to_one;
