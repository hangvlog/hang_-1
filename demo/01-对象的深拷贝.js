//数组和对象的深拷贝
let obj = {'a':12,b:{'c':'aa','d':[]}}
arr = [1,2,3,[4,5,6]]

// function deepCopy(objOrArr){
//   if (typeof objOrArr !== 'object') return
//   let ans = objOrArr instanceof Array ? [] : {}
//   for (let key in objOrArr){
//     if (typeof objOrArr[key] === 'object'){
//       ans[key] = deepCopy(objOrArr[key])
//     }else{
//       ans[key] = objOrArr[key]
//     }
//   }
//   return ans
// }
function deepCopy(objOrArr){
  if (typeof objOrArr !== 'object') return
  let ans = objOrArr instanceof Array ? [] : {}
  for (let key in objOrArr){
    if (typeof objOrArr[key] === 'object'){
      ans[key] = deepCopy(objOrArr[key])
    }else{
      ans[key] = objOrArr[key]
    }
  }
  return ans
}

console.log(deepCopy(obj));
console.log(deepCopy(arr));



// function deepCopy(obj){
//   //递归终止
//   if (typeof obj !== 'object') return
//   let ans = obj instanceof Array ? []:{}
//   for (let key in obj){
//     if (typeof obj[key] === 'object'){
//       ans[key] = deepCopy(obj[key])
//     }else{
//       ans[key] = obj[key]
//     }
//   }
//   return ans
// }


// function deepCopy(obj){
//   if (typeof obj !== 'object') return
//   let ans = obj instanceof Array ? [] : {}
//   for (let key in obj){
//     if (typeof obj[key] === 'object'){
//       ans[key] = deepCopy(obj[key])
//     }else{
//       ans[key] = obj[key]
//     }
//   }
//   return ans
// }

// Object.prototype.myDeepCopy = function(){
//   let ans = this instanceof Array ? [] : {}
//   if (typeof this !== 'object') return;
//   for (let key in this){
//     if (this.hasOwnProperty(key)){
//       ans[key] = typeof this[key] === 'object' ? deepCopy(this[key]) : this[key]
//     }
//   }
//   return ans;
// }
// console.log(obj.myDeepCopy());
// console.log(arr.myDeepCopy());

// Object.prototype.sayhi = function(){
//   console.log('object');
// }
// const a = {}
// a.sayhi()