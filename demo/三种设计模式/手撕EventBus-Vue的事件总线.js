
class EventBus {
  constructor() {
    this._event = {};
  }
  $on (eventName, callback) {
    if (Array.isArray(eventName)) {
      eventName.forEach(name => {
        this.$on(name, callback);
      });
    } else {
      (this._event[eventName] || (this._event[eventName] = [])).push(callback)
    }
  }
  $once (eventName, callback) {
    const on = () => {
      //先移除当前事件 再调用函数 先后顺序无所谓
      callback.apply(this, arguments);
      this.$off(eventName, on);
    }
    // on.fn = callback
    //这里为何绑定的是on？因为我们需要控制这个once绑定的callback函数的执行，在callback执行之后删除这个回调
    this.$on(eventName, on);
  }
  $emit (eventName, ...args) {
    if (this._event[eventName]) {
      this._event[eventName].forEach(callback => {
        callback.apply(this, args);
      })
    }
  }
  $off (eventName, callback) {
    if (arguments.length === 0) {
      this._event = {}
      return this
    }
    if (!callback) {
      this._event[eventName] = []
      return this
    }
    this._event[eventName] = this._event[eventName].filter(item => item !== callback)
    return this
  }
}
function eventsMixin (obj) {
  Object.prototype.$bus = new EventBus();
}
const obj = {}
eventsMixin(obj)
// 测试$on
function test01 () {
  function handlerA () {
    console.log('handlerA');
  }
  function handlerB () {
    console.log('handlerB');
  }
  function handlerC () {
    console.log('handlerC');
  }
  // 使用构造函数创建一个实例
  obj.$bus.$on('buy', handlerA);
  obj.$bus.$on('buy', handlerB);
  console.log('person1 :>> ', obj.$bus._event);
}
// test01()

// 测试$off
function test02 () {
  function handlerA () {
    console.log('handlerA');
  }
  function handlerB () {
    console.log('handlerB');
  }
  function handlerC () {
    console.log('handlerC');
  }
  // 使用构造函数创建一个实例
  const person1 = {};
  person1.$bus.$on('buy', handlerA);
  person1.$bus.$on('buy', handlerB);
  person1.$bus.$on('buy', handlerC);
  console.log('取消回调前 :>> ', person1.$bus);
  person1.$bus.$off("buy", handlerA)
  console.log('取消回调后 :>> ', person1.$bus);
  person1.$bus.$off("buy")
  console.log('删除整个事件 :>> ', person1.$bus);
}
// test02()

function test03 () {
  function handlerA (...args) {
    console.log('buy handlerA', args);
  }
  function handlerB () {
    console.log('buy handlerB');
  }
  function handlerC () {
    console.log('buy handlerC');
  }
  // 使用构造函数创建一个实例
  const person1 = {};
  person1.$bus.$on('buy', handlerA);
  person1.$bus.$on('buy', handlerB);
  person1.$bus.$on('buy', handlerC);
  console.log('person1 :>> ', person1);
  // 触发 buy 事件
  person1.$bus.$emit('buy', "66666", "adsasd")
}
// test03()

// 测试once 
function test04 () {
  function handlerA (...args) {
    console.log('buy handlerA', args);
  }
  function handlerB () {
    console.log('buy handlerB');
  }
  function handlerC () {
    console.log('buy handlerC');
  }
  function handlerD (d) {
    console.log('buy handlerD', d);
  }
  // 使用构造函数创建一个实例
  const person1 = {};
  person1.$bus.$on('buy', handlerA);
  person1.$bus.$once('buy', handlerB);
  // person1.$bus.$emit('buy', '6666666');
  person1.$bus.$on('buy', handlerC);
  console.log('person1 :>> ', person1);
  // 触发 buy 事件
  // person1.$bus.$emit('buy', "66666", "adsasd")
  person1.$bus.$once('tmp', handlerD)
  person1.$bus.$emit('tmp', "once", "once")
  console.log(person1.$bus._event['tmp']);
  console.log(person1.$bus._event['buy']);
}
test04()

// 全部测试通过
debugger