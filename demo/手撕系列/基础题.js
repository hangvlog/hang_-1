// 实现Object的create
function test01(){
  Object.prototype.myCreate = function (obj) {
    var F = function () { };
    F.prototype = obj;
    return new F();
  }
}

// 手写 instanceof 方法
