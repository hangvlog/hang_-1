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


//不是用valueof方法
// function sum(...args) {
//   const foo = (...rest) => sum(...args, ...rest);
//   foo.toString = () => args.reduce((x, y) => x + y, 0);
//   return foo;
// }
// console.log(sum(12));  // 输出：12
// console.log(sum(12, 12));  // 输出：24
// console.log(sum(12) + sum(13));  // 输出：25