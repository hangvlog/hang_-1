async function asyncPool (poolLimit, array, iteratorFn) {
  const ret = [];               //2 并发任务列表
  const executing = [];         //3 执行任务列表

  for (const item of array) {   //4
    // debugger
    const p = iteratorFn(item)
    // const p = Promise.resolve().then(() => {
    //   iteratorFn(item)
    //   // debugger
    // });  //5 绑定回调
    ret.push(p);  
    // debugger              //6
    if (poolLimit <= array.length) { //7 是否需要并发控制
      const e = p.then(() => executing.splice(executing.indexOf(e), 1)); //8
      executing.push(e);        //9
      if (executing.length >= poolLimit) {  //10
        await Promise.race(executing);      //11
      }
    }
  }
  return Promise.all(ret);     //15
}
// 这个函数用于生成异步任务用于提供 返回一个promise
const curl = (i) => {
  // console.log('开始' + i);
  return new Promise((resolve) => setTimeout(() => {
    resolve(i);
    console.log('结束' + i);
  }, 1000 + Math.random() * 1000));
};
/*
const curl = (i) => { 
  console.log('开始' + i);
  return i;
};
*/
let urls = Array(10).fill(0).map((v, i) => i);
// console.log(urls);
// debugger
(async () => {
  const res = await asyncPool(3, urls, curl);
  console.log(res);
})();