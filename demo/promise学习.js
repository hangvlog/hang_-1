// let thenable = {
//   then: function(resolve, reject) {
//     resolve(42);
//   }
// };
// let p1 = Promise.resolve(thenable);
// p1.then(function(value) {
//   console.log(value);  // 42
// });
// const f = () => console.log('now');
// // Promise.resolve().then(f);
// console.log('next');
// f()

// next
// now

// let test01 = new Promise(function(resolve, reject) {
//   throw new Error('666')
// })
// test01.then(()=>{
//   console.log('999')
// }).catch(function(err) {
//   console.log('888');
// })

//关于promise的resolve
// 1.resolve一个数值
// const promise = Promise.resolve('666');
// promise.then((value)=>{
//   console.log(value);
// })


// 2.resolve一个Promise
// const promise = Promise.resolve(
//   Promise.resolve('555')
//   // Promise.reject('555')
// );
// console.log(promise);
// promise.then((value)=>{
//   console.log(value);
// })

// const p = Promise.resolve();
// console.log(p);

//3.关于promise的resolve 传入参数是thenable对象时
// let thenable = {
//   then: function(resolve, reject) {
//     console.log(1);
//     resolve(42);
//   }
// };
// let p1 = Promise.resolve(thenable);
// p1.then(function(value) {
//   console.log(value);  // 42
// });
// console.log(2);

// 2
// 1
// 42
// 了解事件循环的都知道同步任务先执行，微任务然后执行，当微任务队列没任务了，宏任务队列再执行
// 伪代码 error
// while(true){
//   while (!SyncTaskQueue.isEmpty()){//同步任务不为空就继续执行同步任务
//     let task = SyncTaskQueue.front();
//     run(task);
//     SyncTaskQueue.pop();
//   }
//   while (!MicroTaskQueue.isEmpty()){//微任务队列不为空就继续执行微任务
//     let task = MicrotaskQueue.front();
//     run(task);
//     MicroTaskQueue.pop();
//   }
//   while (!MacroTaskQueue.isEmpty()){//微任务队列不为空就继续执行微任务
//     let task = MacroTaskQueue.front();
//     run(task);
//     MacroTaskQueue.pop();
//   }
// }
//为何同步任务优先级 > 微任务 > 宏任务



// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => reject('fail'), 3000)
// })
// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(p1), 1000)
// })
// p2
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
// Error: fail


// throw new Error('666')

// const promise = new Promise(function (resolve, reject) {
//   throw new Error('555');
//   resolve('ok');
//   setTimeout(function () { throw new Error('test') }, 0)
// });
// promise
//   // .then(function (value) { console.log(value) })
//   .catch(e=>{
//     console.log(e.message);
//   });
// ok
// Uncaught Error: test
function setPromise(delay,item){
  return new Promise(function (resolve, reject) {
    setTimeout(()=>{
      resolve(console.log(item));
    },delay)
  })
}

ls = [1,2,3,4]
let promises = ls.map((item)=>{
  return setPromise(item*1000,item)
})
// console.log(promises);
Promise.all(promises).then(
  setTimeout(()=>{
    console.log('666');
  },1000)
)




