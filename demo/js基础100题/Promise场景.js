// Promise封装setTimeout 可传入等待时间
function prepare1(delay, callback){
  return new Promise((resolve, reject) => {
    callback.then(resolve)
    setTimeout(() => {
      // callback(resolve, reject)
      reject(new Error('error'))
    }, delay)
  })
}

//  Promise实现超时重试最多3次

//Promise并发池 ES7实现
async function test01 () {
  const delay = function delay (interval) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(interval)
      }, interval);
    })
  }
  // let tasks = [
  //   () => { return delay(1000) },
  //   () => { return delay(1003) },
  //   () => { return delay(1005) },
  //   () => { return delay(1002) },
  //   () => { return delay(1004) },
  //   () => { return delay(1006) }
  // ]
  async function asyncPool (poolLimit, array, iteratorFn) {
    const ret = []; // 存储所有的异步任务
    const executing = []; // 存储正在执行的异步任务
    for (const item of array) {
      // 调用iteratorFn函数创建异步任务
      const p = Promise.resolve().then(() => iteratorFn(item, array));
      ret.push(p); // 保存新的异步任务

      // 当poolLimit值小于或等于总任务个数时，进行并发控制
      if (poolLimit <= array.length) {
        // 当任务完成后，从正在执行的任务数组中移除已完成的任务
        const e = p.then(() => executing.splice(executing.indexOf(e), 1));
        executing.push(e); // 保存正在执行的异步任务
        if (executing.length >= poolLimit) {
          await Promise.race(executing); // 等待较快的任务执行完成
        }
      }
    }
    return Promise.all(ret);
  }
  const timeout = i => new Promise(resolve => setTimeout(() => resolve(i), i));
  await asyncPool(2, [1000, 5000, 3000, 2000], timeout);
  //
}
// test01()


//Promise并发控制 ES7实现
function test02 () {
  async function myAsyncPool (limit, array, iteratorFn) {
    //所有的异步任务
    let ret = [];
    //正在执行中的异步任务
    let executing = [];
    for (const item of array) {
      //为何不是Promise.resolve(iteratorFn(item,array)) 有人说直接推到微任务队列执行
      const p = Promise.resolve().then(() => iteratorFn(item));
      ret.push(p);
      //是否需要并发控制
      if (limit <= array.length) {
        const e = p.then(() => {
          executing.splice(executing.indexOf(e), 1);
        })
        executing.push(e)
        //并发任务队列已经满了，是否等待
        if (executing.length >= limit) {
          await Promise.race(executing);
        }
      }
    }
    return Promise.all(ret)
  }
  // async function asyncPool (poolLimit, array, iteratorFn) {
  //   const ret = [];               //2
  //   const executing = [];         //3
  //   for (const item of array) {   //4
  //     const p = Promise.resolve().then(() => iteratorFn(item));  //5
  //     console.log("p是",p);
  //     ret.push(p);                //6
  //     if (poolLimit <= array.length) { //7
  //       const e = p.then(() => executing.splice(executing.indexOf(e), 1)); //8
  //       executing.push(e);        //9
  //       if (executing.length >= poolLimit) {  //10
  //         await Promise.race(executing);      //11
  //       }
  //     }
  //   }
  //   return Promise.all(ret);     //15
  // }

  const curl = (i) => {
    console.log('开始' + i);
    return new Promise((resolve) => setTimeout(() => {
      resolve(i);
      console.log('结束' + i);
    }, 1000 + Math.random() * 1000));
  };

  let urls = Array(10).fill(0).map((v, i) => i);
  (async () => {
    const res = await myAsyncPool(3, urls, curl);
    console.log(res);
  })();
}
// test02()


//Promise并发控制 ES6实现
// function test03(){
//   function asyncPool(limit,array,iteratorFn){
//     let ret = [...array]
//     let executing = []
//     return new Promise((resolve,reject)=>{
//       while(executing.length < limit){
//         const item = ret.shift()
//         console.log('正在运行' + item)

//       }
//     })
//   }
// }
// test03()
/**
 * https://zhuanlan.zhihu.com/p/455838344 个人采用
 * 
 * 实现并发池https://juejin.cn/post/7146215072627425310?from=search-suggest
 * https://juejin.cn/post/6976028030770610213?from=search-suggest
 * 
 */