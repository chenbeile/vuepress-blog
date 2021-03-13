# js基础

## 1.JavaScript规定了几种语言类型、几种内置对象
- 语言类型：Number，String，Boolean，Null，Undefined，Symbol，BigInt（访问：按值访问、存储：栈内存）
- 内置对象：String Number Boolean Object Function Array Date RegExp Error（访问：引用访问、存储：堆内存（Heap）中的对象（Object））
## 2.JavaScript对象的底层数据结构是什么

https://www.rrfed.com/2017/04/04/chrome-object/

## 3.Symbol类型在实际开发中的应用、可手动实现一个简单的Symbol

### 每个 Symbol 值都是唯一的，因此该值不与其它任何值相等

### 可以充当唯一的对象键

## 4.JavaSript中的变量在内存中的具体存储形式

### 变量分为基本类型和引用类型

### 基本类型和引用类型都会用到栈内存，引用类型会用到堆内存，引用类型在栈内存存储指向堆内存的指针

## 5.基本类型对应的内置对象，以及他们之间的装箱拆箱操作

### 装箱和拆箱

装箱是把基本类型转换为对应的内置对象，分为隐式和显式装箱
拆箱与装箱相反，把对象转变为基本类型的值

## 6.理解值类型和引用类型

## 7.null和undefined的区别

## 8.至少可以说出三种判断JavaScript数据类型的方式，以及他们的优缺点，如何准确的判断数组类型

## 9.可能发生隐式类型转换的场景以及转换原则，应如何避免或巧妙应用

## 10.出现小数精度丢失的原因，JavaScript可以存储的最大数字、最大安全数字，JavaScript处理大数字的方法、避免精度丢失的方法
## 11. this原理
this指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，实际上this的最终指向的是那个调用它的对象
```Javascript
function a(){
    var user = "blue";
    console.log(this.user); //undefined
    console.log(this); //Window}
a();
```
```Javascript
function a(){
    var user = "blue";
    console.log(this.user); //undefined
    console.log(this);　　//Window
}
window.a();
```
```Javascript
var o = {
    user:"blue",
    fn:function(){
        console.log(this.user); //blue    }
}
window.o.fn();
```
```Javascript
var o = {
    user:"blue",
    fn:function(){
        console.log(this.user); //blue    }
}
window.o.fn();
```
```Javascript
var o = {
    a:10,
    b:{
        a:12,
        fn:function(){
            console.log(this.a); //12        }
    }
}
o.b.fn();
```
```Javascript
var o = {
    a:10,
    b:{
        a:12,
        fn:function(){
            console.log(this.a); //undefined
            console.log(this); //window        }
    }
}
var j = o.b.fn;
j();
```

new操作符改变this指向
原理：new关键字会创建一个空对象，然后会自动调用一个函数apply方法，将this指向这个空对象，这样的话函数内部的this就会被这个空对象替代

new操作符创建实例4个阶段：

1. 创建一个新对象
2. 将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象）
3. 执行构造函数中的代码（为这个新对象添加属性）
4. 返回新对象

```Javascript
function Fn(){
    this.user = "blue";
}
var a = new Fn();
console.log(a.user); //blue
```


如果返回值是一个对象，那么this指向的就是那个返回的对象，如果返回值不是一个对象那么this还是指向函数的实例。(null虽然是对象，但是null比较特殊，this还是指向那个函数的实例)
```Javascript
function fn()  
{  
    this.user = 'blue';  
    return {};  
}
var a = new fn;  
console.log(a.user); //undefined
```
```Javascript
function fn()  
{  
    this.user = 'blue';  
    return 1;
}
var a = new fn;  
console.log(a.user); //blue
```
严格版中默认的this不再是window，而是undefined
