'use strict';

function get_integer_interval_2(number_a, number_b) {
  let result=[];
  if(number_a<number_b){
    let j=0;
  for( let i = number_a; i<=number_b; i++)
    if(i%2==0)
    {result[j]=i;
      j++;
    }
  }
  if(number_a>number_b){
    let j=0;
    for(let i=number_a;i>=number_b;i--)
      if(i%2==0)
      { result[j]=i;
        j++;}
  }
  if(number_a==number_b && number_a%2==0)
    result=[number_a];
  return result;
}

module.exports = get_integer_interval_2;
