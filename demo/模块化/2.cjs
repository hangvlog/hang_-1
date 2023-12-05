// const obj = require('./1.js')
// setTimeout(() => {
//   obj.title = 'new title'
//   console.log(obj.title)
// }, 4000)
// console.log(obj.title)
// import obj from './3.js'
// // obj.name = "sadafa"
// console.log(obj);
let obj = require("./3.cjs")
let { num, add } = require("./3.cjs")
console.log(num) // 0
add()
console.log(num) // 0
num = 10
obj.num = 100
console.log(obj);