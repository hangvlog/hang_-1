let obj={a:2,b:{c:3}};

Object.defineProperty(obj,'a',{
  configurable:true,
  enumerable:true,
  get(){
    console.log('getter');
    return obj['a']
  },
  set(value){
    console.log('setter');
    return obj['a']=value;
  }
})
console.log(obj.a);
