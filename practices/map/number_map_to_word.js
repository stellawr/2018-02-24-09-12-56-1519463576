'use strict';
function map_letter(i)
{ let result;
  let result1=['a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t', 'u', 'v', 'w', 'x','y','z'];
  if(i>=0&&i<=26)
  {
    result=result1[i-1];
  }
  return result;
}
var number_map_to_word = function(collection){
  let result=[];
  result=collection.map(map_letter);
  return result;
};

module.exports = number_map_to_word;
