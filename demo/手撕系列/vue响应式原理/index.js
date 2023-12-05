// console.log('555');
//defineReactive作用是提供了一个闭包的环境
function defineReactive(obj,key,val){
  // console.log(arguments.length);
  if (arguments.length === 2)  val = obj[key]
  Object.defineProperty(obj,key,{
    //可枚举，配置
    enumerable:true,
    configurable:true,
    get(){
      return val
    },
    set(newValue){
      if (val === newValue) return
      val = newValue
    }
  })
}

// import defineReactive from './defineReactive.js'
console.log(defineReactive);
obj = {

}
defineReactive(obj,'a',10)
console.log(obj);
console.log(obj.a);
obj.a = 200
console.log(obj.a);
