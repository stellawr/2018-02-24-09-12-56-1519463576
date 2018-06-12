'use strict';
var single_element = function(collection){
  let arr=[];
  let delect=0;
  for(let i=0;i<collection.length;i++)
    if((i+1)%2==0)
      arr.push(collection[i]);
  function sortNumber(a,b)
  {
    return a - b
  }
  arr.sort(sortNumber);
  console.log(arr);
  for(let i=0;i<arr.length;i++)
  {
    if(arr[i]==arr[i+1])
    {
      delect=arr[i];
      arr.splice(0,2);
      console.log(arr);
    }
    if(arr[i]==delect)
      arr.splice(0,1)
  }
  console.log(arr);
  return arr;
};
var collection_a = [1, 2, 3, 2, 5, 6, 21, 43, 12, 5]
var collection_b = [11, 11, 22, 11, 33, 11]
single_element(collection_b)
module.exports = single_element;
