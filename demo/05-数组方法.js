//reduce
// Array.prototype.reduce1 = function(callback,initialValue){
//   // let arr = this
//   let i = 0
//   if (!initialValue){
//     initialValue = this[0]
//     i++
//   } 

//   for (i;i<this.length;i++){
//     initialValue = callback(initialValue, this[i]);
//   }
//   return initialValue
// }

// var array = [1, 2, 3, 4, 5];
// let tmp = array.reduce1(function (a, b) {
//   return a + b;
// }, 0); // 输出15
// console.log(tmp);

//求嵌套数组的最大深度
//求数组深度
function getMaxDepth(arr){
  let depth = 1;
  let max = 1;
  for (let k of arr){
    if (Array.isArray(k)){
      max = getMaxDepth(k) + 1
    }else{
      max = Math.max(max, depth)
    }
  }
  return max;
}
// console.log(getMaxDepth([[1], [[1, 2]], [[[[1, 2, 3]]]]]));
// console.log(getMaxDepth([1,2,[3]]));
// console.log(getMaxDepth([[[[2]]]]));

function getMaxDepth1(arr){
  // let max = 1
  let max = 1
  let depth = 1
  for (let i of arr){
    if (Array.isArray(i)){
      depth = 1 + getMaxDepth1(i)
    }else{
      max = Math.max(depth,max)
    }
  }
  return max
}
// console.log(getMaxDepth1([[1], [[1, 2]], [[[[1, 2, 3]]]]]));
// console.log(getMaxDepth1([1,2,[3]]));

const arrayDepth = function (arr) {
  let count = 0;
  // let res = [];

  const help = function (arr, dep) {
    for (let val of arr) {
      if (val instanceof Array) {
        help(val, dep + 1);
      } else {
        // res.push(val);
        count = Math.max(count, dep)
      }
    }
  }
  help(arr, 1);
  return count;
}
// console.log(arrayDepth([[1], [[1, 2]], [[[[1, 2, 3]]]]]));
