function fetchData (url) {
  return fetch(url).catch(function (e) {
    throw e
  })
}

// function retry(url, times, second) {
//   return new Promise(function (resolve, reject) {
//     let initTimestamp  = Date.now()
//     function doRequest() {
//       fetchData(url)
//         .then(function (response) {
//           resolve(response)
//         })
//         .catch(function (error) {
//           let nowTimestamp = (Date.now() - initTimestamp ) / 1000
//           times--
//           console.log(`重试第${3 - times}次`)
//           console.log(`倒计时第${nowTimestamp}秒`)
//           if (times > 0 && nowTimestamp < second) {
//             doRequest()
//           } else {
//             reject(error)
//           }
//         })
//     }
//     doRequest()
//   })
// }
function retry (url, time, interval) {
  const startTime = Date.now()
  return new Promise((resolve, reject) => {
    function doRequest () {
      fetchData(url).then((res) => {
        resolve(res)
      }).catch(err => {
        time--
        const costTime = (Date.now() - startTime) / 1000
        console.log("重试第",n,"次");
        console.log("共计花费时间",costTime);
        if (time > 0 && costTime < interval) {
          doRequest()
        }else{
          reject("超时或者重试机会已经用完")
        }
      })
    }
  })
}

retry("https://example.com/data'", 3, 10)
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.error(error)
  })