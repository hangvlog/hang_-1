function render () {
  console.log('模拟视图渲染')
}
let data = {
  name: '浪里行舟',
  location: { x: 100, y: 100 },
  'arr':[1,2,3]
}
function observe (data) {
  if (!data || typeof data !== 'object') {
    return;
  }
  Object.keys(data).forEach(key => {
    defineReactive(data, key, data[key])
  })
}
function defineReactive (obj, key, value) {
  //注意！这里必须要先observe下value，不然响应式深度只有一层
  observe(value)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      return value
    },
    set: function (newValue) {
      if (newValue === value) return
      observe(newValue)
      value = newValue
      render()
    }
  })
}
observe(data)
// console.log(data);
// data.name = '6666'
// console.log(data);

Object.prototype.$set = function (data, key, value) {
  defineReactive(data, key, value)
}

// data.$set(data, 'age', 18)
// data.$set(data, 'detail', { name: '6666',value:'8888'})

// data.detail.name = '1111'
console.log(data);

debugger
//数组新增方法不再展示，过于简单