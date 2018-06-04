'use strict';

function get_integer_interval(number_a, number_b) {
  let result=[];
  if(number_b>number_a)
  {
    for(let i=number_a;i<=number_b;i++)
      result.push(i);
  }
  if(number_b<number_a)
  {
    for(let i=number_a;i>=number_b;i--)
      result.push(i);
  }
  if(number_b==number_a)
  {
    result.push(number_b);
  }
  return result;
}

module.exports = get_integer_interval;

