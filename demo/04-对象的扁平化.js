//类似于数组/对象的深拷贝
//不同点在于递归的内容不同 - 挺巧妙的

// 通用方法
// function flatObj(obj){
//   let res = {}
//   function flat(obj){
//     for (let key in obj) {
//       if (Object.prototype.toString.call(obj[key]) === '[object Object]'){
//         flat(obj[key])
//       }else{
//         res[key] = obj[key]
//       }
//     }
//   }
//   flat(obj)
//   return res
// }
let obj = {
  a:[1,2],
  b:2,
  c:{
    g:3,
    d:4,
    e:{
      h:5,
      f:6
    }
  }
}
// console.log(flatObj(obj));

// //数组的扁平化
// function flatArr(arr){
//   let ans = []
//   function flat(arr){
//     for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] !== 'Object'){
//         ans.push(arr[i])
//       }else{
//         flat(arr[i])
//       }
//     }
//   }
//   flat(arr)
//   return ans
// }
// // const arr = [1,2,3,[4,5,[6,7]]]
// // console.log(flatArr(arr));

// //数据扁平化另外方法
// function myFlatArr2(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(myFlatArr2(arr[i]));
//     } else {
//       result.push(arr[i])
//     }
//   }
//   return result
// }
// // console.log(myFlatArr2(arr));


//数组扁平化实现官方的办法
function myFlat3(arr,depth) {
  // let maxDepth = (function(arr){
    
  // })()
  depth = depth || 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      result = result.concat(myFlat3(arr[i]),depth - 1);
    } else {
      result.push(arr[i])
    }
  }
  return result
}
const arr = [1,2,3,[4,5,[6,7]]]
console.log(myFlat3(arr));
console.log(myFlat3(arr,0));
console.log(myFlat3(arr,1));
console.log(myFlat3(arr,2));
// reduce实现


// //对象和数组的扁平化
function flatArrOrObj(obj){
  let res = obj instanceof Object ? {} : []
  function flat(obj){
    for (let key in obj) {
      if (typeof obj[key] === 'object'){
        flat(obj[key])
      }else{
        Array.isArray(obj[key]) ? res.push(obj[key]) : res[key] = obj[key]
        // res[key] = obj[key]
      }
    }
  }
  flat(obj)
  return res
}
console.log(flatArrOrObj(obj));
console.log(flatArrOrObj(arr));
debugger
// //伪数组

//完全版本
// let obj = {
//   a:[1,2],
//   b:2,
//   c:{
//     g:3,
//     d:4,
//     e:{
//       h:5,
//       f:6
//     }
//   }
// }
// Object.prototype.flatObj = function(){
//   let ans = {}
//   function flat(obj){
//     for (let key in obj){
//       if (Object.prototype.toString(obj[key]) === 'object Object'){
//         return flat(obj[key])
//       }else{
//         ans[key] = obj[key]
//       }
//     }
//   }
//   flat(this)
//   return ans
// }
// Object.defineProperty(Object.prototype, 'flatObj', {
//   enumerable: false
// });
// console.log(obj);
// console.log(obj.flatObj());

//数组的扁平化
