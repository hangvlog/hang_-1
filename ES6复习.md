ES6复习

计算机网络

[「2021」高频前端面试题汇总之计算机网络篇 - 掘金 (juejin.cn)](https://juejin.cn/post/6908327746473033741)

[面试汇总(三)：计算机网络常见面试总结(一) - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/237948931#:~:text=面试汇总 (三)：计算机网络常见面试总结 (一) 1 1、请你说一下TCP怎么保证可靠性，并且简述一下TCP建立连接和断开连接的过程 TCP保证可靠性： （1）序列号、确认应答、超时重传%3A 数据到达接收方，接收方需要发出一个确认应答，表示已经收到该数据段，并且确认序号会说明了它下一次需要接收的数据序列号。,3、请回答一下HTTP和HTTPS的区别，以及HTTPS有什么缺点？ HTTP协议和HTTPS协议区别如下： 1）HTTP协议是以明文的方式在网络中传输数据，而HTTPS协议传输的数据则是经过TLS加密后的，HTTPS具有更高的安全性 ... 4 4、请你说一说HTTP返回码 HTTP协议的响应报文由状态行、响应头部和响应包体组成，其响应状态码总体描述如下： )

[（一）TCP 端口 · 理解 TCP 和 UDP (gitbooks.io)](https://jerryc8080.gitbooks.io/understand-tcp-and-udp/content/chapter1.html)

前端汇总

[GitHub - yuanyuanbyte/Blog: 圆圆的博客，预计写七个系列：JavaScript深入系列、JavaScript专题系列、网络系列、Webpack系列、Vue系列、JavaScript基础系列、HTML&CSS应知应会系列。](https://github.com/yuanyuanbyte/Blog)【已看完发布订阅模式】

[「2021」高频前端面试题汇总之计算机网络篇 - 掘金 (juejin.cn)](https://juejin.cn/post/6908327746473033741#heading-10)【已看完计算机网络相关,...】

### `apply`求数组的最大值与最小值

```js
const arr = [1,10,11,33,4,52,17]
Math.max.apply(null, arr)
Math.min.apply(null, arr)
```



# for循环相关

## var与let

```js
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10

var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6
```

## 暂时性死区

```js
if (true) {
  // TDZ开始
  tmp = 'abc'; // ReferenceError
  console.log(tmp); // ReferenceError
  let tmp; // TDZ结束
  console.log(tmp); // undefined
  tmp = 123;
  console.log(tmp); // 123
}
```

## 块级作用域

浏览器的 ES6 环境中，块级作用域内声明的函数，行为类似于`var`声明的变量。上面的例子实际运行的代码如下。

```js
// 浏览器的 ES6 环境
function f() { console.log('I am outside!'); }
(function () {
  var f = undefined;
  if (false) {
    function f() { console.log('I am inside!'); }
  }
  f();
}());
// Uncaught TypeError: f is not a function
```

- ES6 的块级作用域必须有大括号，如果没有大括号，JavaScript 引擎就认为不存在块级作用域。

```js
// 第一种写法，报错
if (true) let x = 1;
// 第二种写法，不报错
if (true) {
  let x = 1;
}
```

## const

const 声明的变量，一旦声明必须初始化，而且之后不能修改对于数据的栈的引用（因为js将我们的对象类型的具体数据放在堆中，同时在栈中存放一份引用）,这个在栈中的引用我们不能修改，但是堆中的数据我们可以进行修改【简单的例子数组修改某一个位置的元素】

## 声明变量

`var`命令和`function`命令。ES6 除了添加`let`和`const`命令，后面章节还会提到，另外两种声明变量的方法：`import`命令和`class`命令。所以，ES6 一共有 6 种声明变量的方法。

# 补充基础

## typeof和instanceof区别

typeof(不能区分Object，null和array)

```js
// Numbers 
typeof 37 === 'number';
// Strings 
typeof "" === 'string';
// Booleans 
typeof true === 'boolean';
// Symbols 
typeof Symbol('foo') === 'symbol';
// Undefined 
typeof undefined === 'undefined'; 
typeof blabla === 'undefined'; // 一个未定义的变量,或者一个定义了却未赋初值的变量
// Objects 
typeof {a:1} === 'object';
------------------------'下面是不是有点奇怪？'--------------------------
type [1,2,3] = 'object'
// 函数
typeof function(){} === 'function';
// Null
typeof null === 'object'
```

- 所有返回值

```js
typeof undefined // "undefined"
typeof true // "boolean"
typeof 42 // "number"
typeof 42n // "bigint"
typeof "Hello World" // "string"
typeof Symbol() // "symbol"
typeof function() {} // "function"
typeof {} // "object"
typeof null // "object"
typeof [] //"object"
```

问题：

无法区分对象，数组，NULL（这个将永远无法修复）

### 问题产生原因

```
js通过数据前3位判断数据类型

而我们的数组和对象前3位都是0，只要前三位是0，那么就是对象类型

至于null为何typeof也是Object是由于null二进制存储是全0，前三位自然也是0
```

对于如何区分这三种类型也有办法就是

```js
if (typeof test) === 'Object'{
    //Object.prototype.toString.call(arr) // "[object Array]"
	//Object.prototype.toString.call(obj) // "[object Object]"
    //Object.prototype.toString.call(null) '[object Null]'
    这种方法解决了typeof无法准确判断类型的问题
} 

```

好处：

能判断一个变量是否被定义

instanceof

```js
var d = new Date();
d instanceof Date; // true
d instanceof Object; // true (所有对象都是 Object 的实例)
d instanceof Array; // false
```

手写indtanceof

```js
    let myInstanceOf = function(a,b){
      let tmp = a
      while(tmp.__proto__  != null){
        if (tmp.__proto__ == b.prototype){
          return true
        }
        tmp = tmp.__proto__
      }
      return false
    }
    // true
    // a = [1,2,3]
    //true
    // a = new Object()
    //true
    a = function(){}
    console.log(myInstanceOf(a,Object));
```

```js
function instance_of(left, right) {
  let leftVal = left.__proto__;
  let rightVal = right.prototype;
  while (true) {
    if (leftVal === null) return false;
    if (leftVal === rightVal) return true;
    leftVal = leftVal.__proto__;
  }
}
let a = { name: '冯总' }
console.log(instance_of(a, Object));//true
```

- 
- typeof会返回一个变量的基本类型（结果是一个字符串），instanceof返回的是一个布尔值
- instanceof 可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型
- 而typeof 也存在弊端，它虽然可以判断基础数据类型（null 除外），但是引用数据类型中，除了function 类型以外，其他的也无法判断

## ==和===区别

`===` 严格相等，会比较两个值的类型和值 

`==`  抽象相等，比较时，会先进行类型转换，然后再比较值

**再说 ==，根据以下规则：**

1、如果两个值类型相同，进行 === 比较。

2、如果两个值类型不同，他们可能相等。根据下面规则进行类型转换再比较：

a、如果一个是null、一个是undefined，那么[相等]。

b、如果一个是字符串，一个是数值，把字符串转换成数值再进行比较。

c、如果任一值是 true ，把它转换成 1 再比较；如果任一值是 false，把它转换成 0 再比较。

d、如果一个是对象，另一 个是数值或字符串，把对象转换成基础类型的值再比较。对象转换成基础类型，利用它的toString或者valueOf方法。js核心内置类，会尝试 valueOf先于toString；例外的是Date，Date利用的是toString转换。非js核心的对象，令说（比较麻烦，我也不大懂）

e、任何其他组合，都[不相等]。

```js
console.log(5 == "5"); // true, 字符串被转换为数字5
console.log(true == 1); // true, 布尔值被转换为数字1

console.log(null == undefined); // true, 它们相等
console.log("5" == [5]); // true, 数组转换为字符串"5"，然后和字符串"5"比较
console.log({} == {}); // false, 两个不同的对象不能相等
```

**总结**

总之，建议在比较两个值时始终使用===运算符，以避免可能出现的类型转换问题。

![image-20230724091506858](https://cdn.staticaly.com/gh/hangvlog/PICGO_ImgBed@main/2023/4image-20230724091506858.png)

![image-20230724091600629](https://cdn.staticaly.com/gh/hangvlog/PICGO_ImgBed@main/2023/4image-20230724091600629.png)

## 对象的valueOf和toString

```js
var num = new Number(10);
console.log(num.valueOf()); // 10
console.log(num.toString()); // "10"
```

```js
var str = "hello";
console.log(str.valueOf()); // "hello"
console.log(str.toString()); // "hello"
```

```js
var arr = [1, 2, 3];
console.log(arr.valueOf()); // [1, 2, 3]
console.log(arr.toString()); // "1,2,3"
```

```js
function add(x, y) {
  return x + y;
}
console.log(add.valueOf()); // function add(x, y) { return x + y; }
console.log(add.toString()); // "function add(x, y) { return x + y; }"
```

```js
var obj = { name: "Alice", age: 25 };
console.log(obj.valueOf()); // { name: "Alice", age: 25 }
console.log(obj.toString()); // "[object Object]"
```

```js
var now = new Date();
console.log(now.valueOf()); // 1648202702626
console.log(now.toString()); // "Fri Mar 25 2022 16:45:02 GMT+0800 (中国标准时间)"
```

通常情况下，我们不需要使用`valueOf()`和`toString()`方法来操作`function`和`object`对象，因为它们的默认实现已经很好地满足了我们的需求。但是，在某些特定的场景下，例如需要将函数转换为字符串或需要将对象转换为原始值时，可以使用`valueOf()`和`toString()`方法来实现自定义的类型转换。

## 为什么script标签要写到body标签的底部

[探究: 为什么JavaScript要在body标签尾部引入? - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/268048119)

首先说下网页解析流程

1. **Parse HTML** 该阶段生成了DOM Tree和CSSOM Tree;
2. **Layout** 将DOM Tree结合CSSOM Tree, 生成Layout Tree(又称Render Tree), 计算每个元素的尺寸和位置;
3. **Update Layout Tree** 更新Layout Tree;
4. **Paint** 生成PaintLayout Tree记录元素绘制顺序;
5. **Composite** 合成视图输出到屏幕;

js无论是放在head标签里还是body标签里都会阻塞HTML的解析、渲染

例外：js通过外部引入的方式时，此时js的下载会阻塞HTML的解析，但是不会阻塞HTML的渲染，知道js文件下载并执行结束之后HTML才会继续解析并渲染

别人的看法：

```js
JS 放在底部可以保证让浏览器优先渲染完现有的 HTML 内容，让用户先看到内容，体验好。另外，JS 执行如果涉及 DOM 操作，得等待 DOM 解析完成才行，JS 放在底部执行时，HTML 肯定都解析成了 DOM 结构。
//JS 如果放在 HTML 顶部，JS 执行的时候 HTML 还没来得及转换为 DOM 结构，可能会报错。
```



## CSS的link导入和import导入区别

- 1、从属关系：link是html的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等；而@import是css的语法，只有导入样式表的作用。
- 2、加载顺序：页面被加载时，link会和html同时被加载而；@import引入的 CSS 将在页面加载完毕后被加载。
- 3、兼容性：@import是 CSS2.1 才有的语法，所以只能在 IE5以上 才能识别；而link是 HTML 标签，所以不存在兼容性问题。
- 4、DOM：javascript只能控制dom去改变link标签引入的样式，而@import的样式不是dom可以控制的。
- 5、link方式的样式权重高于@import的权重。（如果对权重不是十分了解，可以看我之前的文章）

## TCP的可靠交付实现



# 突然想到的面试题

## 数组、字符串的方法



## js的严格模式

函数的声明只能在当前作用域的最顶层

函数不是作为对象的方法运行，而是单纯作为函数运行，`this`会指向顶层对象。但是，严格模式下，这时`this`会返回`undefined`。

## 各种数据类型的内存存放

- 基本类型（Primitive types）：包括数字、字符串、布尔值、null 和 undefined，它们都存储在栈内存中。
- 对象类型（Object types）：包括对象、数组和函数，它们都存储在堆内存中。
- 函数类型（Function types）：函数是对象的一种，所以它们的内存分配方式与其他对象相同，函数的函数体存储在堆内存中，但函数的引用（指针）会存储在栈内存中。
- 引用类型（Reference types）：包括对象、数组、函数等，它们在栈内存中存储一个引用，指向它们在堆内存中的位置。

## js获取对象属性的两种方法

.属性名和[属性名]

方括号表示法在以下情况下特别有用：

- 属性名包含空格或特殊字符
- 属性名保存在变量中，需要动态获取属性值的情况。

```js
const person = {
  'full name': 'John Smith'
};

console.log(person['full name']); // 输出 'John Smith'

const propName = 'age';
console.log(person[propName]); // 输出 undefined，因为 age 属性不存在
```

不同

- 在使用方括号表示法时，如果属性名不存在，会返回 undefined。而在使用点号表示法时，如果属性名不存在，会抛出一个错误

点号表示法

- 语法简单明了，直观易懂。
- 属性名必须是一个合法的标识符，不能包含空格、特殊字符等。
- 不能使用变量动态获取属性名。

方括号表示法

- 属性名可以是任何字符串，包括包含空格、特殊字符的字符串。
- 可以使用变量动态获取属性名。
- 语法稍显复杂，不如点号表示法直观。

## 深浅拷贝



## 为什么ES6的class是一个语法糖（或者async）

### ES5手动实现继承

- 方法1

```js
// 父类
function Animal(name) {
  this.name = name;
}

// 父类方法
Animal.prototype.sayHello = function() {
  console.log("Hello, I'm " + this.name);
};

// 子类
function Cat(name) {
  // 调用父类构造函数
  Animal.call(this, name);
}

// 子类继承父类的原型
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

// 子类方法
Cat.prototype.meow = function() {
  console.log("Meow, I'm " + this.name);
};

// 使用示例
var cat = new Cat("Kitty");
cat.sayHello(); // 输出 "Hello, I'm Kitty"
cat.meow(); // 输出 "Meow, I'm Kitty"
```

- 还有一个方法是借助**Object.setPrototypeOf(obj1, obj2)**

`Object.setPrototypeOf()` 方法是在 ECMAScript 6 （也称为 ES2015）中引入的，因此它在2015年之后的浏览器和 JavaScript 环境中可用。

在 ES6 之前，我们通常使用 `Object.create()` 方法来创建一个新对象，并将其原型设置为另一个对象。`Object.setPrototypeOf()` 方法的出现提供了一种更方便的方法来实现对象之间的继承关系。



需要注意的是，虽然 `Object.setPrototypeOf()` 方法非常方便，但是它也有一些性能问题，因为它会影响到对象的性能。因此，在实现继承时，建议使用其他更有效的方式，例如使用类或构造函数来创建对象。

- 利用Object.create()【看错了，这个就是第一种方法】

```js
// 定义父对象
var parent = {
  name: "Parent",
  sayHello: function() {
    console.log("Hello, I'm " + this.name);
  }
};

// 定义子对象
var child = Object.create(parent);
child.name = "Child";

// 调用父对象的方法
child.sayHello(); // 输出：Hello, I'm Child
```

### ES5和ES6的继承区别

ES5的继承时通过prototype或构造函数机制来实现。**ES5的继承实质上是先创建子类的实例对象，然后再将父类的方法添加到this上**（Parent.apply(this)）。

ES6的继承机制完全不同，**实质上是先创建父类的实例对象this（所以必须先调用父类的super()方法），然后再用子类的构造函数修改this**。

具体的：ES6通过class关键字定义类，里面有构造方法，类之间通过extends关键字实现继承。子类必须在constructor方法中调用super方法，否则新建实例报错。因为子类没有自己的this对象，而是继承了父类的this对象，然后对其进行加工。如果不调用super方法，子类得不到this对象。

ps：super关键字指代父类的实例，即父类的this对象。在子类构造函数中，调用super后，才可使用this关键字，否则报错。

## 手撕New

1. 创建一个新的空对象
2. 将空对象的`__proto__`指向构造函数的`prototype`。
3. 将这个空对象赋值给构造函数内部的`this`，并执行构造函数。
4. 如果返回值是一个对象就返回该对象，否则返回构造函数的一个实例对象

```js
      function myNew(Con, ...args) {
        // 1. 创建一个新的空对象
        const obj = {}
        // 2. 将空对象的 __proto__ 指向构造函数的原型
        obj.__proto__ = Con.prototype;
        // 3. 将this指向空对象
        let res = Con.apply(obj, args);
        // 4. 对构造函数返回值做判断，然后返回对应的值
        return res instanceof Object ? res : obj;
      }

      // 使用实例
      function Demo(name) {
        this.name = name;
      }
      let test = myNew(Demo, "useNew");
      console.log(test); // Demo {name: 'useNew'}
      console.log(test.__proto__ === Demo.prototype); // true
```

另外一种方式

- 创建了一个空对象，对象的`__proto__->Thin_User.prototype`
- 执行构造函数，并将`this`指向新对象
- 返回新对象

此外当构造函数返回值为对象时，直接返回这个对象

```js
function createObject(Con) {
    // 创建新对象obj
    // var obj = {};也可以
    var obj = Object.create(null);

    // 将obj.__proto__ -> 构造函数原型
    // (不推荐)obj.__proto__ = Con.prototype
    Object.setPrototypeOf(obj, Con.prototype);

    // 执行构造函数，并接受构造函数返回值
    const ret = Con.apply(obj, [].slice.call(arguments, 1));

    // 若构造函数返回值为对象，直接返回该对象
    // 否则返回obj
    return typeof(ret) === 'object' ? ret: obj;
}
```

## 手撕继承

### 原型链继承

对于父类，我们直接使用正常方法：

- 方法：把我们要继承的方法挂到父类的原型上
- 属性：直接在父类的构造函数里面传参

对于子类：

- 构建原型对象，并指向父类的实例
- ~~为原型对象添加指向父类的原型的__proto__指针~~
- 为原型对象添加constructor指针，指向我们的子类的构造函数

```js
// 父类
function Parent() {
    this.name = '写代码像蔡徐抻'
}
// 父类的原型方法
Parent.prototype.getName = function() {
    return this.name
}
// 子类
function Child() {}

// 让子类的原型对象指向父类实例, 这样一来在Child实例中找不到的属性和方法就会到原型对象(父类实例)上寻找
Child.prototype = new Parent()
Child.prototype.constructor = Child // 根据原型链的规则,顺便绑定一下constructor, 这一步不影响继承, 只是在用到constructor时会需要
//Child.prototype.__proto__ = Parent().prototype //原型对象添加指向父类的原型的__proto__指针

// 然后Child实例就能访问到父类及其原型上的name属性和getName()方法
const child = new Child()
child.name          // '写代码像蔡徐抻'
child.getName()     // '写代码像蔡徐抻'
```

缺点：

- 由于所有Child实例原型都指向同一个Parent实例, 因此对某个Child实例的父类引用类型变量修改会影响所有的Child实例
  在创建子类实例时无法向父类构造传参, 即没有实现super()的功能

### 构造函数继承

```js
function Parent(name) {
    this.name = [name]
}
Parent.prototype.getName = function() {
    return this.name
}
function Child() {
    Parent.call(this, 'zhangsan')   // 执行父类构造方法并绑定子类的this, 使得父类中的属性能够赋到子类的this上
}

//测试
const child1 = new Child()
const child2 = new Child()
child1.name[0] = 'foo'
console.log(child1.name)          // ['foo']
console.log(child2.name)          // ['zhangsan']
child2.getName()                  // 报错,找不到getName(), 构造函数继承的方式继承不到父类原型上的属性和方法
```

**构造函数继承的缺点:**

- 继承不到父类原型上的属性和方法

### 组合式继承

```js
function Parent(name) {
    this.name = [name]
}
//挂载到原型上，实现方法的继承
Parent.prototype.getName = function() {
    return this.name
}
function Child() {
    // 构造函数继承 实现类似于super的效果
    Parent.call(this, 'zhangsan') 
}
//原型链继承 
Child.prototype = new Parent()
Child.prototype.constructor = Child

//测试
const child1 = new Child()
const child2 = new Child()
child1.name[0] = 'foo'
console.log(child1.name)          // ['foo']
console.log(child2.name)          // ['zhangsan']
child2.getName()                  // ['zhangsan']
```

缺点：

- 不够优雅，子类在继承时会调用2次父类方法

### 寄生式组合继承

```js
function Parent(name) {
    this.name = [name]
}
//父类方法的继承
Parent.prototype.getName = function() {
    return this.name
}
function Child() {
    // 构造函数继承 父类属性的继承
    Parent.call(this, 'zhangsan') 
}
//原型链继承
// Child.prototype = new Parent()
Child.prototype = Parent.prototype  //将`指向父类实例`改为`指向父类原型`
Child.prototype.constructor = Child

//测试
const child1 = new Child()
const child2 = new Child()
child1.name[0] = 'foo'
console.log(child1.name)          // ['foo']
console.log(child2.name)          // ['zhangsan']
child2.getName()                  // ['zhangsan']
```

问题：由于子类原型和父类原型指向同一个对象

### 最终版

```js
function Parent(name) {
    this.name = [name]
}
//父类方法的继承
Parent.prototype.getName = function() {
    return this.name
}
function Child() {
    // 构造函数继承 父类属性的继承
    Parent.call(this, 'zhangsan') 
    //
}
//原型链继承 利用对象的浅拷贝
// Child.prototype = new Parent()
Child.prototype = Object.create(Parent.prototype)  //将`指向父类实例`改为`指向父类原型` ***
Child.prototype.constructor = Child
//测试
const child = new Child()
const parent = new Parent()
child.getName()                  // ['zhangsan']
parent.getName()                 // 报错, 找不到getName()
```

总结：

- 继承父类的属性，通过在子类的构造函数内部调用Father.call(this,arg1,arg2)
- 继承父类的方法：直接父类将方法挂载到原型上
- 继承父类的原型链：1.子类构造方法添加原型对象，原型对象指向构造函数

## 手撕call，apply，bind

### call

所以`call`的模拟思想为下面三步：

- 将函数`fn`设为`thisArg`的对象的方法
- 执行`thisArg.fn`
- 删除该函数

```js
//伪代码
Function.prototype.myCall = function (thisArg) {
    // this为调用myCall的函数
    thisArg.func = this;
    thisArg.func();
    delete(thisArg.func);
}
```

完善

```js
Function.prototype.myCall = function (thisArg) {
    //浏览器环境下，由于call方法的第一个参数可以不传
    thisArg = thisArg || window;
    thisArg.func = this;
    //将伪数组转为真数组
    const args = []
    for (let i = 1; i<arguments.length; i++) {
        args.push('arguments['+ i + ']')
    }
    //【arguments[0],arguments[1]】
    //执行函数
    const result = eval('thisArg.func(' + args +')')
    
    delete thisArg.func;
    //拿到函数执行的结果就是返回值
    return result;
}
```

总结：

- 在函数的原型上添加myCall方法
- 拷贝并执行this
- 删除

ES6版本

```js
Function.prototype.myCall = function (thisArg, ...args) {
    thisArg = thisArg || window;
    thisArg.func = this;
    args = args || []
    const result = thisArg.func(..args)
    delete thisArg.func;
    return result;
}
```

### 手撕apply

```js
Function.prototype.myApply = function (thisArg, arr) {
    thisArg = thisArg || window;
    thisArg.func = this;
    const args = []
    for (let i = 0; i<arr.length; i++) {
        args.push('arr['+ i + ']')
    }
    const result = eval('thisArg.func(' + args +')')
    delete thisArg.func;
    return result;
}
```

### 手撕bind【利用闭包】

```js
Function.prototype.myBind = function(context, ...args1){
  const that = this
  return function(...args2){
    return that.apply(context,[...args1,...args2])
  }
}

function myName(){
  console.log(this.name)
}
myName.myBind({name:'meng'})() // meng
```

ES5实现

```js
meFunction.prototype.myBind = function(){
	var args1 = Array.prototype.slice.call(arguments) // slice 实现拷贝
	var context = args1.splice(0,1)[0] // splice 会改变原数组
	var that = this
	return function(){
		var args2 = Array.prototype.slice.call(arguments)
		return that.apply(context,args1.concat(args2))
	}
}

function myName(){
  console.log(this.name)
}
myName.myBind({name:'meng'})() // meng
```

## 手撕对象的冻结

```js
var constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach( (key, i) => {
    if ( typeof obj[key] === 'object' ) {
      constantize( obj[key] );
    }
  });
};
```

## [手撕Promise ](https://juejin.cn/post/7032564107899322381)

## 手撕数组的深浅拷贝

```js
//浅拷贝
var arr = [{name: 'wens'},{age: '26'}];           //原数组 
var newArr1 = arr;                                //指向同一块堆地址
var newArr2 = arr.slice();                        //浅拷贝
var newArr3 = arr.concat();                       //浅拷贝
var newArr4 = [...arr]							//浅拷贝
```

```js
//深拷贝
var newArr4 = JSON.parse(JSON.stringify(arr));    //深拷贝
//通用方法
var deepCopy = function(obj) {
  // 只拷贝对象
  if (typeof obj !== 'object') return;
  // 根据obj的类型判断是新建一个数组还是一个对象
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    // 遍历obj,并且判断是obj的属性才拷贝
    if (obj.hasOwnProperty(key)) {
      // 判断属性值的类型，如果是对象递归调用深拷贝
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
}
```

## 手撕节流函数和防抖函数

- 防抖

```js
//防抖
function debounce(fn, delay) {
    let timer = null
    const _debounce = function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn()
        }, delay) }
    return _debounce
}
```

- 节流

```js
//节流
function throttle(fn, interval) {
    let lastTime = 0
    const _throttle = function () {
        const nowTime = new Date().getTime()
        // console.log(new Date(nowTime));
        const remainTime = interval - (nowTime - lastTime)
        if (remainTime <= 0) {
            fn()
            lastTime = nowTime
        }
    }
    return _throttle
}
```

## this指向问题

[牛客最新前端笔试题解析(一) this指向题目解析及扩展(juejin.cn)](https://juejin.cn/post/7023944134561890318)

```js
var a = 10; 
var foo = { 
  a: 20, 
  b: function(){ 
    var a = 30; 
    return this.a; 
  },
  c: () => { 
    var a = 40; 
    return this.a; 
  }, 
}
var d = { 
  a: 50, 
};
console.log(a); //10
console.log(foo.b()); //20
console.log(foo.c()); //10
console.log(foo.b.bind(d)()); //50
console.log(foo.c.bind(d)()); // *** 10
```

## apply，bind和call区别

apply：传入的是数组	原函数会立即执行，且此方法只是临时改变thi指向一次

call：传入的是参数列表	call也只是临时改变一次this指向，并立即执行

bind：第一参数也是this的指向，后面传入的也是一个参数列表(但是这个参数列表可以分多次传入，call则必须一次性传入所有参数)

但是它改变this指向后不会立即执行，而是返回一个永久改变this指向的函数。

总结

- 三者都可以改变函数的this对象指向。
- 三者第一个参数都是this要指向的对象，如果如果没有这个参数或参数为undefined或null，则默认指向全局window。
- 三者都可以传参，但是apply是数组，而call是参数列表，且apply和call是一次性传入参数，而bind可以分为多次传入。
- bind 是返回绑定this之后的函数，便于稍后调用；apply 、call 则是立即执行 。

## 闭包实现私有方法



## 箭头函数与普通函数区别

箭头函数不可以作为构造函数

没有this会从上下文中查找this

箭头函数不绑定arguments，取而代之用rest参数解决

 箭头函数不能使用**yield**命令

## 宏任务和微任务

为了不影响主线程正常运行，就把那些耗时的时间（比如定时器，Ajax操作从网络读取数据等）任务挂起来，依次的放进一个任务队列中，等主线程的任务执行完毕后，再回过来去继续执行队列中的任务；

**提别强调：**

队列的优先级执行顺序为： 先执行同步和立即执行任务>microtask>macrotask

**宏任务包括**

会在一个(macro)task执行结束后，在下一个(macro)task 执行开始前，对页面进行重新渲染，**执行时机是页面渲染之后**

```
-------------------------------------
script(整体代码)
setTimeout
setInterval
UI交互事件
-------------------------------------
I/O

postMessage
MessageChannel
setImmediate(Node.js 环境)
```

**微任务包括** 

所以它的响应速度相比setTimeout（setTimeout是task）会更快，因为无需等渲染。也就是说，在某一个macrotask【宏】执行完后，就会将在它执行期间产生的所有microtask【微】都执行完毕（在渲染前）

有个笔试题的promise是微任务【个人感觉promise本身是同步任务，但是promise.then()是微任务】

**执行时机是页面渲染之前**

```
Promise.then
Object.observe
MutationObserver
process.nextTick(Node.js 环境)
```

**事件循环机制**

对于 `Promise.all([])`，返回的 Promise 立即被解决，其 `then` 回调函数会在下一个微任务中执行，因为在当前任务队列中没有待执行的任务。因此，`console.log('all')` 会被输出。

对于 `Promise.race([])`，返回的 Promise 立即被解决，其 `then` 回调函数也会在下一个微任务中执行，因为在当前任务队列中没有待执行的任务。因此，`console.log('race')` 也会被执行。但是，由于空数组不包含任何待解决的 Promise，因此 `race` 不会发生竞争，`then` 回调函数会立即执行，输出 `race`。

例子

```js
setTimeout(()=>{console.log('宏')},0)
new Promise (()=>console.log('微'));
setTimeout(()=>{console.log('宏')},0)
//输出结果是
微
宏
宏
---------------------
    原因：promise内部是同步任务，先执行，然后两个setTimeout是宏任务，后执行
```

```js
setTimeout(()=>{console.log('宏')},0)
new Promise((resolve,reject)=>{console.log("hong, promise")}).then(console.log('微'));
setTimeout(()=>{console.log('宏')},0)

init.js:1 hong, promise
init.js:1 微
init.js:1 宏
init.js:1 宏
---------------------
    由此推断先执行同步任务 微任务 宏任务
```

最后看一道笔试题

```
沒了
```

总结

![image-20230326094412295](C:\Users\hang\AppData\Roaming\Typora\typora-user-images\image-20230326094412295.png)

1，7，6，8，2，4，3，5，9，11，10，12。

笔试题

```js
console.log('datagrand1'); //datagrand1
setTimeout(() => { 
  console.log('datagrand2'); 
}); 

const p1 = new Promise(resolve => { 
  console.log('datagrand3'); //
  resolve(); 
}); 

p1.then(() => { 
  console.log('datagrand4'); //
}); 

console.log('datagrand5'); //

const p2 = new Promise(resolve => { 
  console.log('datagrand6'); //
  resolve(); 
}); 

p2.then(() => { 
  console.log('datagrand7'); //
}); 
/**
 * datagrand1
 * datagrand5 *** datagrand3
 * datagrand3 *** datagrand5
 * datagrand6
 * datagrand4
 * datagrand7
 * datagrand2
 */
出错是因为我把同步任务谁先到谁先执行的原理忘了【一点小失误】
```

**另外一道与立即执行函数和var变量相关的问题**

```js
for (var i = 0; i < 5; i++) { 
  (function() { 
    setTimeout(function() { 
        console.log(i); 
  }, i * 1000); 
  })(i); 
}
```

5个5

变式（闭包问题）

```js
for (var i = 0; i < 5; i++) {
  (function(j) {
    setTimeout(function() {
         console.log(j);
    }, j * 1000);
  })(i);
}
```

0 1 2 3 4

## 了解Generator吗

## js的预编译过程

### 函数预编译(建立`AO(Activation Object)`)

```
变量提升（变量声明）
形参传递
函数定义
执行
```

### 全局预编译(GO(Global Object))

```
变量提升（变量声明）
函数定义
执行
```

原文：[JavaScript之预编译学习(内含多个面试题) - 掘金 (juejin.cn)](https://juejin.cn/post/7019108835197452301)

## babel的执行过程

## ES6数组新增的方法find和flat（包括手撕）

## 前端跨域问题及解决方案



### 深入问

script标签有哪些常用的属性：

- 默认的type类型，会将script作为js语句块来对待

```html
<script type="text/javascript"></script>
```

- json类型，会将script作为一个数据块来对待


```html
<script type="application/json"></script>
```

### 了解content-type字段吗

Content-Type表示内容类型和字符编码。内容类型也叫做MIME类型。

是服务器的响应头里面的一个字段常见的有

- Content-Type: application/json;
- Content-Type: text/javascript;
- Content-Type: text/html；charset=utf-8;【浏览器将会将响应的内容当做是一个`html`文件来解析处理】

请求头

- application/x-www-form-urlencoded【**表单提交**】
- multipart/form-data【**文件上传**】
- application/json【前后端分离最常用】
- text/xml

响应头

- text/html ： HTML格式

- text/plain ：纯文本格式

- application/json：json格式

- text/xml ： XML格式
-  image/gif ：gif图片格式
 - image/jpeg ：jpg图片格式
  - image/png：png图片格式
 - application/pdf：pdf格式
- application/msword ： Word文档格式

- application/octet-stream ： 二进制流数据（如常见的文件下载）

## token和cookie的区别

**那么 Cookie 的作用是什么呢：**

它的出现，就是来弥补 HTTP 无状态的问题的，Cookie 可以作为一个状态保存的状态机，用来保存用户的相关登录状态，当第一次验证通过后，服务器可以通过 set-cookie 令客户端将自己的 cookie  保存起来，当下一次再发送请求的时候，直接带上 cookie 即可，而服务器检测到客户端发送的 cookie 与其保存的 cookie 值保持一致时，则直接信任该连接，不再进行验证操作

**token的作用：**

Token，简单来说，就是类似 cookie 的一种验证信息，客户端通过登录验证后，服务器会返回给客户端一个加密的 token，然后当客户端再次向服务器发起连接时，带上token，服务器直接对token进行校验即可完成权限校验。

为了验证用户登录情况以及减轻服务器的压力，减少频繁的查询数据库，使服务器更加健壮

token出现原因：

- 相较于 Cookie，token 需要自己存储，自己进行发送，不存在跨域限制，因此 Token 更加的灵活
- cookie内存限制为4kb，token无内存限制
- 采用 Cookie 的话，由于所有用户都需要在服务器的 Session 中存储相对应的用户信息，token不需要
- token往往存储在浏览器本地存储如localStorage里面

### cookie和session的区别

(1)cookie数据存放在客户的浏览器上，session数据放在服务器上
(2)cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗,如果主要考虑到安全应当使用session
(3)session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能，如果主要考虑到减轻服务器性能方面，应当使用COOKIE
(4)单个cookie在客户端的限制是3K，就是说一个站点在客户端存放的COOKIE不能3K。
(5)所以：将登陆信息等重要信息存放为SESSION;其他信息如果需要保留，可以放在COOKIE中

### Cookie,localStorage和SessionStorage区别

localStorage和SessionStorage区别:

![image-20230412194132682](C:\Users\hang\AppData\Roaming\Typora\typora-user-images\image-20230412194132682.png)

## 单页应用和多页应用

单页应用

只有一张Web页面的应用，是一种从Web服务器加载的富客户端，单页面跳转仅刷新局部资源 ，公共资源(js、css等)仅需加载一次，常用于PC端官网、购物等网站

多页应用

多页面跳转刷新所有资源，每个公共资源(js、css等)需选择性重新加载，常用于 app 或 客户端等

具体对比分析：

|                   | 单页面应用（SinglePage Web Application，SPA）                | 多页面应用（MultiPage Application，MPA）                     |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 组成              | 一个外壳页面和多个页面片段组成                               | 多个完整页面构成                                             |
| 资源共用(css,js)  | 共用，只需在外壳部分加载                                     | 不共用，每个页面都需要加载                                   |
| 刷新方式          | 页面局部刷新或更改                                           | 整页刷新                                                     |
| url 模式          | a.com/#/pageone   a.com/#/pagetwo                            | a.com/pageone.html   a.com/pagetwo.html                      |
| 用户体验          | 页面片段间的切换快，用户体验良好                             | 页面切换加载缓慢，流畅度不够，用户体验比较差                 |
| 转场动画          | 容易实现                                                     | 无法实现                                                     |
| 数据传递          | 容易                                                         | 依赖 url 传参、或者cookie 、localStorage等                   |
| 搜索引擎优化(SEO) | 需要单独方案、实现较为困难、不利于SEO检索 可利用服务器端渲染(SSR)优化 | 实现方法简易                                                 |
| 试用范围          | 高要求的体验度、追求界面流畅的应用【场景：后台管理系统】     | 适用于追求高度支持搜索引擎的应用【场景：电商平台，企业官网】 |
| 开发成本          | 较高，常需借助专业的框架                                     | 较低 ，但页面重复代码多                                      |
| 维护成本          | 相对容易                                                     | 相对复杂                                                     |

**单页面应用如何实现前端首屏优化？**

# promise篇

## 关于promise与async/await笔试题

```js
async function async1 () {
  console.log('async1 start');//2
  await async2();
  
  console.log('async1 end');//4
}
async function async2 () {
  console.log('async2');//3
}

console.log('script start');//1

setTimeout(() => {
  console.log('setTimeOut');
}, 0);

async1();

new Promise(function (resolve) {
  console.log('promise1');//
  resolve();
}).then(function () {
  console.log('promise2');
})
console.log('script end');


/**
 * script start
 * async1 start
 * async2
 * script start***
 * promise1
 * script end
 * asnyc1 end
 * promise2
 * setTimeOut
 */
```



# 性能优化篇

## 路由懒加载：

整个网页默认是刚打开就去加载所有页面，路由懒加载就是只加载你当前点击的那个模块。

按需去加载路由对应的资源，提高首屏加载速度（tip:首页不用设置懒加载，而且一个页面加载过后再次访问不会重复加载）。

实现原理：将路由相关的组件，不再直接导入了，而是改写成异步组件的写法，只有当函数被调用的时候，才去加载对应的组件内容。

```js
routes: [
    { path: '/login', component: () => import('@/views/login/index.vue') },
    { path: '/home',  component: () => import('@/views/home/home.vue') }
  ]
```

## cdn加速

# 前端安全篇

[前端网络安全&防范方式 看完这篇就够了 - 掘金 (juejin.cn)](https://juejin.cn/post/7101144447743688712)



## csrf[Cross-site request forgery 跨站请求伪造]

[(55条消息) Web前端安全策略之CSRF的攻击与防御_「零一」的博客-CSDN博客](https://blog.csdn.net/l_ppp/article/details/106432572)

攻击原理：跨站请求伪造，英文全称为Cross Site Request Forgery ， 缩写CSRF，这种攻击模式用通俗易懂的话来讲就是：攻击者借用你的用户身份，来完成一些需要依靠用户信息来完成的事情，例如转账 、发送邮件……

特征：

- 攻击发起在第三方网站，而不是被攻击的网站。
- 攻击者是冒充受害者提交操作，而不是直接窃取用户信息数据
- 整个过程攻击者是没有获取到用户的 `Cookie` ，而是冒充
- 跨站攻击很难防范，因为都发生在第三方的网站

解决方案：

- 增加一个验证码， 服务端判断验证码是否正确
- 使用refer验证，同源检测
- 参数伪造 token
- Cookie 安全设置 SameSite 同源检测，Cookie` 设置了 SameSite=strict 则表示完全禁用第三方站点请求头携带 `Cookie

## XSS 跨站脚本攻击

- 顾名思义 反射型 的 XSS 恶意脚本存在 URL 里面，存储 XSS 的代码是放在数据库里面的。
- 反射型 XSS 攻击通常通过 URL 传递参数的功能，例如网站或者恶意跳转
- 存储型 XSS 攻击 在 保存用户数据的网站，例如论坛发帖的时候，或者用户私信
- 而基于 DOM 的 XSS 攻击中，主要是因为浏览器端的出现的安全漏洞做成的，因为不需要通过请求服务器就能实现，另外两种是属于服务器端的安全漏洞

解决方案：

加载脚本的方法,存在漏洞将一些不可预计的脚本加载到页面上

- .innerHTML
- .outerHTML
- document.write()

Vue/React 技术栈，同样是原理，不过是换了 API 来实现方式

- v-html
- dangerouslySetInnerHTML

DOM 中的监听器

- location
- onload
- onclick
- onerror

定时器 和 eval 将一些不可信的字段拼接并且传递到 API

- setTimeout
- setInterval
- eval

1. 永远不用在用户提交的内容上使用v-html【js中叫做innerHTML】
2. cookie设置SameSite同源检测【SameSite = strict 禁止第三方站点携带cookie】
3. 输入验证 phone，URL，电话号码，邮箱
4. 开启浏览器的 XSS防御：Http Only Cookie 浏览器的Cookies 在设置的时候 加入 `HttpOnly` 属性，禁止js代码读取cookie

## CSP 内容安全策略

- 一个网站管理者想要所有内容均来自站点的同一个源 (不包括其子域名) 同源策略原则
- 所有脚本必须从特定主机服务器获取可信的代码 用户的数据不会发送到外域。禁止外域提交的操作
- 禁止使用内联脚本，禁止未授权的脚本执行

具体使用【meta标签配置csp】

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';">
```

## 点击劫持 X-Frame-Options

sandbox 属性 它对页面的操作施加限制，包括阻止弹出窗口、阻止插件和脚本的执行以及执行同源策略。主要针对 iFrame 合法使用

```html
Content-Security-Policy: sandbox;
Content-Security-Policy: sandbox <value>;
```



## form表单验证，阻止默认事件**


# 补充

## vue实现绑定为何后面是字符串

- `eval()`函数计算`JavaScript`字符串，并把它作为脚本代码来执行。

# 遇到的问题

函数参数的解构赋值那点不太能理解默认值那点

模板编译

```
//   function aid(arr, depth){
//     for (let k of arr){
//       if (Array.isArray(k)){
//         aid(k, depth + 1);
//       }else{
//         count = Math.max(count, depth)
//       }
//     }
//   }
//   aid(arr, 1);
//   return count;
// }
function getMaxDepth1(arr){
  // let max = 1
  let max = 1
  let depth = 1
  for (let i of arr){
    if (Array.isArray(i)){
      depth = 1 + getMaxDepth1(i)
    }else{
      max = Math.max(depth,max)
    }
  }
  return max
}
console.log(getMaxDepth1([[1], [[1, 2]], [[[[1, 2, 3]]]]]));
console.log(getMaxDepth1([1,2,[3]]));
```

