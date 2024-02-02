// const arr = [1,2,3,[4,5,[6,7]]]

// // 实现arr.flat(Infinity)
// Array.prototype.myFlat = function(){
//   // console.log(this);
//   const arr = this;
//   let ans = [];
//   function flatHelp(arr){
//     for (let i in arr){
//       if (Array.isArray(arr[i])){
//         flatHelp(arr[i])
//       }else{
//         ans.push(arr[i])
//       }
//     }
//   }
//   flatHelp(arr)
//   return ans;
// }
// const arr2 = arr.myFlat();
// console.log(arr2);

/**
 * 数组基本属性
 */
// let a = new Array(1)
// a[2] = 100
// a.length = 10
// console.log(a);
// console.log(a[2]);
// console.log(a.length);
// console.log(a[9]);
// for (let i of a) console.log(i);
// console.log("--------------------------------");
// a = [1,2,3]
// a.length = 4
// a.forEach(element => console.log(element));
// // 1
// // 2

// 一个简单的对象，被数组的每个空槽所引用
// const arr = Array(3).fill({}); // [{}, {}, {}]
// arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]

// console.log(arr);
// const nums = [0,1,0,3,12]
// var moveZeroes = function(nums) {
//   let i = 0,j = 0,len = nums.length
//   while (i < len && j < len) {
//     while (nums[i] != 0 && i < len){
//       i++;
//     }
//     while (j < len && j < len) {
//       j++;
//     }
//     [nums[i],nums[j]] = [nums[j],nums[i]]
//   }
// };

// console.log(666);
// const handleStartRecord = ({ flag = false, isFirst = false }) => {
//   console.log(flag, isFirst);
// }
// handleStartRecord({isFirst:true})
// debugger

const a = {
  b:12,
  c:16
}
const b = {...a,b:55}
console.log(b);
debugger