function create_updated_collection(collection_a, object_b) {

  let arr_c=[];
  let arr=[];
  for(let i=0;i<collection_a.length;i++)
    if(!arr[collection_a[i]])
    {
      arr[collection_a[i]]={};
      if(collection_a[i].split('-').length==2)
      {
        arr[collection_a[i]].key=collection_a[i].split('-')[0];
        arr[collection_a[i]].count=Number(collection_a[i].split('-')[1]);
      }
      else
      {
        arr[collection_a[i]].key=collection_a[i];
        arr[collection_a[i]].count=1;
      }
    }
    else
      arr[collection_a[i]].count++;
  for(let i in arr)
    arr_c.push(arr[i]);

  for(let i=0;i<arr_c.length;i++)
    for(let j=0;j<object_b.value.length;j++)
      if(arr_c[i].key==object_b.value[j])
        if(arr_c[i].key/3!=0)
          arr_c[i].count=arr_c[i].count-Math.floor(arr_c[i].count/3);

  return arr_c;
}

module.exports = create_updated_collection;
