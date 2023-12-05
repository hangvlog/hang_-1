// // 数组深拷贝
// Array.prototype.myDeepCopy = function(){
//   // console.log(this)
//   let ans = this instanceof Array ? []:{}
//   for (let i of this){
//     if (Array.isArray(i)){
//       ans.push(i.myDeepCopy())
//     }else{
//       ans.push(i)
//     }
//   }
//   return ans
// }
// // arr = [1,2,3,[4,5,6]]
// // console.log(arr.myDeepCopy());

// // 对象深拷贝
// let obj = {'a':12,b:{'c':'aa','d':[]}}

// function myDeepCopy1(obj){
//   if (typeof obj !== 'object') return
//   let ans = obj instanceof Array ? [] : {}
//   for (let key in obj){
//     if (typeof obj[key] === 'object'){
//       ans[key] = myDeepCopy1(obj[key])
//     }else{
//       ans[key] = obj[key]
//     }
//   }
//   return ans
// }
// console.log(myDeepCopy1(obj));

// // Object.prototype.myDeepCopy = function(){
// //   if (typeof this !== 'object') return
// //   let ans = Object.prototype.toString.call(this) === '[object Object]' ? {}:[]
// //   for (let i in this){
// //     if (typeof this[i] === 'object'){
// //       ans[i] = this[i].myDeepCopy()
// //     }else{
// //       ans[i] = this[i]
// //     }
// //   }
// //   return ans
// // }



//原型链
// function myInstanceOf(a,b){
//   let tmp = a
//   while (tmp.__proto__ !== null){
//     if (tmp.__proto__ === b.prototype){
//       return true
//     }
//     tmp = tmp.__proto__
//   }
//   return false
// }
// a = function(){}
// console.log(myInstanceOf(a,Object));
// console.log(a.__proto__);

//深拷贝
// function myDeepCopy(objOrArr){
//   let result = objOrArr instanceof Array ? [] : {}
//   for (let key in objOrArr){
//     if (typeof objOrArr[key] === "object"){
//       result[key] = myDeepCopy(objOrArr[key])
//     }else{
//       result[key] = objOrArr[key]
//     }
//   }
//   return result
// }
// arr = [1,2,3,[4,5,6]]
// let obj = {'a':12,b:{'c':'aa','d':[]}}
// console.log(myDeepCopy(arr));
// console.log(myDeepCopy(obj));


//数组扁平化
// function flatArr(arr){
//   let result = []
//   for (let key of arr){
//     if (Array.isArray(key)){
//       result = [...result,...flatArr(key)]
//     }else{
//       result.push(key)
//     }
//   }
//   return result
// }
// arr = [1,2,3,[4,5,[6]]]
// console.log(flatArr(arr));

//数组扁平化 控制深度
// function flatArr(arr,depth = 1){
//   let result = []
//   for (let key of arr){
//     if (Array.isArray(key) && depth > 0){
//       result = [...result,...flatArr(key,depth - 1)]
//     }else{
//       result.push(key)
//     }
//   }
//   return result
// }
// arr = [1,2,3,[4,5,[6]]]
// console.log(flatArr(arr));
// console.log(flatArr(arr,1));
// console.log(flatArr(arr,2));

//对象扁平化 之后再说


//节流
function throttle (fn, interval) {
  let lastTime = 0;
  const _throttle = function () {
    let nowTime = Date.now();
    if (nowTime - lastTime > interval) {
      fn();
      lastTime = nowTime
    }
  }
  return _throttle
}

//防抖
function debounce (fn, interval) {
  let timer = null
  const _debounce = function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    }, interval)
  }
  return _debounce
}


//promise 题目一 数组数据间隔一秒输出
const arr = [1, 2, 3]
function test01 () {
  arr.reduce((prev, item) => {
    return prev.then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(console.log(item))
        }, 1000)
      })
    })
  }, Promise.resolve())
}
// test01()

//promise 题目一 封装一个加载图片的promise
function test02 (url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve(img.url)
    }
    img.onerror = () => {
      reject(new Error('图片加载失败'))
    }
    img.src = url
  })
}

//promise 题目一 使用Promise实现红绿灯交替重复亮
/**
 * 注意 不加return会出现堆栈溢出的情况
 */
function test03 () {
  const red = () => {
    console.log("red");
  }
  const blue = () => {
    console.log("blue");
  }
  const green = () => {
    console.log("green");
  }
  const light = (delay, fn) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        fn()
        resolve()
      }, delay)
    })
  }
  const step = function () {
    Promise.resolve().then(() => {
      return light(3000, red)
    })
      .then(() => {
        return light(2000, blue)
      })
      .then(() => {
        return light(1000, green)
      })
      .then(() => {
        return step()
      })
  }
  step()
}
// test03()

// 发现一个问题Promise链式调用是，假如返回的不是Promise或者没有返回，then调用过程是？->resolve(函数体)
function test04 () {
  Promise.resolve()
    .then(() => {
      setTimeout(() => {
        console.log(1111);
      }, 3000)
    })
    .then(() => {
      console.log(2222);
    });

  // const a = Promise.resolve().then(()=>{console.log('object');})
  // object
  // undefined
  // a
  // Promise {<fulfilled>: undefined}
  // const b = Promise.resolve("6")
  // undefined
  // b
  // Promise {<fulfilled>: '6'}
}


//Promise 并发控制
function test05 () {
  function limitLoad (urls, handler, limit) {
    let sequence = [].concat(urls); // 复制urls
    // 这一步是为了初始化 promises 这个"容器"
    let promises = sequence.splice(0, limit).map((url, index) => {
      return handler(url).then(() => {
        // 返回下标是为了知道数组中是哪一项最先完成
        return index;
      });
    });
    // 注意这里要将整个变量过程返回，这样得到的就是一个Promise，可以在外面链式调用
    return sequence
      .reduce((pCollect, url) => {
        return pCollect
          .then(() => {
            return Promise.race(promises); // 返回已经完成的下标
          })
          .then(fastestIndex => { // 获取到已经完成的下标
            // 将"容器"内已经完成的那一项替换
            promises[fastestIndex] = handler(url).then(
              () => {
                return fastestIndex; // 要继续将这个下标返回，以便下一次变量
              }
            );
          })
          .catch(err => {
            console.error(err);
          });
      }, Promise.resolve()) // 初始化传入
      .then(() => { // 最后三个用.all来调用
        return Promise.all(promises);
      });
  }
  limitLoad(urls, loadImg, 3)
    .then(res => {
      console.log("图片全部加载完毕");
      console.log(res);
    })
    .catch(err => {
      console.error(err);
    });
}

// Promise并发控制2
function asyncPool2 () {
  async function asyncPool (limit, arr, fn) {
    const ret = []; //保存所有异步任务
    const executing = []; //保存正在执行的异步任务
    for (const item of arr) {
      const p = fn(item); //异步请求
      ret.push(p); // 将异步请求存入ret中

      // 限制长度小于arr时需要并发控制
      if (limit <= arr.length) {
        // 为p指定then回调，当成功的时候从executing中移除
        const e = p.then(
          () => executing.splice(executing.indexOf(e), 1),
          (err) => err
        );
        // 加入到正在执行的数组中
        executing.push(e);

        //达到限制，开始并发控制，await阻塞代码
        //只有等到正在执行的里面结束了一个之后才可以继续循环开始请求
        if (executing.length === limit) {
          await Promise.race(executing);
        }
      }
    }
    return Promise.all(ret).catch((err) => err);
  }
  //模拟请求
  const timeout = (i) =>
    new Promise((resolve) => {
      console.log(i);
      setTimeout(resolve, i, i);
    });

  asyncPool(
    2,
    [1000, 2000, 1000, 1000],
    timeout
  ).then((res) => {
    console.log(res);
  });
}

//节流和防抖

//数组/对象 深拷贝
function test06 () {
  function myDeepCopy (objOrArr) {
    if (typeof objOrArr !== "object") {
      return
    }
    let ans = Array.isArray(objOrArr) ? [] : {}
    for (let key in objOrArr) {
      if (typeof objOrArr[key] === "object") {
        ans[key] = myDeepCopy(objOrArr[key])
      } else {
        ans[key] = objOrArr[key]
      }
    }
    return ans
  }
  const arr = [1, 2, 3, [4, 5, [6]]]
  console.log(myDeepCopy(arr));

  // // 对象深拷贝
  let obj = { 'a': 12, b: { 'c': 'aa', 'd': [] } }
  console.log(myDeepCopy(obj));
}
// test06()

//数组/对象的扁平化
function test07 () {
  function myFlatArr (arr) {
    let ans = []
    for (let i of arr) {
      if (Array.isArray(i)) {
        // ans = ans.concat(myFlatArr(i))
        ans = [...ans, ...myFlatArr(i)]
      } else {
        ans.push(i)
      }
    }
    return ans
  }
  const arr = [1, 2, 3, [4, 5, [6]]]
  console.log(myFlatArr(arr));

  function myFlatObj (arr) {


  }
  // // 对象
  // let obj = { 'a': 12, b: { 'c': 'aa', 'd': [] } }
  // console.log(myDeepCopy(obj));
}

// 文件切片上传
function test08 () {
  // <input type="file" id="fileInput">
  // <button id="uploadBtn">上传</button>
  document.getElementById('fileInput').onchange = function ({ target: { files } }) {
    file = files[0]
  }
  document.getElementById('uploadBtn').onclick = async function () {
    if (!file) return
    let size = 1024 * 1024 * 10
    let fileChunks = []
    let index = 0
    //创建切片数组
    for (let cur = 0; cur < file.size; cur += size) {
      fileChunks.push({
        hash: index++,
        chunk: file.slice(cur, cur + size)
      })
    }
    // 上传切片
    const uploadList = fileChunks.map((item, index) => {
      let formData = new FormData()
      formData.append('filename', file.name)
      formData.append('hash', item.hash)
      formData.append('chunk', item.chunk)
      return axios({
        url: '/upload',
        data: formData,
        method: 'post'
      })
    })

    await Promise.all(uploadList)

    //合并切片
    await axios({
      method: 'get',
      url: '/merge',
      params: {
        fileName: file.name
      }
    })
  }

}

//文件切片上传 + 并发控制
function test09 () {
  // <input type="file" id="fileInput">
  // <button id="uploadBtn">上传</button>
  let file;
  document.getElementById('file').onclick = function (e) {
    file = e.target.files[0];
  }
  document.getElementById('uploadBtn').onclick = function () {
    let size = 1024 * 50; //50KB 切片大小
    let fileChunks = [];
    let index = 0 //切片序号
    //文件切片列表
    for (let cur = 0; cur < file.size; cur += size) {
      fileChunks.push({
        chunk: file.slice(),
        index: index
      });
    }
    const uploadFileChunks = async function (fileChunksList) {
      if (fileChunksList.length === 0) return
      let pool = []
      let max = 3
      let finnish = 0
      let failList = []
      for (let i = 0; i < fileChunksList; i++) {
        let item = fileChunksList[i]
        let formData = new FormData()
        formData.append('filename', file.name)
        formData.append('hash', item.hash)
        formData.append('chunk', item.chunk)
        let task = axios({
          method: 'post',
          data: formData,
          url: '/upload'
        })
        task.then((data) => {
          let index = pool.findIndex((t) => {
            t === task
          })
          pool.splice(index, 1)
        })
          .catch(() => {
            failList.push(item)
          })
          .finally(() => {
            finnish++
            if (finnish === fileChunks.length) {
              uploadFileChunks(failList)
            }
          })
        pool.push(task)
        if (pool.length === max) {
          //每当并发池跑完一个任务，就再塞入一个任务
          await Promise.race(pool)
        }
      }
    }
  }
}

//并发控制


// const timeout = (i) =>
//   new Promise((resolve) => {
//     setTimeout(resolve, i, i);
//     console.log(i);
//   });
// timeout(2000)


mySettimeout = function (fun, time) {
  let timer = null
  function interval () {
    fun()
    timer = setTimeout(interval, time)
  }
  interval()
  return {
    cancel: () => {
      clearTimeout(timer)
    }
  }
};


//树状结构与扁平化结构的互相转换 ——树状结构的扁平化处理
function test10 () {
  function flatObj () {
    let ans = []
    const dfs = (arr) => {
      arr.forEach((item) => {
        if (item.children) {
          dfs(item.children)
          delete item.children
        }
        ans.push({
          id: item.id,
          name:item.title
        })
      })
    }
  }
  // function treeToList(data) {
  //   let res = [];
  //   const dfs = (tree) => {
  //       tree.forEach((item) => {
  //           if (item.children) {
  //               dfs(item.children);
  //               delete item.children;
  //           }
  //           res.push(item);
  //       });
  //   };
  //   dfs(data);
  //   return res;
  // }
  const treeData = [
    {
      id: 2, title: '中国', parent_id: 0,
      children: [
        {
          id: 3, title: '广东省', parent_id: 2,
          children: [
            {
              id: 4, title: '广州市', parent_id: 3,
              children: [
                { id: 5, title: '天河区', parent_id: 4 }
              ]
            }
          ]
        },
        { id: 6, title: '湖南省', parent_id: 2 }
      ]
    },
    { id: 1, title: '俄罗斯', parent_id: 0, },
  ]
  console.log(flatObj(treeData));
}
test10()

// console.log(Array.prototype);
