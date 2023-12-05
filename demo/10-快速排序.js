// const arr3 = [2,3,5,1,6,4]
// function quickSort(arr){
//   if (arr.length <= 1) return arr
//   //定义一个基准值
//   let baseValue = arr[0];
//   const left = []
//   const right = []
//   for (let i = 1; i < arr.length; i++){
//     if (arr[i] <= baseValue){
//       left.push(arr[i])
//     }else{
//       right.push(arr[i])
//     }
//   }
//   return [...quickSort(left),baseValue,...quickSort(right)]
// }
// console.log(quickSort(arr3));

const arr = [1,2,3,1]
Array.prototype.myQuickSort = function(){
  const arr = this
  let baseValue = arr[0]
  let leftArr = [],rightArr = []
  for (let i of arr){
    if (i < baseValue){
      leftArr.push(i)
    }else{
      rightArr.push(i)
    }
  }
  return [...leftArr.myQuickSort(),...rightArr.myQuickSort()]
}
console.log(arr.myQuickSort());