export default function defineReactive(obj,key,val){
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