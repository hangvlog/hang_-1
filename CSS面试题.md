## css的filter

[彻底弄懂css filter滤镜 - 掘金 (juejin.cn)](https://juejin.cn/post/7004379703255498759)

# HTML相关

## **H5**新增的属性之类的：

语义化：

- < header >头部标签
- < nav >导航标签
- < article >内容标签
- < section >定义文档某个区域
- < aside >侧边栏标签
- < footer >尾部标签

 多媒体标签

- < audio > 音频
- < video > 视频

### 新增的语义化标签有什么用？

- 有利于SEO
- 使文档更具可读性，页面结构更清晰



## 行内元素？块级元素？

```
块级元素 block
 <address>  // 定义地址 
 <caption>  // 定义表格标题 
 <dd>      // 定义列表中定义条目 
 <div>     // 定义文档中的分区或节 
 <dl>    // 定义列表 
 <dt>     // 定义列表中的项目 
 <fieldset>  // 定义一个框架集 
 <form>  // 创建 HTML 表单 
 <h1>    // 定义最大的标题
 <h2>    // 定义副标题
 <h3>     // 定义标题
 <h4>     // 定义标题
 <h5>     // 定义标题
 <h6>     // 定义最小的标题
 <hr>     // 创建一条水平线
 <legend>    // 元素为 fieldset 元素定义标题
 <li>     // 标签定义列表项目
 <noframes>    // 为那些不支持框架的浏览器显示文本，于 frameset 元素内部
 <noscript>    // 定义在脚本未被执行时的替代内容
 <ol>     // 定义有序列表
 <ul>    // 定义无序列表
 <p>     // 标签定义段落
 <pre>     // 定义预格式化的文本
 <table>     // 标签定义 HTML 表格
 <tbody>     // 标签表格主体（正文）
 <td>    // 表格中的标准单元格
 <tfoot>     // 定义表格的页脚（脚注或表注）
 <th>    // 定义表头单元格
 <thead>    // 标签定义表格的表头
 <tr>     // 定义表格中的行
```

行内元素 inline

```
 <a>     // 标签可定义锚 
 <abbr>     // 表示一个缩写形式 
 <acronym>     // 定义只取首字母缩写 
 <b>     // 字体加粗 
 <bdo>     // 可覆盖默认的文本方向 
 <big>     // 大号字体加粗 
 <br>     // 换行 
 <cite>     // 引用进行定义 
 <code>    // 定义计算机代码文本
 <dfn>     // 定义一个定义项目
 <em>     // 定义为强调的内容
 <i>     // 斜体文本效果
 <kbd>     // 定义键盘文本
 <label>     // 标签为 input 元素定义标注（标记）
 <q>     // 定义短的引用
 <samp>     // 定义样本文本
 <select> // 创建单选或多选菜单
 <small>     // 呈现小号字体效果
 <span>     // 组合文档中的行内元素
 <strong> // 加粗
 <sub>     // 定义下标文本
 <sup>     // 定义上标文本
 <textarea>     // 多行的文本输入控件
 <tt>     // 打字机或者等宽的文本效果
 <var>    // 定义变量
```

行内块元素

```
<button> 
<input>   
<textarea> 
<select> 
<img>
```



# CSS面试题

## 实现元素居中

### 垂直水平居中

css3的transform

```css
  .root{
    width: 100%;
    height: 50vh;
    background-color: bisque;
    position: relative;
  }
  .son{
    width: 200px;
    height: 200px;
    background-color: aquamarine;
    position: absolute;
    --------------------------
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
     --------------------------
  }
```

flex布局

```css
  .root{
    width: 100%;
    height: 50vh;
    background-color: bisque;
          --------------------------
    display: flex;
    justify-content: center;
    align-items: center;
          --------------------------
  }
  .son{
    width: 200px;
    height: 200px;
    background-color: aquamarine;
  }

```

浮动

```css
  .root{
    width: 200px;
    height: 200px;
    background-color: bisque;
          --------------------------
    margin: 0 auto;
          --------------------------
  }
  .son{
          --------------------------
    width: 100%;
    height: 100%;
    float: left;
          --------------------------
    background-color: aquamarine;
  }
```

### 1. 水平居中

- inline/inline-block 元素：text-align:center
- block元素：margin：0，auto
- absolute元素：left: 50% + margin-left负值一半元素宽度
- absolute元素：left,right=0 + margin: 0 auto
- absolut元素: left:50% + transform: translate(-50%,0)
- absolute元素:默认父元素display:flex;justify-content:center;
- **以上方法是让块级元素水平居中，行内元素或者行内块元素水平居中给其父元素添加 text-align: center 即可。**
- ```css
  .header {
      width: 960px;
      margin: 0 auto;
  }
  ```

  

### 2. 垂直居中

- inline元素：line-height的值等于height值
- absolute元素：top:50% + margin-top负值一半元素高度
- absolute元素：top,bottom=0 + margin auto 0;
- absolute元素:top,bottom=0 + margin:auto 0;
- 弹性flex: 默认父元素display:flex; align-items: center;
- 单元格table-cell元素：父元素display: table-cell; vertical-align:middle

## 清除浮动

[(52条消息) CSS清除浮动的四种方法_柏灿的博客-CSDN博客](https://blog.csdn.net/shan1991fei/article/details/109388189)



## 盒子模型宽度计算

width + padding * 2 + border * 2。。。

## CSS画三角形

### 开口方向上下左右的

```css
/*尖角向下*/  
.root{
    width: 0;
    border-top: 100px solid red;
    border-bottom: 100px solid transparent;
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
  }
```

![image-20230327094533210](C:\Users\hang\AppData\Roaming\Typora\typora-user-images\image-20230327094533210.png)

### 两个方向结合

```css
  .root{
    width: 0;
    border-top: 100px solid red;
    border-bottom: 100px solid transparent;
    border-left: 100px solid red;
    border-right: 100px solid transparent;
  }
```

![image-20230327094500946](C:\Users\hang\AppData\Roaming\Typora\typora-user-images\image-20230327094500946.png)

## 实现一个扇形

```css
        #triangle{
            width: 0;
            border-top: 100px solid red;
            border-bottom: 100px solid yellow;
            border-left: 100px solid green;
            border-right: 100px solid blue;
            border-radius: 100px;
        }
```

## margin纵向重叠问题

```
相邻元素的margin-top和margin-bottom发生重叠
空白内容的<p> </p>
```

##  对margin的top left right bottom设置为负值，有何效果？

聊这这个问题我们需要知道：

- margin-top left是平移元素自身
- margin-right bottom 平移其他元素

效果:

- margin-top和margin-left负值，元素向上、向左移动
- margin-right负值，右侧元素左移，自身不受影响
- margin-bottom负值，下方元素上移，自身不受影响

## position有哪些值？有什么作用？

- static。默认值，不脱离文档流，top，right，bottom，left等属性不生效。
- relative。不脱离文档流，依据自身位置进行偏离，当子元素设置absolute，将依据它进行偏离。
- absolute。脱离文档流，依据top，right，bottom，left等属性在正常文档流中偏移位置。
- fixed。通过浏览器窗口进行定位，出现滚动条的时候，不会随之滚动。

## [css的Transform详解 - 掘金 (juejin.cn)](https://juejin.cn/post/6959407827047677965)

进度[30道HTML+CSS面试题（~持续更新中） - 掘金 (juejin.cn)](https://juejin.cn/post/7005766163409928200)到响应式了，后面的暂时不准备继续

## CSS的选择器有哪些类型？



## 复合选择器

后代选择器、子选择器、并集选择器、伪类选择器

### 有哪些常用的伪类选择器

```css
:hover
:focus
```



## 常见的简写及分开写

### 字体家族

```css
<style>
        /* 想要div 文字变倾斜 加粗 字号设置为16像素 并且是微软雅黑 */
        div {
            font-style: italic;
            font-weight: 700;
            font-size: 16px;
            font-family: 'Microsoft yahe';
            /* 复合属性：简写的方式  节约代码*/
            /* 顺序：font-style font-weight  font-size/line-height  font-family */
            font: italic 700 16px 'Microsoft yahe';
        }
</style>

```

### 文本家族

属性	表示	注意点
color	文本颜色	通常用十六进制，而且是简写形式 #fff
text-align	文本对齐	可以设定文字水平的对齐方式
text-indent	文本缩进	段落首行缩进
text-decoration	文本修饰	记住添加下划线 underline 取消下划线 none
line-height	行高	控制行与行之间的距离

### 背景家族


属性	作用	值
background-color	背景颜色	预定义的颜色值/十六进制/RGB代码
background-image	背景图片	url(图片路径)
background-repeat	是否平铺	repeat/ no-repeat /repeat-x/repeat-y
background-position	背景位置	length/position 分别是x 和y坐标
background-attachment	背景附着	scroll(背景滚动) /fixed(背景固定)
背景简写	书写更简单	背景颜色 背景图片地址 背景平铺 背景滚动 背景位置
背景色半透明	背景颜色半透明	background : rgba(0,0,0,0.3);后面必须是四个值
背景图片:实际开发常见于 logo 或者一些装饰性的小图片或者是超大的背景图片, 优点是非常便于控制位置.

## 不同类型的元素

### 行内元素：

常见的行内元素有<a>、<strong>、<b>、<em>、<i>、<del>、<s>、<ins>、<u>、<span>等

其中<span>标签是最典型的行内元素。有的地方也将行内元素称为内联元素。

行内元素的特点：

①：相邻行内元素在一行上，一行可以显示多个

-----------------------------------------------------------

②：高，宽直接设置是无效的【****】

③：默认宽度就是它本身内容的宽度【】

④：行内元素只能容纳文本或其他行内元素【】

-----------------------------------------------------------

- 特殊情况链接`<a>`里面可以放块级元素，但是给`<a>`转换一下块级模式最安全

### 块元素🔥

常见的块元素有<h1>~<h6>、<p>、<div>、<ul>、<ol>、<li>等，其中<div> 标签是最典型的块元素。

块级元素的特点：

①：比较霸道，自己独占一行

②：高度，宽度，外边距以及内边距都可以控制

③：宽度默认是容器（父级宽度）的100%

④：是一个容器及盒子，里面可以放行内或块级元素

注意：

①：文字类的元素内不能使用块级元素

②：<p> 标签主要用于存放文字，因此<p>里面不能放块级元素，特别是不能放<div>

③：同理，<h1>~<h6>等都是文字类块级标签，里面也不能存放其他块级元素。

### 行内块元素

在行内元素中有几个特殊的标签 —— <img />、<input />、<td>，它们同时具有块元素和行内元素的特点

有些资料称它们为行内块元素

特点：

①：和相邻行内元素在一行上，但是他们之间会有空白缝隙。一行可以显示多个(行内元素特点)

②：默认宽度就是它本身内容的宽度(行内元素特点)

③：高度，行高，外边距以及内边距都可以控制(块级元素特点)

总结：

|            |                        |                        |                  |                        |
| ---------- | ---------------------- | ---------------------- | ---------------- | ---------------------- |
| 元素模式   | 元素排列               | 设置样式               | 默认宽度         | 包含                   |
| 块级元素   | 一行只能放一个块级元素 | 可以设置宽度高度       | 容器的100%       | 容器级可以包含任何标签 |
| 行内元素   | 一行可以放多个行内元素 | 不可以直接设置宽度高度 | 它本身内容的宽度 | 容纳文本或其他行内元素 |
| 行内块元素 | 一行放多个行内块元素   | 可以设置宽度高度       | 它本身内容的宽度 |                        |

## CSS的盒子模型有哪些

标准盒模型和怪异盒模型

传统盒子哪些属性会撑大盒子

影响盒子大小

padding【**如果盒子本身没有指定width/height属性，则此时padding不会撑开盒子大小**】

### 关于哪些盒子模型的auto情况

### 外边距合并

1. 相邻块元素垂直外边距的合并

解决方案：

**尽量只给一个盒子添加 margin 值**

1. 嵌套块元素垂直外边距的塌陷

解决方案：

1. **可以为父元素定义上边框**
2. **可以为父元素定义上内边距**
3. **可以为父元素添加 overflow: hidden**

**浮动、固定、绝对定位的盒子不会有塌陷问题**

计算方式

## 布局方式

标准流

浮动：

利用标准流布局上下，利用浮动布局左右

注意：浮动元素只影响浮动元素之前的元素，不影响后面的元素

## 清除浮动

为什么？

```
由于父级盒子很多情况下，不方便给高度，但是子盒子浮动又不占有位置，最后父级盒子高度为0时，就会影响下面的标准流盒子。
由于浮动元素不再占用原文档流的位置，所以它会对后面的元素排版产生影响
理想中的状态，让子盒子撑开父亲，有多少孩子，我父盒子就有多高
```

### 清除浮动的本质🔥

- 清除浮动的本质是**清除浮动元素造成的影响**
- 如果父盒子本身有高度，则不需要清除浮动
- 清除浮动之后，父级就会根据浮动的子盒子自动检测高度，父级有了高度，就不会影响下面的标准流了。

```
清除浮动的策略是：闭合浮动
只让浮动在父盒子内部影响，不影响父盒子外面的其他盒子
```

### 常见的清除浮动策略

```css
after伪元素法：父元素添加
.clearfix:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
.clearfix {
      /* IE6,7专有*/
      *zoom : 1; 
}
```

```css
双伪元素：父元素添加
.clearfix:before,.clearfix:after{
   content:"";
   display:table;
}
.clearfix:after {
     clear:both;
}
.clearfix {
  *zoom:1;
}

```

## 定位

![image-20230329185454154](C:\Users\hang\AppData\Roaming\Typora\typora-user-images\image-20230329185454154.png)

注意与总结

```
浮动元素、绝对定位(固定定位)元素都不会触发外边距合并的问题。
```

定位的扩展🔥
✍绝对定位的盒子居中
加了绝对定位的盒子不能通过 margin: 0 auto 水平居中，但是可以通过以下计算方法实现水平和垂直居中

①：left: 50%; 让盒子的左侧移动到父级元素的水平中心位置

②：margin-left: -100px; 让盒子向左移动自身宽度的一半

✍定位特殊特性
绝对定位和固定定位也和浮动类似。

①：行内元素添加绝对或者固定定位，可以直接设置高度和宽度

②：块级元素添加绝对或者固定定位，如果不给宽度或者高度，默认大小是内容的大小。

✍脱标的盒子不会触发外边距塌陷
浮动元素、绝对定位(固定定位)元素都不会触发外边距合并的问题。

✍绝对定位(固定定位)会完全压住盒子
①：浮动元素不同，只会压住它下面标准流的盒子，但是不会压住下面标准流盒子里面的文字（图片）

②：但是绝对定位（固定定位） 会压住下面标准流所有的内容。

③：浮动之所以不会压住文字，因为浮动产生的目的最初是为了做文字环绕效果的。 文字会围绕浮动元素

## CSS选择器优先级

选择器	格式	优先级权重
id选择器	#id	100
类选择器	.classname	10
属性选择器	a[ref=“eee”]	10
伪类选择器	li:last-child【解构伪类选择器】 或 a:hover【链接伪类】	10
标签选择器	div	1
伪元素选择器	li::after	1
相邻兄弟选择器	h1+p	0
子选择器	ul>li	0
后代选择器	li a	0
通配符选择器	*	0

!important > 行内样式>ID选择器 > 类选择器=伪类=属性 > 标签=伪元素选择器> 通配符 > 继承 > 浏览器默认属性

# CSS3新增

## 解构伪类选择器

### nth-child

| 公式 | 取值                            |
| ---- | ------------------------------- |
| 2n   | 偶数（等价于even）              |
| 2n+1 | 奇数（等价于odd）               |
| 5n   | 5 10 15 …（5的倍数）            |
| n+5  | 从第5个开始（包含第五个）到最后 |
| -n+5 | 前5个（包含第5个）              |

###   nth-child(n)和 nth-of-type(n)区别?

    1. **nth-child 对父元素里面所有孩子排序选择(序号是固定的)，先找到第n个孩子，然后看看是否和E匹配**
    2. **nth-of-type 对父元素里面指定子元素进行排序选择，先去匹配E,然后再根据E 找第n个孩子**

## transition过渡

## 转换(transform)【不会回流和重绘，使用GPU渲染】

- 移动：translate
- 旋转：rotate
- 缩放：scale

1. 定义2D转换中的移动，沿着X和Y轴移动元素
2. translate 最大的优点：**不会影响到其他元素的位置**
3. translate中的百分比单位是相对于自身元素的
   - `translate:(50%,50%);`
4. 对行内标签没有效果

## 前端性能优化

- css使用translate进行偏移【使用GPU加速】
- 节流。防抖
- 事件委派
- 异步组件【使用import导入而不是require导入】

## 浏览器的回流和重绘

- 浏览器的解析

1. **Parse HTML** 该阶段生成了DOM Tree和CSSOM Tree;
2. **Layout** 将DOM Tree结合CSSOM Tree, 生成Layout Tree(又称Render Tree), 计算每个元素的尺寸和位置;
3. **Update Layout Tree** 更新Layout Tree;
4. **Paint** 生成PaintLayout Tree记录元素绘制顺序;
5. **Composite** 合成视图输出到屏幕;



重绘：由于节点的几何属性发生改变或者由于样式发生改变而不会影响布局的，称为重绘，例如`outline`,`visibility`,`color`、`background-color`等。

回流：是布局或者几何属性需要改变就称为回流。回流是影响浏览器性能的关键因素，因为其变化涉及到部分页面（或是整个页面）的布局更新。一个元素的回流可能会导致了其所有子元素以及DOM中紧随其后的节点、祖先节点元素的随后的回流。

常见的引起回流：

- 页面一开始渲染的时候
- 浏览器的窗口发生变化(会重新计算位置和大小)
- 添加或删除可见的DOM元素
- 元素的大小(width,height,margin,padding,border-width)，位置发生变化
- 内容发生变化(如图片的url改变)

常见解决方案



- 使用css3硬件加速，可以让transform、opacity、filters这些动画不会引起回流重绘 。
- 对于动画的其它属性，比如background-color这些，还是会引起回流重绘的，不过它还是可以提升这些动画的性能。



## GPU渲染的使用情况

### GPU和CPU区别与对比

GPU的图形运算和处理能力远大于CPU

GPU将更多的空间（晶体管）用作执行单元，而不是像CPU那样用作复杂的控制单元和缓存（CPU需要同时很好的支持并行和串行操作，需要很强的通用性来处理各种不同的数据类型，同时又要支持复杂通用的逻辑判断，这样会引入大量的分支跳转和中断的处理。这些都使得CPU的内部结构异常复杂，计算单元的比重被降低了）

对于CPU的并发与并行，并发【早期CPU单核】只是逻辑上的同时处理【实际上一个将CPU的时间片分割成了一个个小部分】

并行是真正意义上的同步，但是必须依赖于多核CPU实现

## CSS3动画

定义动画

```css
@keyframes 动画名称 {
   0%{
        width:100px;
   }  
   100%{
        width:200px;
   }
}
```

使用动画

```css
div {
       width: 200px;
       height: 200px;
       background-color: aqua;
       margin: 100px auto;
       /* 调用动画 */
       animation-name: 动画名称;
       /* 持续时间 */
       animation-duration: 持续时间;
    }
```

## 3D旋转rotate3d

## vertical-align🔥

```css
vertical-align: baseline | top | middle | bottom
```

vertical-align 只对行内与行内块元素、表格单元格元素生效：不能用它垂直对齐块级元素

## 图片底侧空白缝隙解决【被问过】

主要解决办法有两种：

1. 给图片添加 `vertical-align : middle | top |bottom` 等
2. 把图片转换为块级元素 `display:block;`，因为块级元素不会有`vertical-align` 属性

# CSS进阶面试问题

[(53条消息) CSS进阶班笔记(四)_生命是有光的的博客-CSDN博客](https://blog.csdn.net/Augenstern_QXL/article/details/119172527)

# 面经

## BFC



## xhr和fetch的区别

## TCP和UDP区别

## flex布局和grid布局的区别



## nextTick是微任务还是宏任务，为什么？

## 发布订阅模式手写

## http2为什么是安全的



# 手撕题

## 实现promise.all并挂载到原型上

# 项目问题

## 了解scoped属性吗

vue项目中：该样式只能适用于当前组件元素

实现原理：

```css
vue组件中

<p class="example">hi</p>
<style scoped>
p{
    background-color:red;
}

</style>
```

模版解析之后

```css
<p class="example" data-v-5558831a>hi</p>
p[data-v-5558831a]{
    background-color:red;
}
```

## deep了解吗

[CSS中的/deep/理解 - 掘金 (juejin.cn)](https://juejin.cn/post/7077795969441464327)

![image-20230808160913515](https://cdn.staticaly.com/gh/hangvlog/PICGO_ImgBed@main/2023/4image-20230808160913515.png)

