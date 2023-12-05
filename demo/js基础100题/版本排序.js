// 有一组版本号为：[“1.45.0”, “1.5”, “6”, “2.3.4.5”]，将其排序后得到：[ ‘1.5’, ‘1.45.0’, ‘2.3.4.5’, ‘6’ ]
let versions = ["1.45",'1.45.1', "1.5", "6", "2.3.4.5"];
versions = versions.sort((a, b) => {
  let arr1 = a.split(".");
  let arr2 = b.split(".");
  let i = 0
  while (true) {
    let a1 = arr1[i]
    let b1 = arr2[i]
    i++
    if (a1 === undefined || b1 === undefined){
      return a.length - b.length
    }
    if (a1 === b1) continue
    return a1 - b1
  }
})
// console.log(versions); //[ '1.5', '1.45.0', '2.3.4.5', '6' ]

// // '1' - undefined //NaN false


//巧妙的方法 但仅限于版本号是一位的情况下
// 期望中版本号'0.302.1'应该大于'0.5.1'，但实际比较的结果则是相反的，原因就在于逐位比较
// const arr = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5'];
// arr.sort((a, b) => a > b ? 1 : -1);
// console.log(arr); // ['4.3.5','4.3.4.5','2.3.3','0.302.1','0.1.1']



// 循环比较法 适用性最强
// arr.sort((a, b) => {
//   let i = 0;
//   const arr1 = a.split('.');
//   const arr2 = b.split('.');

//   while (true) {
//     const s1 = arr1[i];
//     const s2 = arr2[i++];

//     if (s1 === undefined || s2 === undefined) {
//       return arr2.length - arr1.length;
//     }

//     if (s1 === s2) continue;

//     return s2 - s1;
//   }
// });

// console.log(arr)

// var compareVersion = function(version1, version2) {
//   let arr1 = version1.split('.')
//   let arr2 = version2.split('.')
//   let m = arr1.length,n = arr2.length
//   let i = 0,j = 0
//   while(i < m || j < n){
//       let num1 = 0,num2 = 0
//       if (i < m){
//           num1 = Number.parseInt(arr1[i++])
//       }
//       if (j < n){
//           num2 = Number.parseInt(arr2[j++])
//       }
//       if (num1 !== num2) return num1 > num2 ? 1 : -1
//   }
//   return 0
// }
var compareVersion = function(version1, version2) {
  let m = version1.length,n = version2.length
  let i = 0,j = 0
  while(i < m || j < n){
      let num1 = 0,num2 = 0
      while(i < m && version1[i] !== '.'){
          num1 = num1 * 10 + version1[i].charCodeAt(0) - 97
      }
      while(j < n && version2[j] !== '.'){
          num2 = num2 * 10 + version2[i].charCodeAt(0) - 97
      }
      if (num1 > num2) return 1
      else if (num1 < num2) return -1
      i++
      j++
  }
  return 0
}
console.log(compareVersion('1.5', '1.45.0')); //-1
console.log(compareVersion('1.01', '1.001'));//0
console.log(compareVersion('1.01.1', '1.001'));//1