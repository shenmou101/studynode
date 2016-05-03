var path = require('path');
console.log(path.join(__dirname,'a','b','c'));
console.log(path.resolve());
//获得目录的绝对路径
console.log(path.resolve('a','b'));

//获取当前路径的文件名
console.log(path.basename(__filename));     //获取文件的完整名 5.path.js
console.log(path.basename(__filename,'.js'));   //获取文件的文件名 5.path
console.log(path.extname(__filename));   //获取文件的扩展名 .js

console.log(path.sep);   //获取当前操作系统指定的目录分隔符 /\
console.log(path.delimiter);   //获取当前操作系统指定的环境变量分隔符 ；：
