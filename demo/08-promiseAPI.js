//封装文件读取的模块
const fs = require('fs')
const read = (fileName)=>{
  return new Promise((resolve, reject)=>{
    fs.read(fileName,'utf8',(err,data)=>{
      if (err) reject(err)
      resolve(data)
    })
  })
}

read('./01-对象的深拷贝.js').then(data=>{
  return read(data)
}).then((data)=>{
  return read(data)
}).then((data)=>{
  return read(data)
}).catch((err)=>{
  console.error(err)
})


//手撕promise.all
function promiseAll(promises){
  return new Promise((resolve,reject)=>{
    if (Object.prototype.toString.call(promises)!=='[object Array]'){
      return reject(new Error('Promise'))
    }
    let resolvedCounter = 0
    // let promiseNumber = promises.length
    let resolvedValues = new Array(promises.length)

    for (let i = 0; i < promises.length; i++){
      (function(i){
        Promise.resolve([promises[i]]).then((value)=>{
          resolvedCounter++
          resolvedValues[i] = value
          if (resolvedCounter === promises.length) return resolve(resolvedValues)
        },(reason)=>{
          return reject(reason)
        })
      })(i)
    }
  })
}


//手撕promise.finally
Promise.prototype.myFinally = function(callback){
  const p = this.constructor
  return this.then((value)=>{
    return p.resolve(callback).then(()=>{
      value
    })
  },(reason)=>{

  })

}

//并发控制****************
/*
手撕promise系列https://juejin.cn/post/7019684758321889294
*/