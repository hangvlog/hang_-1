//手撕new关键字
function myNew(targetObj,...args) {
  const obj = Object.create(null)
  Object.setPrototypeOf(obj,targetObj.prototype)
  const ans = targetObj.apply(obj,args)
  return ans instanceof Object ? ans : obj
}

function test01(){
  // 使用实例
  function Demo(name) {
    this.name = name;
  }
  let test = myNew(Demo, "useNew");
  console.log(test); // Demo {name: 'useNew'}
  console.log(test.__proto__ === Demo.prototype); // true
}
// test01()

//手撕继承
// 01 原型链继承 一个对象的原型设置为另外一个对象，那么这个对象就可以访问另外一个对象的属性

// function Father(name){
//   // this.name = "father";
//   this.name = name || "father";
// }
// Father.prototype.sayHi = function(){
//   // console.log('hi');
//   return this.name
// }

// function Son(){
//   Father.apply(this, arguments)
// }

// // Object.setPrototypeOf(Son, Father.prototype)
// // Son.prototype = Object.create(Father.prototype) //0
// // Object.setPrototypeOf(Son,Father.prototype)
// // Son.prototype = new Father() //1
// // Son.prototype = Father.prototype //1
// Son.prototype.constructor = Son

// function test02(){
//   const son = new Son("son")
//   console.log(son.name);
//   console.log(son.sayHi());
// }

// test02()




//02 最终继承
function Father(name){
  this.name = name || "father";
}
Father.prototype.getName = function(){
  return this.name;
}
function Son(...args){
  Father.apply(this, args);
}

// Son.prototype = new Father();1
// Son.prototype = Father.prototype;1
//----------------------------------------------------------------
Son.prototype = Object.create(Father.prototype)
// Object.setPrototypeOf(Son,Father.prototype) //setPrototypeOf只能用于实例对象

Son.prototype.Constructor = Son
//----------------------------------------------------------------replace
// Son.prototype = Object.create(Father.prototype,{
//   constructor:{value: Son}
// })

// const son = new Son("son");
// console.log(son.getName());

//Object.create深度理解

// const obj = {
//   name: 'nordon'
// };

// const newObj = Object.create(obj);
// console.log(newObj.name);
// console.log(newObj.__proto__ === obj); //true
// console.log(newObj.prototype == obj.__proto__); //false
// console.log(newObj.prototype === obj); //false

//手撕Object.create
Object.prototype.myCreate = function (proto, propertyObject = undefined) {
  if (propertyObject === null) {
    // 这里没有判断propertyObject是否是原始包装对象
    throw 'TypeError'
  } else {
    function Fn () {}
    Fn.prototype = proto
    const obj = new Fn()

    if (propertyObject !== undefined) {
      Object.defineProperties(obj, propertyObject)
    }
    if (proto === null) {
      // 创建一个没有原型对象的对象，Object.create(null)
      obj.__proto__ = null
    }

    return obj
  }
}


const obj = Object.create(Object.prototype,{
  // constructor:{value: Son}
  name: {
    value: 'Son'
  }
})
// console.log(obj.name);
// console.log(obj.hasOwnProperty('name'));
// 可见Object.create的第二个参数是添加到新对象本身上，而不是原型对象上【后知后觉，既然可以配置
// constructor: {
//   value: Son,
//   writable: true,
//   configurable: true
// },这些属性，就不像是在原型对象上添加】



