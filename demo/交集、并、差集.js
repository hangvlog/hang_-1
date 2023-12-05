const arr1 = [1,2,3,5]
const arr2 = [1,2,3,6,8,9,10,11,12,13,14,15]
function getUnion(arr1,arr2){
  for (let i = 0; i < arr1.length; i++){
    if (!arr2.includes(arr1[i])){
      arr2.push(arr1[i]);
    }
  }
  return arr2;
}
// console.log(getUnion(arr1,arr2));

function getIntersection(arr1,arr2){
  const arr = []
  arr1.forEach((item)=>{
    if (arr2.includes(item)) arr.push(item)
  })
  return arr;
}

// console.log(getIntersection(arr1,arr2));

function getSubb(arr1,arr2){
  const arr = []
  arr1.forEach((item)=>{
    if (!arr2.includes(item)) arr.push(item)
  })
  return arr;
}
console.log(getSubb(arr1,arr2));