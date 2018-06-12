function count_same_elements(collection) {
  let result=[];
  let arr=[];
  for(let i=0;i<collection.length;i++)
    if(!arr[collection[i]])
    {
      arr[collection[i]]={};
      arr[collection[i]].key=collection[i];
      arr[collection[i]].count=1;
      //console.log(arr[collection[i]]);
    }
    else
      arr[collection[i]].count++;
  for(let i in arr)
    result.push(arr[i]);
  return result;
}

module.exports = count_same_elements;
