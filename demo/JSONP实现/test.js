// function once(func) {
//   let revoke = false
//   let ret = null
//   return function() {
//       if (!revoke) {
//           ret = func.apply(this, arguments)
//           revoke = true
//       }
//       return ret
//   }
// }
// // 测试
// function test() {
//   console.log('test')
//   // return 1
// }
// let o = once(test)
// console.log(o()) // test 1
// console.log(o()) // 1
// console.log(o()) // 1
// debugger
function sum(...args) {
  const f = (...rest) => sum(...args, ...rest);
  f.valueOf = () => args.reduce((x, y) => x + y, 0);
  // f.valueOf = function(){
  //   return 9
  // }
  return f;
}
console.log(sum(12).valueOf());
console.log(sum(12,12).valueOf());
console.log(sum(12)(12).valueOf());
console.log(sum(12) * sum(13));
function sum(...args) {
  const foo = (...rest) => sum(...args, ...rest);
  foo.toString = () => args.reduce((x, y) => x + y, 0);
  return foo;
}
console.log(sum(12));  // 输出：12
console.log(sum(12, 12));  // 输出：24
console.log(sum(12) + sum(13));  // 输出：25

