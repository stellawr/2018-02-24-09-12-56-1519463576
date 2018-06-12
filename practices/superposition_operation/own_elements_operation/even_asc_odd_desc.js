'use strict';
var even_asc_odd_desc = function(collection){
  let result=[];
  let arr_even=[];
  let arr_odd=[]
  function sortAsc(a,b)
  {
    return a - b
  }
  function sortDesc(a,b)
  {
    return b - a
  }
  for(let i=0;i<collection.length;i++)
    if(collection[i]%2==0)
      arr_even.push(collection[i])
    else
      arr_odd.push(collection[i]);
  arr_odd.sort(sortDesc);
  arr_even.sort(sortAsc);
  result=arr_even.concat(arr_odd);
  return result;
};
module.exports = even_asc_odd_desc;
