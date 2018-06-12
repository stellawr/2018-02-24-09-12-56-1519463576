function count_same_elements(collection) {
  let result=[];
  let arr=[];
  for(let i=0;i<collection.length;i++)
    if(!arr[collection[i]])
    {
      arr[collection[i]]={};
      arr[collection[i]].name=collection[i];
      arr[collection[i]].summary=1;
    }
    else
      arr[collection[i]].summary++;
  for(let i in arr) {
    /*    if(i.length>1){
          console.log(i)
         delete arr[i];
          }
      }*/
    if (i.length > 1) {
      let c=0;
      let k = i.slice(0,1);
      if(i.length==3)
        c = i.slice(2);
      if(i.length==4)
         c = i.slice(2,3);
      if(i.length==5)
         c = i.slice(2,4);
      arr[i].name = k;
      arr[i].summary=Number(c);
      for (let j in arr)
        if (j == k ) {
          arr[j].summary = arr[j].summary + Number(c);
          delete arr[i];
        }

        }

    }
/*    else*/
  for(let i in arr)
      result.push(arr[i]);
   //console.log(result);
  return result;
}
var collection = [
  "a", "a", "a",
  "e", "e", "e", "e", "e", "e", "e",
  "h", "h", "h", "h", "h", "h", "h[3]", "h", "h",
  "t", "t-2", "t", "t", "t", "t", "t", "t", "t[10]",
  "f", "f", "f", "f", "f", "f", "f", "f", "f",
  "c:8",
  "g", "g", "g", "g", "g", "g", "g",
  "b", "b", "b", "b", "b", "b",
  "d-5"
];
count_same_elements(collection)
module.exports = count_same_elements;
