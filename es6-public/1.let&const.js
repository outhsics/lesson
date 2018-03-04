// var有很多问题
// 1.同一个变量用var可以声明多次
// 2.var预解释 变量提升
// 3.var的作用域问题 全局作用域 函数作用域
// 4. 声明的变量可以更改 没有常量的概念

// 1）不能重复声明
var name = 'zfpx';
var name = 'jw'

let name = 'zfpx'
let name = 'jw'

// 2.变量提升
console.log(a);
let a = 1;

// 3.作用域
