'use strict';

function compare_collections(collection_a, collection_b) {
  for(let i=0;i<collection_a.length;i++)
    if(collection_a[i]!=collection_b[i])
      return false;
    else
      return true;
}

module.exports = compare_collections;


