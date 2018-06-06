'use strict';
var map_to_three_multiples = function(collections){
  let result=[];
  result=collections.map(function (i){
    return i*3;
  });
  console.log(result);
  return result;
};

module.exports = map_to_three_multiples;
