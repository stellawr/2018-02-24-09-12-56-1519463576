'use strict';
function map_to_even(collection){
  let result=[];
  result=collection.map(function (i){return i*2;
  });
  console.log(result);
  return result;
}

module.exports = map_to_even;
