//深拷贝 + 正则表达式
function deepClone (objOrArr) {
  if (typeof objOrArr !== 'object' || objOrArr === null) {
    return;
  }
  let ans = Array.isArray(objOrArr) ? [] : {}
  for (let key in objOrArr) {
    let keyFinally = key.replace(/_[a-z]/g, function (match, offset, string) {
      // console.log(match, offset, string);
      // return (offset > 0 ? '-':'') + match.toLowerCase();
      return match[1].toUpperCase();
    })
    if (typeof objOrArr[key] === 'object') {
      ans[keyFinally] = deepClone(objOrArr[key])
    } else {
      ans[keyFinally] = objOrArr[key]
    }
  }
  return ans
}

// // const arr = [1, 2, 3, [4, 5, [6]]]
// // console.log(deepClone(arr));

// // // 对象深拷贝
let obj = { 'a': 12, b: { 'hang_log': 'p_pig', 'd': [] } }
console.log(deepClone(obj));