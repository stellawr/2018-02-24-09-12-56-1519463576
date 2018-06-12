'use strict';
function rank_by_two_large_one_small(collection){
  function sortAsc(a,b)
  {
    return a - b
  }
  collection.sort(sortAsc);
  let temp=0;
  for(let i=0;i<collection.length;i=i+3)
  {
    if(collection[i+2]!=null){
    temp=collection[i];
    collection[i]=collection[i+1];
    collection[i+1]=collection[i+2];
    collection[i+2]=temp;
    }
  }
  return collection;
}
module.exports = rank_by_two_large_one_small;
