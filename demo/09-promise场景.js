//一秒之后输出【1】
// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done');
//   });
// }

// timeout(1000).then((value) => {
//   console.log(value);
// });
//变式1 数组输出【2】
// const arr = [1,2,3,4]
// function timeout(ms,value) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, value);
//   });
// }
// for (let i = 0; i < arr.length; i++) {
//   //思路一：同时开多个定时器
//   timeout(1000*(i+1),arr[i]).then((value) => {console.log(value);})
// }

//变式1 例2【3】
const arr = [1,2,3,4]
// const myConsole = arr.reduce((prev,now)=>{
//   return prev.then((value)=>{
//     // setTimeout(,1000)
//     return new Promise((resolve,reject)=>{
//       // console.log(value);
//       setTimeout(()=>{
//         // resolve(now)
//         resolve(console.log(now));
//       },1000)
//     })
//   })
// },Promise.resolve())



//图片加载【4】
function loadImageAsync(url){
  return new Promise((resolve,reject)=>{
    const img = new Image()
    // if (img.)
    img.onload = function(){
      resolve(url)
    }
    img.onerror = function(){
      reject(new Error('Could not load image at ' + url))
    }
    img.src = url
  })
}


//封装ajax【5】
const getJson = function(){
  return new Promise((resolve,reject)=>{
    const handler = function(){
      if (this.readyState !== 4){
        return 
      }
      if (this.status === 200){
        resolve(this.response)
      }else{
        reject(new Error(this.statusText))
      }
    }
    const client = new XMLHttpRequest()
    client.open('GET',url)
    client.onreadystatechange = handler
    client.responseType = 'json'
    client.setRequestHeader('Accept','application/json')
    client.send()
  })
}


//实现promise超时的状态判断
const p = Promise.race([
  fetch('/resource-that-may-take-a-while'),
  new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('request timeout')), 5000)
  })
]);
p
.then(console.log)
.catch(console.error);




//实现几秒之后promise状态改变
function timeout(delay){
  return new Promise(resolve => {
    setTimeout(resolve,delay,"done");
  })
}
timeout(100).then((value)=>{
  console.log(value);
}).catch((error)=>{
  console.error(error);
})

//如果指定时间内没有获得结果，就将 Promise 的状态变为reject，否则变为resolve
const p1 = Promise.race([
  fetch('/api/test'),
  new Promise((resolve, reject)=>{
    setTimeout(()=>{
      reject('err')
    },1000)
  })
])
p1.then((result)=>{
  console.log(result);
}).catch(err => {
    console.log(err);
  }
)


//实现超时重发机制




//promise封装文件读写
const fs = require('fs');
const read = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.read(filePath, (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}
ls = []
read('/test01.txt').then((data) => {
  ls.append(data);
  return read('test02.txt')
}).then((data) => {
  ls.append(data);
  return read('test03.txt')
}).catch((err)=>{
  console.error(err)
})
