# JavaScript数组方法及面试这一篇就够了

数组的方法共计16种，

- join()：用指定的分隔符将数组每一项拼接为字符串

- push() ：向数组的末尾添加新元素

- pop()：删除数组的最后一项

- shift()：删除数组的第一项

- unshift()：向数组首位添加新元素

- slice()：按照条件查找出其中的部分元素

- splice()：对数组进行增删改，也可以截取数组的部分元素,会改变源数组

- fill(): 方法能使用特定值填充数组中的一个或多个元素

- filter():“过滤”功能

- concat()：用于连接两个或多个数组

- indexOf()：检测当前值在数组中第一次出现的位置索引

- lastIndexOf()：检测当前值在数组中最后一次出现的位置索引

- every()：判断数组中每一项都是否满足条件

- some()：判断数组中是否存在满足条件的项

- includes()：判断一个数组是否包含一个指定的值

- sort()：对数组的元素进行排序

- reverse()：对数组进行倒序

- forEach()：ES5 及以下循环遍历数组每一项

- map()：ES6 循环遍历数组每一项

- copyWithin():用于从数组的指定位置拷贝元素到数组的另一个指定位置中

- find():返回匹配的值

- findIndex():返回匹配位置的索引

- toLocaleString()、toString():将数组转换为字符串

- flat()、flatMap()：扁平化数组

- entries() 、keys() 、values():遍历数组

  # 数组方法简答

  ## 增加元素

  ```js
  //修改原有数组
  push
  unshift
  splice
  ```

  ## 删除元素

  ```js
  //修改原有数组
  pop
  shift
  splice//splice(start, deleteCount, item1, item2, itemN)
  ```

  ## 查找元素

  ```js
  findIndex == [] at
  includes
  slice //切片 浅拷贝 新数组
  
  ```

  ## 其他

  ```
  join
  
  ```

  ## 进阶方法

  ```
  //新数组
  map 
  filter
  
  ```

  

## 数组的方法

### reduce

语法: 数组名.reduce(function (prev,item,index,arr) {},初始值)

- prev :一开始就是初始值 当第一次有了结果以后；这个值就是第一次的结果
- item : 这个表示的是数组中的每一项
- index : 这个表示的是每一项对应的索引
- arr : 这个表示的是原数组

作用: 就是用来叠加的

返回值: 就是叠加后的结果

注意: 以return的形式书写返回条件

```js
var arr = [1, 2, 3, 4, 5]
var res = arr.reduce(function (prev, item) {
    return prev *= item
}, 1)
console.log(res);//120
```

案例

```js
<script>
	const arr = ["b", "c", "b", "c", "a", "b", "c"]
	const obj = arr.reduce((allNum, num) => {
		if (num in allNum) {
			allNum[num]++
		} else {
			allNum[num] = 1
		}
		return allNum
	},{})
	console.log(obj)  // object{a:1, b:3, c:3}
</script>
```

### map

```js
var arr = [1, 2, 3, 4, 5]
console.log('原始数组 : ', arr);
var res = arr.map(function (item) {
    return item*1000
})
console.log(res);
```

传入一个函数，函数的返回值就是新数组的每一项

### filter

传入一个函数，函数的返回值为真（自动转为bool值，只要返回值不为0就加入新数组）就是新数组的每一项

### every  

传入一个函数，函数的返回值全部为真返回true，否则为false

### some

传入一个函数，函数的返回值有真返回true，否则为false

### find

用来获取数组中满足条件的第一个数据

```js
var arr = [1, 2, 3, 4, 5]
console.log('原始数组 : ', arr);
var res = arr.find(function (item) {
    return item > 3
})
console.log(res)//4
```

### includes

返回一个布尔值 [`Boolean`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean) 。 如果在数组中（或 `fromIndex` 指定的范围中）找到了 `searchElement`，则返回 `true`，否则返回 `false`

```js
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true
```



## 数组的创建

### 字面量创建

```js
var arr4 = [];   //创建一个空数组
var arr5 = [20];   // 创建一个包含1项数据为20的数组
var arr6 = ["lily","lucy","Tom"];   // 创建一个包含3个字符串的数组
```

## 构造函数创建

### 无参构造

```js
var arr1 = new Array();   //创建一个空数组
```

### 有参构造

```js
var arr2 = new Array(20);   // 创建一个包含20项的数组 【所有元素都是undefined】
```

### ES6新增

在 ES6 中，将**可迭代对象**或者类数组对象作为第一个参数传入，Array.from()就能返回一个数组。

ES6中引入了迭代器与可迭代对象的概念，并且提供了对可迭代对象的相关支持，如`for...of`循环，`Map(iterable)`构造器，展开语法`...`等。让我们对数组外的数据集合的遍历操作也得到极大简化。

# 面试题

[(52条消息) 【JS面试题】16道高频面试数组题【面试复习看这一篇足够了】_js数组面试题_child10的博客-CSDN博客](https://blog.csdn.net/m0_46791709/article/details/107786269)

## 数组的深浅拷贝

date 4.4 之前的写的太浅容易被大厂问到嗝屁。下面是更深层次的理解。

### 赋值



### 数组浅拷贝

- ...扩展运算符

- Array.map（浅拷贝）double = (x) => x * 2;

- slice concat from

- Array.reduce（浅拷贝）

```js
numbers = [1, 2, 3];

numbersCopy = numbers.reduce((newArray, element) => {
  newArray.push(element);

  return newArray;
}, []);
```

- ```js
  numbersCopy = numbers.filter(() => true);
  ```

### 对象浅拷贝

- Object.assign() 该方法的第一个参数是拷贝的目标对象，后面的参数是拷贝的来源对象

缺点：

1. 它不会拷贝对象的继承属性；
2. 它不会拷贝对象的不可枚举的属性；
3. 可以拷贝 Symbol 类型的属性。

- 扩展运算符

### 深拷贝

1. 利用JSON对象实现【问题：可能存在数据丢失问题，】

2. 算法实现

3. Object.assign()拷贝【其实就是浅拷贝，但是当拷贝层数只有一层的时候浅拷贝就是深拷贝】

4. lodash实现深拷贝：Object.assign()拷贝

算法见下面

```js
//使用递归的方式实现数组、对象的深拷贝
function deepClone1(obj) {
  //判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
  var objClone = Array.isArray(obj) ? [] : {};
  //进行深拷贝的不能为空，并且是对象或者是数组
  if (obj && typeof obj === "object") {
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === "object") {
          objClone[key] = deepClone1(obj[key]);
        } else {
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}
```

常用方法：

```js
a = JSON.parse(JSON.stringify(b))
```

问题：JSON.stringify()原生序列化只能序列化对象的属性，方法是不能够被序列化的

对于一些类型是安全的【经过序列话和反序列化之后内容保持不变】

安全的：

- number
- string
- bool
- null
- object
- array

不安全：

- undefined
- symble

更全的总结

- 对于JavaScript中的六种原始类型，JSON语法支持数字、字符串、布尔值、null四种，不支持undefined，Symbol；
- NaN、Infinity和-Infinity序列化的结果是null；
- JSON语法不支持函数；
- 对于Set，Map，RegExp、Error对象，JSON语法无法保证序列化安全；
- 日期对象序列化的结果是ISO格式的字符串（调用了Date对象的toJSON方法），但JSON.parse()依然保留它们字符串形态，并不会将其还原为日期对象；
- JSON.stringify()只能序列化对象的可枚举的自有属性；

对比

|          | 第一层数据   |              | 更多层数据 |
| -------- | ------------ | ------------ | ---------- |
| 进行修改 | 基本数据类型 | 引用数据类型 |            |
| 赋值     |              |              |            |
| 浅拷贝   |              |              |            |
| 深拷贝   |              |              |            |
|          |              |              |            |



### 浅拷贝

方法过多：

- [...map]扩展运算符
- 

### 深拷贝

```js
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

MDN提供的方法copywithin

## 数组的去重

```js
let  fruits = ["banana", "apple", "orange", "watermelon", "apple", "orange", "grape", "apple"]
// 第一种方法
let uniqueFruits = Array.from(new Set(fruits))
//第二种方法
let uniqueFruits2 = [...new Set(fruits)]
```



## 数组求交集

这也是您在任何Javascript面试中面临的最普遍的挑战之一，因为它展示了你是否可以使用数组方法以及你的逻辑是什么。

```js
var numOne = [0, 2, 4, 6, 8, 8];
var numTwo = [1, 2, 3, 4, 5, 6];
var duplicatedValues = [...new Set(numOne)].filter(item=> numTwo.includes(item))
console.log(duplicatedValues); // returns [2, 4, 6]
```

# typeof和instanceof的区别是什么

ypeof和instanceof的区别是：typeof的返回值是一个字符串，用来说明变量的数据类型；instanceof的返回值是布尔值，用于判断一个变量是否属于某个对象的实例。
