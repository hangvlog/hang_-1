//get方法的作用就是获取自己依赖的数据
//Watch这个对象主要作用是进行依赖收集


// 样每个节点就会对应一个watcher。实际上这是vue1.x的做法，以节点为单位进行更新，粒度较细。
// 而vue2.x的做法是每个组件对应一个watcher，实例化watcher时传入的也不再是一个expression，
// 而是渲染函数，渲染函数由组件的模板转化而来，这样一个组件的watcher就能收集到自己的所有依赖，
// 以组件为单位进行更新，是一种中等粒度的方式。要实现vue2.x的响应式系统涉及到很多其他的东西，比如组件化，虚拟DOM等，
// 而这个系列文章只专注于数据响应式的原理，因此不能实现vue2.x，但是两者关于响应式的方面，原理相同。

class Watcher {
  constructor(data, expression, cb) {
    // data: 数据对象，如obj
    // expression：表达式，如b.c，根据data和expression就可以获取watcher依赖的数据
    // cb：依赖变化时触发的回调
    this.data = data
    this.expression = expression
    this.cb = cb
    // 初始化watcher实例时订阅数据
    this.value = this.get()
  }
  
  get() {
    const value = parsePath(this.data, this.expression)
    return value
  }
  
  // 当收到数据变化的消息时执行该方法，从而调用cb
  update() {
    this.value = parsePath(this.data, this.expression) // 对存储的数据进行更新
    cb()
  }
}

function parsePath(obj, expression) {
  // obj = {a:{b:{c:12}}}
  // a.b.c
  const segments = expression.split('.')
  for (let key of segments) {
    if (!obj) return
    obj = obj[key]
  }
  return obj
}
