// 你好，以下是前端笔试题，限时45分钟。完成后通知HR~
// 注意：不要借助百度或他人帮助；也不要复制粘贴哦！
// （前四题需要有答题过程，不要只写答案）

// 1.解释下面这段代码的输出 
// const a = '123'; 
// const b = 123; 
// console.log(a === b); //false 因为===判断的是地址
// console.log(a == b); //false
// console.log(1 < 2 < 3); 
// console.log(3 > 2 > 1); 



// 2.解释下面这段代码的输出 
// for (var i = 0; i < 5; i++) { 
//   (function() { 
//     setTimeout(function() { 
//     console.log(i); 
//   }, i * 1000); 
//   })(i); 
// }



// 3.解释下面这段代码的输出 
// var a = 10; 
// var foo = { 
//   a: 20, 
//   b: function(){ 
//     var a = 30; 
//     return this.a; 
//   },
//   c: () => { 
//     var a = 40; 
//     return this.a; 
//   }, 
// }
// var d = { 
//   a: 50, 
// };
// console.log(a); //10
// console.log(foo.b()); //20
// console.log(foo.c()); //10
// console.log(foo.b.bind(d)()); //50
// console.log(foo.c.bind(d)()); //50 *** 10



// 4.解释下面这段代码的输出 
// console.log('datagrand1'); //datagrand1
// setTimeout(() => { 
//   console.log('datagrand2'); 
// }); 

// const p1 = new Promise(resolve => { 
//   console.log('datagrand3'); //
//   resolve(); 
// }); 

// p1.then(() => { 
//   console.log('datagrand4'); //
// }); 

// console.log('datagrand5'); //

// const p2 = new Promise(resolve => { 
//   console.log('datagrand6'); //
//   resolve(); 
// }); 

// p2.then(() => { 
//   console.log('datagrand7'); //
// }); 
// /**
//  * datagrand1
//  * datagrand5 *** datagrand3
//  * datagrand3 *** datagrand5
//  * datagrand6
//  * datagrand4
//  * datagrand7
//  * datagrand2
//  */





//datagrand1
// datagrand5
// datagrand2
// datagrand3
// datagrand4
// datagrand6
// datagrand7
// 5.实现一个 sum 函数，使其同时满足以下三个调用需求 
// sum(2,3) // 5 
// sum(2)(3) // 5 
// sum(2)(3)(4); // 9




// 6.实现一个 twoSum 函数: 传入源数组和目标数字，返回源数组中两个相加起来等于目标数字的索引 
// twoSum( [2,7,11,15], 9) // [0, 1] ，因为 2 + 7 = 9
// function twoSum(arr,target){
//   arr.sort((a,b) => a-b)
//   let head = 0
//   let rail = arr.length - 1
//   while (head < rail){
//     if (arr[head] + arr[rail] < target){
//       head += 1
//     }else if (arr[head] + arr[rail] > target){
//       rail -= 1
//     }else{
//       // console.log(i,j);
//       return [head,rail]
//     }
//   }
//   return -1
// }
// twoSum( [2,7,11,15], 9) 