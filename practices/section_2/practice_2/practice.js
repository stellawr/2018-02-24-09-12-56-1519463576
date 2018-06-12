function count_same_elements(collection) {
  let result=[];
  let arr=[];
  for(let i=0;i<collection.length;i++)
    if(!arr[collection[i]])
    {
      arr[collection[i]]={};
      if(collection[i].split('-').length==2)
      {
        arr[collection[i]].key=collection[i].split('-')[0];
        arr[collection[i]].count=Number(collection[i].split('-')[1]);
      }
      else
      {
        arr[collection[i]].key=collection[i];
        arr[collection[i]].count=1;
      }
    }
    else
      arr[collection[i]].count++;
  for(let i in arr)
    result.push(arr[i]);
  return result;
}

module.exports = count_same_elements;
