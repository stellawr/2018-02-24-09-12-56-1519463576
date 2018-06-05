'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  let result=[];
  for(let i=0;i<collection_a.length;i++)
    for(let j=0;j<collection_b.length;j++)
      if(collection_b[j]==collection_a[i])
        collection_a.splice(i,1);
  result=collection_a;
        //result.push(collection_a[i]);
  return result;
}

module.exports = choose_no_common_elements;
