# js基础

## 什么是操作符：

系统预设好的一种操作，丢进数据就能得到我们想要的结果

## NaN:

1. 在ECMAScript中，任何数值除以非数值会返回NaN，因此不会影响其他代码的执行
2. 任何涉及NaN的操作都会返回NaN
3. NaN与任何值都不相等，包括NaN本身
4. isNaN（）在接收到一个值之后，会尝试将这个值转换为数值。某些不是数值的值会直接转换为数值，而任何不能被转换为数值的值都会导致这个函数返回true
## 非数值转换为数值：

Number（）、parseInt()、parseFloat（）

## 暂时未分类的知识：

typeof-简单的值类型区分、引用类型的值不好区分

undefind值是派生自null值的

alert（null ===undefined） //true

var messageAsBoolean = Boolean(message); //变量命名可读性

浮点数值计算会产生舍入误差








