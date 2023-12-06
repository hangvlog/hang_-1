// 函数防抖1 防抖重在清零 clearTimeout(timer) 延迟实现[理论上讲防抖只能延迟实现]
function debounce (fn, interval) {
  let timer;
  let _this = this
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(_this, ...args)
    }, interval)
  }
}

// 使用
// window.onresize = debounce(function () {
//   console.log("resize");
// }, 500);

// 函数节流 节流重在加锁 timer=timeout 不会延迟实现
function throttle (fn, interval) {
  let lastTime = 0
  return function (...args) {
    let now = Date.now()
    if (now - lastTime >= interval) {
      fn(...args)
      lastTime = now
    }
  }
}

// 函数节流 延迟实现
function throttle1 (fn, interval) {
  let timer;
  return () => {
    if (timer) return
    timer = setTimeout(() => {
      fn(...args)
      clearTimeout(timer)
    },interval)
  }
}