'use strict';

function compute_median(collection) {
  let result=0;
  function compare(x,y){
    if(x<y)
      return 1;
    else if(x>y)
      return -1;
    else
      return 0;
  }
  let arr1=collection.sort(compare);
  if(arr1.length%2==0)
    result=(arr1[arr1.length/2-1]+arr1[arr1.length/2])/2;
  else
    result=arr1[Math.floor(arr1.length/2)];
  console.log(result);
  return result;
}

module.exports = compute_median;


