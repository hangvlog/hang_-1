//手写Object.create
// 将传入的对象作为原型
function test01(type){
  const test = function(){};
  test.prototype = type;
  return new test();
}
// console.log(test01(Array)); // { constructor: ƒ, __proto__: {…} }

//手写 instanceof 方法
function myInstanceof(left, right) {
  let prototype = right.prototype;
  let proto = Object.getPrototypeOf(left);
  // console.log(prototype);
  while(true){
    if (proto === prototype){
      return true
    }
    proto = Object.getPrototypeOf(proto);
    if (proto === null){
      return false
    }
  }
}
// console.log(myInstanceof({},Array));//false
// console.log(myInstanceof([],Array));//true
// console.log(myInstanceof([],Object));//true
// console.log(myInstanceof(function(){},Object));//true
// console.log(myInstanceof(function(){},Array));//false




//手写 new 操作符