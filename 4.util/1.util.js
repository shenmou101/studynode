var util = require('util');
//原型继承（子类可以继承父类原型上的方法）
 function Parent(){
    this.name = 'parent.name'
}
Parent.prototype.say = function () {
    console.log(this.name)
};
function Child(){
  console.log('run Child()');
  this.name = 'child.name'
}

util.inherits(Child,Parent);
var child = new Child;   //实例化就是执行一次Child
child.say();
console.log(util.inspect(child));//把对象转成字符串 不会把原型上的属性转化 只转化可枚举属性

//给对象定义属性
var obj = new Object();
obj.name = 'dengjia';
Object.defineProperty(obj,'age',{
    value:23,//属性值
    configurable:false,//是否可删除
    writable:false,//值可以改变
    enumerable:true //是否可枚举
});
Object.defineProperty(obj,'id',{
    enumerable:false //是否可枚举
});
for(var attr in obj){
    console.log('for in '+attr)
}
//取得对象的可枚举属性
console.log(util.inspect(obj));
console.log(util.inspect(obj,{
    showHidden:true
}));
console.log(util.inspect(obj.name));

delete obj.age; //删除对象的属性
obj.age = 24;
console.log(util.inspect(obj));

//判断类型
console.log(util.isArray([]));
console.log(util.isRegExp(/\w+/));
console.log(util.isDate(new Date));
console.log(util.isError(new Error));
console.log(util.isObject(obj));