class RequestQueue {
  constructor(maxCount) {
    this.maxCount = maxCount; // 最大请求数量
    this.activeCount = 0; // 当前活动请求数量
    this.queue = []; // 请求队列
  }

  // 添加并发任务
  addRequest(request) {
    if (this.activeCount < this.maxCount) {
      this.executeRequest(request);
    } else {
      this.queue.push(request);
    }
  }

  // 开始执行任务
  async executeRequest(request) {
    this.activeCount++;
    try {
      const result = await request();
      console.log(result);
    } catch (error) {
      console.error(error);
    } finally {
      this.activeCount--;
      this.processQueue();
    }
  }


  processQueue() {
    if (this.queue.length > 0 && this.activeCount < this.maxCount) {
      const request = this.queue.shift();
      this.executeRequest(request);
    }
  }
}
function simulateRequest(index) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // console.log(`请求 ${index} 完成`);
      resolve(`请求 ${index} 结果`);
    }, 2000+ Math.random() * 1000);
  });
}

const maxCount = 3; // 最大请求数量
const requestQueue = new RequestQueue(maxCount);

// 发起多个请求
for (let i = 1; i <= 10; i++) {
  requestQueue.addRequest(() => simulateRequest(i));
}
// 这个效果只能实现并发队列同时n个进程执行