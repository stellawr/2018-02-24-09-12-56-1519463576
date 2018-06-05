'use strict';

function get_letter_interval(number_a, number_b) {
  let result=[];
  let result1=['a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t', 'u', 'v', 'w', 'x','y','z'];
  if(number_b>number_a)
  {
    for(let i=number_a;i<=number_b;i++)
    {
      if(i>=0&&i<=26)
      {
        result.push(result1[i-1]);
      }
    }
  }

  if(number_b<number_a)
  {
    for(let i=number_a;i>=number_b;i--)
    {
      if(i>=0&&i<=26)
      {
        result.push(result1[i-1]);
      }
    }
  }

  if(number_b==number_a)
  {
    if(number_a>=0&&number_a<=26)
    {
      result.push(result1[number_a-1]);
    }
  }
  return result;
}

module.exports = get_letter_interval;
