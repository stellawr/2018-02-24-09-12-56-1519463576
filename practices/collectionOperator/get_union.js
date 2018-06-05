'use strict';

function get_union(collection_a, collection_b) {
  let result=collection_a;
  /*for(let j=0;j<collection_a.length;j++)
    result.push(*/
  //result=collection_a;
  for(let i=0;i<collection_b.length;i++)
    for(let j=0;j<collection_a.length;j++)
    {
      if(collection_a[j]==collection_b[i])
      {
        collection_b.splice(i,1);
        i--;
       // console.log(collection_b);
      }
    }
    result=result.concat(collection_b);
   return result;
  }
/*var collection_a = [10, 27, 28, 19, 5];
var collection_b = [5, 78, 28, 19, 23];
get_union(collection_a, collection_b);*/
module.exports = get_union;

