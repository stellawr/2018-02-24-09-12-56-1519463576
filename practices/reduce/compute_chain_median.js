'use strict';

function compute_chain_median(collection) {
  let result=0;
  let arr=collection.split("->")/*.sort()*/;
  let arr1=[];
  arr.forEach(function(data, index, arr) {
    arr1.push(+data);
  });
/*  for(let i=0;i<arr1.length;i++)*/

  function compare(x,y){
    if(x<y)
      return 1;
    else if(x>y)
      return -1;
    else
      return 0;
  }
    arr1.sort(compare);
  if(arr1.length%2==0)
    result=(arr1[arr1.length/2-1]+arr1[arr1.length/2])/2;
  else
    result=arr1[Math.floor(arr1.length/2)];
  return result;
}
var chain = '1->4->6->2->3->10->9->8->11->20->19->30';
compute_chain_median(chain);
module.exports = compute_chain_median;
