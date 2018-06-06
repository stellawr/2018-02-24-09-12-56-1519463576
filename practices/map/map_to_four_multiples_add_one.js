'use strict';
var map_to_four_multiples_add_one = function(collection){
  let result=[];
  result=collection.map(function (i){
    return i*4+1;
  });
  console.log(result);
  return result;
};

module.exports = map_to_four_multiples_add_one;
