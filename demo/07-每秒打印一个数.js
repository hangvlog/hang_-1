// 每隔一秒打印一个数
// const arr = [1, 2, 3]
// arr.reduce((prev,now)=>{
//   return prev.then(()=>{
//     return new Promise(resolve => {
//       setTimeout(()=>resolve(console.log(now)),1000)
//     })
//   })
// },Promise.resolve())

//利用settimeout的不同定时时间实现 【不建议】
// let arr = [1, 2, 3, 4, 5]
// function arrConsole(arr){
//   for (let i = 0; i < arr.length; i++){
//     setTimeout(()=>{console.log(arr[i])},1000 * i)
//   }
//   // resolve(6)
//   const f = () => console.log(6);
//   Promise.resolve().then(f);
// }
// arrConsole(arr)

//利用setInterval的不同定时时间实现 【不建议】
// const arr = [1, 2, 3, 4, 5];
// function outputWithDelay(arr) {
//   let index = 0;
//   return new Promise((resolve, reject) => {
//     const intervalId = setInterval(() => {
//       if (index < arr.length) {
//         console.log(arr[index]);
//         index++;
//       } else {
//         clearInterval(intervalId);
//         resolve();
//       }
//     }, 1000);
//   });
// }

// outputWithDelay(arr).then(() => {
//   console.log('666');
// });

//error 常见问题之透传 见https://juejin.cn/post/6844904077537574919#heading-51 
// promises = []
// for (let i of arr){
//   promises.push(new Promise(
//     (resolve)=>{
//       setTimeout(()=>{
//         console.log(i);
//         resolve()
//       },1000)
//     }
//   ))
// }

//ai实现的输出之后再输出
// function printNumbers(numbers) {
//   let i = 0;
//   const printNextNumber = () => {
//     if (i < numbers.length) {
//       console.log(numbers[i]);
//       i++;
//       return new Promise(resolve => setTimeout(
//         resolve, 1000))
//         .then(printNextNumber);
//     } else {
//       // console.log(6);
//       return Promise.resolve();
//     }
//   };
//   return printNextNumber();
// }

// printNumbers([1, 2, 3, 4, 5]).then(() => {
//   console.log('All done!');
// });

//借助数组的reduce和flag判断实现每隔一秒打印一个数字【目前想到的最好的解决方案】
// const arr = [1, 2, 3, 4, 5]
// var flag = false;
// arr.reduce((prev,item)=>{
//   return prev.then(()=>{
//     return new Promise(resolve=>{
//       setTimeout(()=>{
//         if (item === arr[arr.length-1]) flag = true;
//         console.log(item)

//         if (flag === true){
//           setTimeout(()=>{
//             console.log("666");
//           },1000)
//         }

//         resolve()
//       },1000)
//     })
//   })
// },Promise.resolve())










