/**
 * data 被订阅的消息，发布者
 * Watcher 消息订阅者，可以订阅多个消息 自身有依赖改变时的回调函数
 * defineReactive 有一个数组同来保存订阅者 在get里面进行依赖收集（进入dep对象） 收集的就是消息的订阅者 【真正进行依赖收集的是dep对象】
 * 在set里面派发更新然后逐个执行get收集的观察者对象的update方法（dep执行foreach） 此时的dep可以抽离出来成为消息中心
 * 
 * 
 * 
 * 订阅者 Dep？ https://juejin.cn/post/6844903882208837640#heading-5
 * 
 * 其中这里的Dep就是一个观察者类，每一个data的属性都会有一个dep对象。当getter调用的时候，去dep里注册函数，
 * https://zhuanlan.zhihu.com/p/88648401
 * 
 * 
 * mount 阶段的时候，会创建一个Watcher类的对象。这个Watcher实际上是连接Vue组件与Dep的桥梁。
 */