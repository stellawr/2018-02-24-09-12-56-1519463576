'use strict';

function median_to_letter(collection) {
  let result_letter=null;
  let result=0;
  function compare(x,y){
    if(x<y)
      return 1;
    else if(x>y)
      return -1;
    else
      return 0;
  }
  let arr1=collection.sort(compare);
  if(arr1.length%2==0)
    result=Math.ceil((arr1[arr1.length/2-1]+arr1[arr1.length/2])/2);
  else
    result=arr1[Math.ceil(arr1.length/2)];

  let result1=['a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t', 'u', 'v', 'w', 'x','y','z'];
  if(result>=0&&result<=26)//Math.floor(i/26)==0 ||i%26==0
  {
    result_letter=result1[i-1];
  }
  else if(result%26!=0)
  {
    result_letter=result1[Math.floor((result/26)-1)].concat(result1[result%26-1]);
  }
  else
    result_letter=result1[result/26-2].concat(result1[25]);
  return result_letter;
}

module.exports = median_to_letter;
