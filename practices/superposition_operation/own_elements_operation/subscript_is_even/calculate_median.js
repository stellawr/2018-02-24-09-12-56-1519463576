'use strict';
var calculate_median = function(collection){
  let result=0;
  let arr=[];
  for(let i=0;i<collection.length;i++)
    if((i+1)%2==0)
    {
     arr.push(collection[i]);
    }
  if(arr.length%2!=0)
    result=arr[Math.floor(arr.length/2)];
  else
     result=Math.floor((arr[arr.length/2-1]+arr[arr.length/2])/2);
  return result;
};
module.exports = calculate_median;
