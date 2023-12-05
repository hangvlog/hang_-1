// 入门题
// 写一个sum函数，让sum(2)(3)返回5
function sum (a) {
  return function getSum(b){
    console.log(a+b);
  }
}
// sum(1)(2)

//初步构造柯里化的结构
// function add () {
//   //let args = arguments;//用于获取第一个括号里的参数
//   // 因为arguments是类数组结构，因此上述代码还需要进行改进，下面这行才是正确的
//   let args = Array.prototype.slice.call(arguments);
//   console.log('1',arguments);
//   let inner = function () {
//     console.log('2',arguments);
//     args.push(...arguments);
//   }
//   return inner;
// }
// add(1)
// function add () {
//   //let args = arguments;//用于获取第一个括号里的参数
//   // 因为arguments是类数组结构，因此上述代码还需要进行改进，下面这行才是正确的
//   let args = Array.prototype.slice.call(arguments);
//   console.log('1',args);

//   let inner = function () {
//     args.push(...arguments);// arguments默认就为函数的参数，即使我们没有列出形参
//     console.log('2',arguments,args);
//     return inner;
//   }
//   inner.toString = function () {
//     return args.reduce((pre,cur) => pre + cur);
//   }

//   return inner;
// }
// function curry(fn, ...args) {
//   return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
// }

//将一个函数柯里化
function test02(){
  function sum(a, b, c) {
    return a + b + c;
  }
  function curry(fn) {
    return function currify() {
      const args = Array.prototype.slice.call(arguments);
      return args.length >= fn.length ?
        fn.apply(null, args) :
      currify.bind(null, ...args);
    }
  }
  
  var currySum = curry(sum);
  console.log(currySum(1)(2)(3));
  console.log(currySum(1, 2)(3));
  console.log(currySum(1)(2, 3));
  // console.log(currySum(1)(2)(3)(4));

}
test02()

