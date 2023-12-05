async function asyncPool (poolLimit, array, iteratorFn) {
  const executing = [] //用于存放正在执行中的异步任务
  const ret = [] //用于存放所有的异步任务
  for (let item of array) {
    const p = iteratorFn(item)
    ret.push(p)

    const e = p.then(() => {
      executing.splice(executing.indexOf(e), 1)
    })//这里的e绑定一个同步任务用于删除正在执行的异步任务队列
    if (executing.length < poolLimit){
      executing.push(e)
    }else{
      await Promise.race(executing)
    }
  }
  return Promise.all(ret)
}

// 这个函数用于生成异步任务用于提供 返回一个promise
const curl = (i) => {
  return new Promise((resolve) => setTimeout(() => {
    resolve(i);
    console.log('结束' + i);
  }, 1000 + Math.random() * 1000));
};
let urls = Array(10).fill(0).map((v, i) => i);
(async () => {
  const res = await asyncPool(3, urls, curl);
  console.log(res);
})();