'use strict';
function compare(x,y){
  if(x<y)
    return 1;
  else if(x>y)
    return -1;
  else
    return 0;
}
var rank_asc = function(collection){
  let result=[];
  result=collection.sort(compare);
  return result;
};

module.exports = rank_asc;
