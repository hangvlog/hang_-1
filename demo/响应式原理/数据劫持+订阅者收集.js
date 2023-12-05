//做数据劫持的函数 将某个对象的某个属性 进行数据劫持
//数据劫持：当我们访问obj.a时，打印get property a并返回1，
// obj.a = 2设置新的值时，打印set property a -> 2。
// 这相当于我们自定义了obj.a取值和赋值的行为，使用自定义的getter和setter来重写了原有的行为，这也就是数据劫持的含义。
// function defineReactive(data, key, value = data[key]) {
//   Object.defineProperty(data, key, {
//     get: function reactiveGetter() {
//       return value
//     },
//     set: function reactiveSetter(newValue) {
//       if (newValue === value) return
//       value = newValue
//     }
//   })
// }
// // 这个Observer类用于为我们进行数据劫持的对象所有属性添加getheset方法
// class Observer {
//   constructor(value) {
//     this.value = value
//     this.walk()
//   }
//   walk() {
//     Object.keys(this.value).forEach((key) => defineReactive(this.value, key))
//   }
// }
// const obj = { a: 1, b: 2 }
// const test01 = new Observer(obj)
// console.log(test01);


//案例一 observe函数用于递归劫持整个对象 Observer对象用于遍历劫持当前对象的所有属性
//递归进行数据劫持
// 入口函数
function observe(data) {
  if (typeof data !== 'object') return
  // 调用Observer
  new Observer(data)
}
class Observer {
  constructor(value) {
    this.value = value
    this.walk()
  }
  walk() {
    // 遍历该对象，并进行数据劫持
    Object.keys(this.value).forEach((key) => defineReactive(this.value, key))
  }
}
function defineReactive(data, key, value = data[key]) {
  // 如果value是对象，递归调用observe来监测该对象
  // 如果value不是对象，observe函数会直接返回
  observe(value)
  Object.defineProperty(data, key, {
    get: function reactiveGetter() {
      return value
    },
    set: function reactiveSetter(newValue) {
      if (newValue === value) return
      value = newValue
      observe(newValue) // 设置的新值也要被监听
    }
  })
}
const obj = {
  a: 1,
  b: {
    c: 2
  }
}
observe(obj)
console.log(obj);