// JSON.stringify问题：
// 但是该方法有以下几个问题。

// 1、会忽略 undefined

// 2、会忽略 symbol

// 3、不能序列化函数

// 4、不能解决循环引用的对象

// 5、不能正确处理new Date()

// 6、不能处理正则
// 递归的方法：一旦堆栈溢出无法处理 无法处理循环引用和symbol问题
function myFlat(objOrArr){
  // let ans = 
  if (typeof objOrArr !== 'object') return;
  let ans = Array.isArray(objOrArr) ? []:{}
  for (let key in objOrArr){
    if (typeof objOrArr[key] === 'object'){
      ans[key] = myFlat(objOrArr[key])
    }else{
      ans[key] = objOrArr[key]
    }
  }
  return ans;
}

//解决循环引用问题


// 使用BFS的思想，采用迭代方法
// function myFlatIteration(){

// }

// 测试用例
function test01(){
  let obj = {
    a:1,
    b:[1,2,3],
    c:{
      d:4,
      e:5
    }
  }
  const arr = [1,2,3,[4,5,[6,7]]]
  console.log(myFlat(obj));
  console.log(myFlat(arr));
}
test01()
debugger