'use strict';

function get_letter_interval_2(number_a, number_b) {
  let result=[];
  let result1=['a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t', 'u', 'v', 'w', 'x','y','z'];
  if(number_b>number_a)
  {
    //console.log(Math.floor(19/26));
    for(let i=number_a;i<=number_b;i++)
    {
      if(i>=0&&i<=26)//Math.floor(i/26)==0 ||i%26==0
        {
          result.push(result1[i-1]);
        }
      else if(i%26!=0)
      {
        result.push(result1[Math.floor((i/26)-1)].concat(result1[i%26-1]));
      }
      else
        result.push(result1[i/26-2].concat(result1[25]))
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
      else if(i%26!=0)
      {
        result.push(result1[Math.floor((i/26)-1)].concat(result1[i%26-1]));
      }
      else
        result.push(result1[i/26-2].concat(result1[25]))
    }
  }

  if(number_b==number_a)
  {
    if(number_a>=0&&number_a<=26)
    {
      result.push(result1[number_a-1]);
    }
    else if(number_a%26!=0)
    {
      result.push(result1[Math.floor((number_a/26)-1)].concat(result1[number_a%26-1]));
    }
    else
      result.push(result1[number_a/26-2].concat(result1[25]))
  }
  return result;
}
// get_letter_interval_2(20,53);

module.exports = get_letter_interval_2;

