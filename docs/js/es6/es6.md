# es6 
## 常识
es6 = es2015 2016年6月修订 
##es6支持程度检测
http://ruanyf.github.io/es-checker/

```js
$ npm install -g es-checker
$ es-checker

=========================================
Passes 24 feature Dectations
Your runtime supports 57% of ECMAScript 6
```
## babel
Babel 转码器 可以将es6转换为es5


# let与const


### 6种声明变量的方法
- var function `es5就有`
- let const import class `全局变量与顶层对象脱离关系`

### 顶层对象 
- 浏览器中是window
- node中是global

- 都可以取到顶层对象的方法 判断或垫片的实现


## let  
### 没有变量提升

```js

console.log(b)
let b = 1
//  b is not defined
   
console.log(a)
var a = 1
//  undefined

```

### 不能重声明
```js

let a = 10;
let a = 10; // 报错 不能重复声明

```
### 有自己的作用域
```js
{
	var a = 1
}

console.log(a)
// 1


{
	var b = 1
}

console.log(b)

// b is not defined




var tmp = new Date();

function f() {
   // ******因为var有变量提升 并不会访问 外层的tmp*******// 
  console.log(tmp);
  if (false) {
    var tmp = 'hello world';
  }
}

f(); // undefined
```
隐蔽的错误
``` js
// 不一定报错 看浏览器的是想
x = y 时 y还没有被声明
function bar(x = y, y = 2) {
  return [x, y];
}

bar(); 
// 报错 y is not defined
```


## const 
### 一旦声明只读常量就不能修改
```js
const PI = 3.1415926
PI = 3 // 报错

const obj = {a: 2}
obj.a  = 3
// 引用类型存储的是地址，obj地址下的 a = 3

// a  = 3


obj = {} // 报错
```
<!-- // 就像一个礼物 引用类型就像包装了一个盒子，只要盒子没变
地址就像盒子
礼物在盒子中


 -->

 # 变量的解构赋值
1.数组的解构赋值
```js
let [a, b, c] = [1, 2, 3]
// a = 1 b =2 c= 3


let [a, b, ...c] = [1, 2, 3,4 ,5, 6]
// a = 1 b =2 c= [3, 4, 5, 6]


let [a, [b], c] = [1, [2, 3], 4]
// a = 1 b = 2 c= 3


// 设置默认值
let [a, [b], c, d = 999] = [1, [2, 3], 4]
// 999

// 特殊的结构赋值
let arr = [1, 2, 3, 4]
let {0 : first, [arr.length - 1] : last} = arr;
// first 1
// last  4
```


2.对象的解构赋值

```js
// 
let {a, b} = {a: 1, b: 2, c:3}
// a = 1  b= 2

// 起别名（重命名）
let {a: c, b: d} = {a: 1, b: 2, c:3}
// c = 1 d = 2

// 深层嵌套结构
obj = {
	a: {b: [1,2]}
}
// a 不会被结构出来
let {a: {b} } = obj
// b [1, 2]

// 结构复制的默认值
let {a, b, d = 999} = {a: 1, b: 2, c:3}
// d = 999

// 提前定义在赋值
let x;
({x} = {x: 1});
```

3.字符串的解构赋值(类数组) 

```js
// 装换为类数组结构赋值
let str = 'hello' 
let [a, b, c, d, e] = str


let [a,b,c,d,e] ="Hello";
    // a = h  ,b = e ···

```
4.数值和布尔值的解构赋值
```js
// 会先转换为对象
let {toString: s}  = '111'
undefined
s === String.prototype.toString
// true


let {toString: s}  = true
undefined
s === Boolean.prototype.toString
// true

```

5.函数参数的解构赋值
```js
// 参数的形式

    // 数组
    function fun([x, y]) {
        return x + y
    }
    fun([1,2])

    // 给默认值
    function fun([x = 1, y = 1] = []) {
        return x + y
    }
    fun()


// 对象
// 数组
    function fun({x, y}) {
        return x + y
    }
    fun({x: 1, y:2})
    // 3
    // 给默认值
     function fun({x = 1, y = 2} = {}) {
        return x + y
    }
    fun()
    // 3

```


```js
// 我认为的小技巧
[1, undefined, 2].map(item = 'yes' => item)
// 1, yes, 2

// Boolean 是个函数
[1, undefined, 2].filter(Boolean)
```


## 字符串的扩展
