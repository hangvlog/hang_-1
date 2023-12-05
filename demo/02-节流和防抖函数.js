// 回顾下立即执行函数s
// (function tmp1(){
//   let ans = 'ok';
//   (function tmp2(){
//     console.log(ans);
//   })()
// })()

// 防抖
function debounce(fn,delay){
  let timer = null
  const _debounce = function(){
    if (timer){
      clearTimeout(timer)
    }
    // if (timer === undefined) return 
    timer = setTimeout(()=>{
      fn()
    },delay)
  }
  return _debounce
}

//节流
function throttle(fn,interval){
  let lastTime = 0
  let remainTime
  const _throttle = function(){
    const nowTime = Date.now()
    remainTime = interval - (nowTime - lastTime)
    if (remainTime<=0){
      fn()
      lastTime = nowTime
    }
  }
  return _throttle
}

//防抖函数
function debounce(fn,delay){
  let timer = null
  const _debounce = function(){
    if (timer){
      clearTimeout(timer)
    }
    timer = setTimeout(()=>{
      fn()
    },delay)
  }
  return _debounce
}
//节流
function throttle(fn,interval){
  let lastTime = 0
  let nowTime = new Date()
  const _throttle = function(){
    if (nowTime - lastTime - interval>=0){
      fn()
      lastTime = nowTime
    }
  }
  return _throttle
}



//节流
function throttle(fn,interval){
  let lastTime = 0
  const _throttle = function(){
    let nowTime = new Date();
    if (nowTime - lastTime - interval>=0){
      fn()
      lastTime = nowTime
    }
  }
  return _throttle;
}

//防抖函数
function debounce(fn, interval){
  let timer = null;
  const _debounce = function(){
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(()=>{
      fn()
    },interval)
  }
  return _debounce;
}