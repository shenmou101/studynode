/*
* 每一个js文件都是独立的模块
* 模块内部的变量都是私有变量，其他模块无法访问
* */

function add(a,b) {
  return a+b;
}

//向外暴露一个add方法
exports.add = add;

//console.log(module);