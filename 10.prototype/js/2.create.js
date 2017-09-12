/*
* Object.create()
* 通常用来实现对象的简单的继承
* */

function Person() {
  this.name = 'zfpx'
}

Person.prototype.eat = function () {
  console.log('吃饭')
};

var obj = {
  name: 'zfpx'
};
//创建一个对象，这个对象的原型等于obj
var obj2 = Object.create(obj);
console.log(obj, obj2, obj2.name);

/*
* 自定义create方法
* */
Object.mycreate = function (obj) {
  function Temp() {}
  Temp.prototype = obj;
  return new Temp();
};

var obj3 = Object.mycreate(obj);
console.log(obj3,obj3.name);