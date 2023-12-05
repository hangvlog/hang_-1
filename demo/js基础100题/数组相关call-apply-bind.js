// 参考部分https://juejin.cn/post/6977563249650696206
// 手写 call 函数 ES6版本
Function.prototype.myCall = function (thisarg = Window, ...args) {
  thisarg.func = this
  const result = thisarg.func(...args)
  delete thisarg.func
  return result
  /**
   * 给传入的this指向的对象【thisarg】添加需要被绑定的方法
   * 执行这个方法：由于上一步为thisarg添加了方法，直接执行方法得到的就是this指向被修改之后的
   */
}
// 手写 call 函数 ES5版本
Function.prototype.myCall1 = function (thisarg) {
  var thisarg = thisarg || Window
  // console.log([...arguments])
  var args = []
  for (let i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }
  // [arguments[1],arguments[2]]
  thisarg.func = this
  // thisarg.func(arguments[1],arguments[2])
  var result = eval('thisarg.func(' + args + ')')
  // console.log(result);
  delete thisarg.func
  return result
}
function test01 () {
  function myName () {
    console.log(this.name)
  }
  console.log('标准答案');
  myName.call({ name: '777' }, 555, 656)
  myName.myCall({ name: '777' }, 555, 656)
  myName.myCall1({ name: '777' }, 555, 656)
}
// test01()


// 手写 apply 函数 ES5版本
Function.prototype.myApply = function (thisarg, argsArr) {
  thisarg = thisarg || Window
  thisarg.func = this
  let arr = []
  for (let i = 0; i < argsArr.length; i++) {
    arr.push('argsArr[' + i + ']')
  }
  var result = eval('thisarg.func(' + arr + ')')
  delete thisarg.func
  return result
}
// 手写 apply 函数 ES6版本
Function.prototype.myApply1 = function (thisarg, args) {
  thisarg = thisarg || Window
  thisarg.func = this
  var result = thisarg.func(...args)
  delete thisarg.func
  return result
}
function test02 () {
  function fun () {
    console.log(this.name, arguments)
  }
  let obj = { name: '666' }
  // fun.apply(obj, ['deng', 'deng'])//666 Arguments(2) ['deng', 'deng', callee: ƒ, Symbol(Symbol.iterator): ƒ]
  console.log('标准答案');
  fun.apply(obj, ['deng', 'deng'])
  fun.myApply(obj, ['deng', 'deng'])
  fun.myApply1(obj, ['deng', 'deng'])
}
// test02()


// 手写 bind 函数 ES6版本
Function.prototype.myBind1 = function (thisarg, ...args1) {
  let that = this
  return function (...args2) {
    that.apply(thisarg, [...args1, ...args2])
  }
}
function test03(args){
  console.log(...args);
}
test03([1,2,3])

// 手写 bind 函数 ES6版本

