class MyPromise {
  static resolve (value) {
    return new MyPromise((resolve, reject) => {
      resolve(value)
    })
  }
  static reject (reason) {
    return new Promise((resolve, reject) => {
      reject(reason);
    });
  }
  constructor(executor) {
    this.state = 'pending'
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    const resolve = (value) => {
      if (this.status === 'pending') {
        setTimeout(() => {
          this.status = 'fulfilled'
          this.result = value;
          this.onResolvedCallbacks.forEach(({ fn, resolve, reject }) => {
            resolve(fn(value))
          })
        }, 0)
      }
    }
    const reject = (value) => {
      if (this.status === 'pending') {
        setTimeout(() => {
          this.status = 'rejected'
          this.result = value;
          this.onRejectedCallbacks.forEach(({ fn, resolve, reject }) => {
            reject(fn(value))
          })
        }, 0)
      }
    }
    try {
      executor(resolve, reject)
    } catch (reason) {
      reject(reason)
    }
  }
  then (resFn, rejFn) {
    resFn = typeof resFn === "function" ? resFn : (value) => value;
    rejFn = typeof rejFn === "function"? rejFn: (reason) => {throw reason};
    const _promise = {
      'pending': () => {
        return new myPromise((resolve, reject) => {
          this.onResolvedCallbacks.push({ fn: resFn, resolve, reject });
          this.onRejectedCallbacks.push({ fn: rejFn, resolve, reject });
        });
      },
      'fulfilled': () => myPromise.resolve(resFn(this.result)),
      'rejected': () => myPromise.reject(rejFn(this.result)),
    }[this.status];
    return _promise()
  }
  catch (fn) {
    return this.then(undefined, fn);
  }
  finally(cb) {
    return this.then(cb, cb);
  }
}
const a = new MyPromise("11")
const b = new Promise("11")
console.log(a,b);
