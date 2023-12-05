let a = "12 222aAAsd a2"
function maxAl(str){
  let maxCnt = 1
  let cnt = 0
  const charReg = /[a-zA-Z]/
  for (let i = 0; i < str.length;i++){
    if (charReg.test(a[i])){
      cnt += 1
      maxCnt = maxCnt > cnt ? maxCnt : cnt
    }else{
      cnt = 0
    }
  }
  return maxCnt
}
console.log(maxAl(a));

//ok