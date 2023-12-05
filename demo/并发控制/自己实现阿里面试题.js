// 当发起请求时，如果当前活动请求数量小于最大请求数量，将立即执行该请求。 否则，请求会进入队列等待，直到前面的请求完成并释放出队列
class RequestQueue {
  // 你的代码
  constructor(maxCount) {
    this.maxCount = maxCount;
    this.promiseCnt = 0;
    this.executing = []
  }
  async addRequest(iteratorFn){
    const newPromise = iteratorFn()
    const e = newPromise.then(()=>{
      this.executing.splice(this.executing.indexOf(e),1)
    })
    if (this.promiseCnt++ > this.maxCount){
      await Promise.race(this.executing)
    }else{
      this.executing.push(e)
    }
  }
  // run(){
  //   return Promise.all(this.executing)
  // }
}
// 模拟一个异步请求函数
function simulateRequest(index) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`请求 ${index} 完成`);
      resolve(`请求 ${index} 结果`);
    }, Math.random() * 2000);
  });
}

const maxCount = 3; // 最大请求数量
const requestQueue = new RequestQueue(maxCount);

// 发起多个请求
for (let i = 1; i <= 10; i++) {
  requestQueue.addRequest(() => simulateRequest(i));
}
//个人感觉ok了