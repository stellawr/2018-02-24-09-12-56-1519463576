function create_updated_collection(collection_a, object_b) {
  let arr=[];
  let collection_c=[];
  for(let i=0;i<collection_a.length;i++)
    if(!arr[collection_a[i]])
    {
      arr[collection_a[i]]={};
      arr[collection_a[i]].key=collection_a[i];
      arr[collection_a[i]].count=1;
    }
    else
      arr[collection_a[i]].count++;
  for(let i in arr)
    collection_c.push(arr[i]);

  for(let i=0;i<collection_c.length;i++)
    for(let j=0;j<object_b.value.length;j++)
      if(collection_c[i].key==object_b.value[j])
        if(collection_c[i].key/3!=0)
          collection_c[i].count=collection_c[i].count-Math.floor(collection_c[i].count/3);
  return collection_c;
}

module.exports = create_updated_collection;
