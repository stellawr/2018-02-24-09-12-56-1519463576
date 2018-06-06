'use strict';
function map_letter(i)
{ let result;
  let result1=['a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t', 'u', 'v', 'w', 'x','y','z'];
  if(i>=0&&i<=26)//Math.floor(i/26)==0 ||i%26==0
  {
    result=result1[i-1];
  }
  else if(i%26!=0)
  {
    result=result1[Math.floor((i/26)-1)].concat(result1[i%26-1]);
  }
  else
    result=result1[i/26-2].concat(result1[25]);
  return result;
}


var number_map_to_word_over_26 = function(collection){
  let result=[];
   result=collection.map(map_letter);
   return result;
 }


module.exports = number_map_to_word_over_26;
