'use strict';

function grouping_count(collection) {
  //let result=[];
  let arr={};
 // arr[1]=collection[0];
  for(let i=0;i<collection.length;i++) {
    if (!arr[collection[i]]) {
      arr[collection[i]]=1;
    }
    else {
      arr[collection[i]]++;
    }
  }
//console.log(arr);
  return arr;
}
var collection = [1,1,1,1,2,3,1,3,4,2,3,1,3,4,2];
grouping_count(collection);
module.exports = grouping_count;
