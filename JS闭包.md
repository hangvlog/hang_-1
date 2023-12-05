# 作用域

## 数据的存储

JavaScript

1. 栈：由操作系统帮助我们分配与释放，基本数据类型存储在栈中，其优势是存取速度比堆要快，并且栈内的数据可以共享，但缺点是存在栈中的数据大小与生存期必须是确定的，缺乏灵活性，先进后出，**后进先出原则，所以 push 优于 unshift**
2. 堆：由程序员分配和释放，如果不释放，会被垃圾回收机制回收。复杂数据类型（引用数据类型）存储在堆中。例如数组对象、object对象；它是运行时动态分配内存的，因此存取速度较慢。

```js
ar str=new String('abc');
var str='abc';
第一种是用new关键字来新建String对象，对象会存放在堆中，每调用一次就会创建一个新的对象，而不管其字符串值是否相等及是否有必要创建新对象，从而加重了程序的负担。并且堆的访问速度慢。
第二种是在栈中，栈中存放值‘abc’和对值的引用；这种写法在内存中只存在一个值，有利于节省内存空间。同时它可以在一定程度上提高程序的运行速度，因为存储在栈中，其值可以共享，并且由于栈访问更快；
此外，在堆中创建的对象除非修改引用，不然，其判断等于始终不相等
```

### 垃圾回收机制

内存泄漏：内存无法回收，内存应该被回收却没有被回收

引用计数法：维护一个引用计数器，现已经废弃

标记清除法：维护一个是否被标记的值，从根部扫描对象，如果没有标记就等待清除



总结：js中的变量及变量存储建议按照c/c++理解，直接理解为地址，不过js只是把地址改成了引用

## 地址/引用理解

```js
var a = {n: 1};
var b = a;
a.x = a = {n: 2};   //   等价于  b.x = a = {n: 2};            先是预编译ab同时指向的对象增加x属性，该对象也就是后来都没变的b指向的对象，这里  a= {n: 2};改变了a的指向。
```

变式![image-20230306085154408](C:\Users\hang\AppData\Roaming\Typora\typora-user-images\image-20230306085154408.png)



## 内存泄漏问题

常见的内存泄漏：

- 意外声明的全局变量
- 闭包
- 忘记回收的定时器/回调函数
- 脱离DOM的引用



## 作用域

全局作用域、局部作用域、块级作用域

### 上级作用域（全局）

函数的上级作用域在哪里创建创建的，上级作用域就是谁

```js
var a = 10
function foo(){
    console.log(a)
}

function sum() {
    var a = 20
    foo()
}

sum()
/* 输出
    10
/
```

### 块级作用域

### 函数作用域（局部作用域）

## var与let区别

# JS闭包

## 定义

一个函数对周围变量的引用，内层函数+外层函数的变量

```js
由于在JS中，变量的作用域属于函数作用域，在函数执行后作用域就会被清理、内存也随之被收回，但是由于闭包时建立在一个函数内部的子函数，由于其可访问上级作用域的原因，即使上级函数执行完，作用域也不会随之销毁，这时的子函数---也就是闭包，便拥有了访问上级作用域中的变量的权限，即使上级函数执行完后，作用域内的值也不会被销毁。
```



## 作用

封闭数据（实现数据私有） 提供操作 

**外部也可以访问函数内部的变量** 

**变量的值可以永远保存在内存中**

## 问题

可能会有内存泄漏问题

## 常见题目

```js
var data = [];
for (var i = 0; i < 3; i++) {
  data[i] = function () {
    console.log(i);
  };
}
data[0]();
data[1]();
data[2]()
```

## 闭包+this指向问题

- 例题1：

```js
　　var name = "The Window";
　　var object = {
　　　　name : "My Object",
　　　　getNameFunc : function(){
　　　　　　return function(){
　　　　　　　　return this.name;
　　　　　　};
　　　　}
　　};

　　alert(object.getNameFunc()());
```

The Window

```js
　　var name = "The Window";
　　var object = {
　　　　name : "My Object",
　　　　getNameFunc : function(){
　　　　　　var that = this;
　　　　　　return function(){
　　　　　　　　return that.name;
　　　　　　};
　　　　}
　　};
　　alert(object.getNameFunc()());
```

My Object

- 例题1 变式

```js
function tmp1() {
    return function tmp2() {
        return this        
    }
}
tmp1()()//Window
```

## Node和浏览器环境下的全局this 

浏览器环境下

使用`const`和`let`都不会把变量添加到windows全局对象里，但是使用`var`会。

浏览器环境里，在最外层定义一个函数，其内部的`this`就是windows对象

```js
function fn(){
  this.num = 10
}
fn();
console.log(this); // windows
console.log(this.num) // 10
```

node环境下

函数内部的`this`指向global对象，而不是全局的那个真正的`this`。

全局的`this`是个空对象。

```js
function fn(){
  this.num = 10
}
fn();
console.log(this); // {}
console.log(this.num) // undefined
console.log(global.num) // 10
```

事实上如果理解CommonJS模块化概念的话，这个问题就很好理解了，由于一个js文件就是一个模块，所以全局的`this`实际上指向的是这个模块的`module.exports`，默认情况下这个`module.exports`一开始就是一个空对象，没有任何导出的成员。

