'use strict';
var even_group_calculate_average = function(collection) {
  let result = [0,0,0];
  let arr = [];
  let count = Array(3).fill(0);
  function sortNumber(a,b)
  {
    return a - b
  }
  for (let i = 0; i < collection.length; i++) {
    if ((i + 1) % 2 == 0)
      if (collection[i] % 2 == 0) {
        arr.push(collection[i]);
      }
  }
  if(arr.length==0)
    return [result[0]];
  arr.sort(sortNumber);
  for(let j=0;j<arr.length;j++)
  {
    if(Math.floor(arr[j]/10)==0)
    {
      result[0]+=arr[j];
      count[0]++;
    }
    else if(Math.floor(arr[j]/100)==0)
    {
      result[1]+=arr[j];
      count[1]++;
    }
    else if(Math.floor(arr[j]/1000)==0)
    {
      result[2]+=arr[j];
      count[2]++;
    }

  }
  console.log(result);
  for(let k=0;k<count.length;k++) {
    if (count[k] == 0) {
      result[k]=12345;
    }
    else
    {
      result[k] = result[k]/count[k];
    }
  }
  for(let i=0;i<result.length;i++)
    if(result[i]==12345)
    {
      result.splice(i,1);
      i--;
    }
    return result;
};
var collection_a = [1, 2, 3, 4, 5, 6, 12, 454, 324, 21, 45, 644, 34, 56, 345, 570, 8, 4, 14];
var collection_c = [344, 256, 55, 777, 322, 180];
even_group_calculate_average(collection_c)
module.exports = even_group_calculate_average;
