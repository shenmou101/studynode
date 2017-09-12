/*
* 构造函数的私有属性可以通过实例化被复制
* 原型上的公有属性不会被复制，而是通过原型链查找到
* */
function Person() {
  this.name = 'zfpx'
}
Person.prototype.eat = function () {
  console.log('吃饭');
};

function Student() {
  this.stu = 1;
}

Student.prototype = new Person();

var s = new Student();
s.eat();
console.log(s.name);