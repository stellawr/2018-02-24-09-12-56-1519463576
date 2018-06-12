'use strict';
var is_exist_element = function(collection,element){
  let arr=[];
for(let i=0;i<collection.length;i++)
  if(i%2==0)
    arr.push(collection[i]);
for(let i=0;i<arr.length;i++)
  if(arr[i]==element)
    return true;
return false;
};
module.exports = is_exist_element;
