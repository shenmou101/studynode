var path = require('path');
console.log(path.join(__dirname,'a','b','c'));
console.log(path.resolve());
//获得目录的绝对路径 参数按顺序进行层级拼接
console.log(path.resolve('a','..','b','d'));
console.log(path.resolve('/a','..','b','/d')); // /a代表D盘下的根路径

//获取当前路径的文件名
console.log(path.basename(__filename));     //获取文件的完整名 5.path.js
console.log(path.basename(__filename,'.js'));   //获取文件的文件名 5.path
console.log(path.extname(__filename));   //获取文件的扩展名 .js

console.log(path.sep);   //获取当前操作系统指定的目录分隔符 /\
console.log(path.delimiter);   //获取当前操作系统指定的环境变量分隔符 ；：

//relative 获取从一个路径访问另一个路径的路径
console.log(path.relative('../5.module', __dirname));

//normalize 将非标准的路径字符转化为标准路径字符串

/*
* 1.可解析. ..
* 2.多个杠转化为一个杠
* 3.windows下反杠会转成正杠
* 4.如果结尾以杠结尾，则保留
* */
console.log(path.normalize('a/../b////c/d/'));