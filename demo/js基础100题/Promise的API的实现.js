// https://juejin.cn/post/7069805387490263047#heading-5
// all实现 
function test01 () {
  //返回值是一个Promise对象 要求全部成功之后循序OK 一旦某一个reject，那么直接reject
  Promise.myAll = function (promises) {
    return new Promise((resolve, reject) => {
      let cnt = 0
      let result = []
      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then(res => {
            result[index] = res
            cnt++
            if (cnt === promises.length) {
              resolve(result)
            }
          }, err => reject(err))
      });
    })
  }
  // Promise.myAll = function (promises) {
  //   const result = []
  //   return new Promise((resolve,reject)=>{
  //     promises.forEach((promise,index)=>{
  //       Promise.resolve(promise).then(res=>{
  //         result[index] = res
  //         if(result.length === promises.length){
  //           resolve(result)
  //         }
  //       }).catch(e=>{
  //         console.log(e);
  //       })
  //     })
  //   })
  // }
  const p1 = Promise.resolve('p1')
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('p2 延时一秒')
    }, 1000)
  })
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('p3 延时两秒')
    }, 2000)
  })

  const p4 = Promise.reject('p4 rejected')

  const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('p5 rejected 延时1.5秒')
    }, 1500)
  })

  // // 所有 Promise 都成功
  // Promise.myAll([p1, p2, p3])
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err)) // 2秒后打印 [ 'p1', 'p2 延时一秒', 'p3 延时两秒' ]

  // 一个 Promise 失败
  Promise.myAll([p1, p2, p4])
    .then(res => console.log(res))
    .catch(err => console.log(err)) // p4 rejected

  // // 一个延时失败的 Promise
  // Promise.myAll([p1, p2, p5])
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err)) // 1.5秒后打印 p5 rejected 延时1.5秒

  // // 两个失败的 Promise
  // Promise.myAll([p1, p4, p5])
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err)) // p4 rejected
}
// test01()

//race实现 //这里注意为何效果一样？resolve和resolve（ans）
function test02 () {
  // Promise.myRace = function (promises) {
  //   return new Promise((resolve, reject) => {
  //     // 这里不需要使用索引，只要能循环出每一项就行
  //     for (const item of promises) {
  //       Promise.resolve(item).then(resolve, reject)
  //     }
  //   })
  // }
  // Promise.myRace = function (promises) {
  //   return new Promise((resolve, reject) => {
  //     promises.forEach(element => {
  //       Promise.resolve(element).then(res => {
  //         resolve(res)
  //       }).catch(err => {
  //         reject(err)
  //       })
  //     });
  //   })
  // }

  Promise.myRace = function (promises) {
    return new Promise((resolve, reject) => {
      promises.forEach(element => {
        Promise.resolve(element).then(res => {
          resolve(res)
        }).catch(e => {
          reject(e)
        })
      })
    })
  }

  const p1 = Promise.resolve('p1')
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('p2 延时一秒')
    }, 1000)
  })
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('p3 延时两秒')
    }, 2000)
  })

  // const p4 = Promise.reject('p4 rejected')

  // const p5 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     reject('p5 rejected 延时1秒')
  //   }, 1500)
  // })

  // p1无延时，p2延时1s，p3延时2s
  Promise.myRace([p1, p2, p3])
    .then(res => console.log(res))
    .catch(err => console.log(err)) // p1

  // // p4无延时reject
  // Promise.myRace([p4, p2, p3])
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err)) // p4 rejected

  // // p5 延时1.5秒reject，p2延时1s
  // Promise.myRace([p5, p2, p3])
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err)) // 1s后打印: p2 延时一秒

}
// test02()

//any实现
function test03 () {
  // Promise.myAny = function (promises) {
  //   let ans = []
  //   let cnt = 0
  //   return new Promise((resolve, reject) => {
  //     promises.forEach(p => {
  //       Promise.resolve(p).then(res => {
  //         resolve(res)
  //       }).catch(err => {
  //         ans[cnt] = err
  //         cnt++
  //         if (cnt === promises.length) {
  //           reject(ans)
  //         }
  //       })
  //     })
  //   })
  // }
  Promise.myAny = function (promises) {

    return new Promise((resolve, reject) => {
      let cnt = 0
      promises.forEach(p => {
        Promise.resolve(p).then(res => {
          resolve(res)
        }).catch(e => {
          if (cnt++ >= promises.length) {
            reject(e)
          }
        })
      })
    })
  }
  const p1 = Promise.resolve('p1')
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('p2 延时一秒')
    }, 1000)
  })
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('p3 延时两秒')
    }, 2000)
  })

  const p4 = Promise.reject('p4 rejected')

  const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('p5 rejected 延时1.5秒')
    }, 1500)
  })
  // 所有 Promise 都成功
  Promise.myAny([p1, p2, p3])
    .then(res => console.log(res))
    .catch(err => console.log(err)) // p1

  // 两个 Promise 成功
  Promise.myAny([p1, p2, p4])
    .then(res => console.log(res))
    .catch(err => console.log(err)) // p1

  // 只有一个延时成功的 Promise
  Promise.myAny([p2, p4, p5])
    .then(res => console.log(res))
    .catch(err => console.log(err)) // p2 延时1秒

  // 所有 Promise 都失败
  Promise.myAny([p4, p5])
    .then(res => console.log(res))
    .catch(err => console.log(err)) // 没有promise成功
}
// test03()

// allSettled实现
async function test04 () {
  // Promise.myAllSettled = function (promises) {
  //   let ans = []
  //   let cnt = 0
  //   return new Promise((resolve, reject) => {
  //     promises.forEach((item, index) => {
  //       item.then((res) => {
  //         ans[index] = {
  //           status: 'fulfilled',
  //           value: res
  //         }
  //         cnt++
  //       })
  //         .catch((err) => {
  //           ans[index] = {
  //             status: 'rejected',
  //             value: err
  //           }
  //           cnt++
  //         })
  //         .finally(() => {
  //           if (cnt === promises.length) {
  //             resolve(ans)
  //           }
  //         })
  //     })
  //   })
  // }
  Promise.myAllSettled = function (promises) {
    const result = []
    let cnt = 0
    return new Promise((resolve, reject) => {
      promises.forEach((promise, index) => {
        // if (index < promises.length){
        Promise.resolve(promise).then((res) => {
          result[index] = {
            status: 'fulfilled',
            value: res
          }
        }).catch((e) => {
          result[index] = {
            status: 'rejected',
            value: e
          }
        }).finally((e) => {
          cnt++
          if (cnt === promises.length) {
            resolve(result)
          }
        })
        // }else{
        //   resolve(result)
        // }
      })
    }
    )
  }
  const p1 = Promise.resolve('p1')
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('p2 延时一秒')
    }, 1000)
  })
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('p3 延时两秒')
    }, 2000)
  })

  // const p4 = Promise.reject('p4 rejected')

  // const p5 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     reject('p5 rejected 延时1.5秒')
  //   }, 1500)
  // })

  // 所有 Promise 实例都成功
  await Promise.myAllSettled([p1, p2, p3])
    .then(res => console.log(res))
    .catch(err => console.log(err))
  debugger
  // [
  //   { status: 'fulfilled', value: 'p1' },
  //   { status: 'fulfilled', value: 'p2 延时一秒' },
  //   { status: 'fulfilled', value: 'p3 延时两秒' }
  // ]

  // 有一个 MyAllSettled 失败
  // Promise.myAllSettled([p1, p2, p4])
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))
  // [
  //   { status: 'fulfilled', value: 'p1' },
  //   { status: 'fulfilled', value: 'p2 延时一秒' },
  //   { status: 'rejected' , value: 'p4 rejected' }
  // ]

  // 所有 MyAllSettled 都失败
  // Promise.myAllSettled([p4, p5])
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))
  // [
  //   { status: 'rejected', reason: 'p4 rejected' },
  //   { status: 'rejected', reason: 'p5 rejected 延时1.5秒' }
  // ]


}
test04()


//resolve实现
function test05 () {
  Promise.myResolve = function (value) {
    if (value && typeof value === 'object' && value.constructor === Promise) {
      return value
    } else {
      return new Promise((resolve, reject) => {
        resolve(value)
      })
    }
  }
}
// test05()



//finally实现
function test06 () {
  Promise.prototype.myFinally = function (callback) {
    let P = this.constructor;
    return this.then(
      value => P.resolve(callback()).then(() => value),
      err => P.resolve(callback()).then(() => { throw err })
    )
  }
}