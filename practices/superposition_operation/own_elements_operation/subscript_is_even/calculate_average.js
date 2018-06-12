'use strict';
var calculate_average = function(collection){

  let result=0;
  let count=0;
  for(let i=0;i<collection.length;i++)
    if((i+1)%2==0)
    {
      result+=collection[i];
      count++;
    }
    result=result/count;
  return result;
};

module.exports = calculate_average;
