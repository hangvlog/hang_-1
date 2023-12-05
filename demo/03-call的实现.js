// https://juejin.cn/post/6977563249650696206
//call ES6
Function.prototype.myCall = function(thisarg,...args){
  thisarg = thisarg || Window 
  thisarg.func = this
  const result = thisarg.func(...args)
  delete thisarg.func
  return result
}
// function myName(){
//   console.log(this.name)
// }
// myName.myCall({name:'777'})

//call ES5
function myCall(thisarg){
  thisarg = thisarg || Window 
  thisarg.func = this
  // 将伪数组转为真数组
  let args = []
  for (let i of arguments){
    args.push(i)
  }

  const result =  eval('thisarg.func('+args+')')
  delete thisarg.func
  return result
} 

//bind
Function.prototype.myBind = function(context, ...args1){
  const that = this
  return function(...args2){
    that.apply(context, [...args1, ...args2])
  }
}
// function myName(){
//   console.log(this.name)
// }
// myName.myBind({name:'666'})()

//apply 
function myCall(thisarg,args){
  thisarg = thisarg || Window 
  thisarg.func = this
  const result = thisarg.func(...args)
  delete thisarg.func
  return result
}


//扩展运算符在函数中的使用
/*
作为函数参数：传为数组
*/
// function test(...args){
//   console.log(...args);
// }
// test(1,2,3)

/*
eval使用
function sum(a,b){
  console.log(a+b);
}
eval('sum(2,3)')
 */

//call
// ES6
Function.prototype.myCall1 = function(thisarg, ...args){
  thisarg = thisarg || Window
  thisarg.func = this
  const result = func(...args)
  delete thisarg.func
  return result;
}
//ES5
Function.prototype.myCall2  = function(thisarg){
  thisarg = thisarg || Window
  thisarg.func = this
  let args = []
  for (let i = 1; i < arguments.length;i++){
    args.push('arguments['+i+']')
  }
  const result = eval('thisarg.func('+args+')')
  delete thisarg.func
  return result
}
//test
// function fun() {
//   console.log(this.name, arguments)
// }
// let obj = { name: 'clying' }
// fun.myCall2(obj, 'deng', 'deng')

//apply
//ES5
Function.prototype.myApply1 = function(thisarg,argsArr) {
  thisarg = thisarg || Window
  thisarg.func = this
  let args = []
  for (let i = 0; i < argsArr.length; i++){
    args.push('argsArr['+i+']')
  }
  const result = eval('thisarg.func('+args+')')
  delete thisarg.func
  return result
}
//
// function fun() {
//   console.log(this.name, arguments)
// }
// let obj = { name: 'clying' }
// fun.myApply1(obj, ['deng', 'deng'])

Function.prototype.myBind1 = function(thisarg,...args1){
  const that = this
  return function(...args2){
    return that.apply(thisarg,[...args1,...args2])
  }
}

function test03(){
  const obj = {
    name: 'Alice',
    greeting: function(city, country) {
      console.log(`Hello, my name is ${this.name} and I am from ${city}, ${country}`);
    }
  };
  const person = {
    name: 'Bob'
  };
  const person1 = {
    name: 'person1'
  };
  // const boundGreeting = obj.greeting.bind(person, 'London','UK');
  // boundGreeting(); // 输出 "Hello, my name is Bob and I am from London, UK"
  const boundGreeting = obj.greeting.myBind1(person, 'London');
  const boundGreeting2 = boundGreeting.myBind1(person1, 'UK')
  boundGreeting2()
  // boundGreeting('UK'); // 输出 "Hello, my name is Bob and I am from London, UK"
}
test03()