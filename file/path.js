var fs=require('fs');
//处理路径
var path=require('path');
//合并路径
console.log(path.join('book','mysql.json'));
//seperator 分隔符
console.log(path.sep);

console.log(__filename);    //获取当前模块绝对路径
console.log(__dirname);     //获取当前模块所在的绝对目录

console.log(path.basename('path.js'));  //获取一个路径里文件的名

console.log(path.basename('path.js','.js'));  //获取一个路径里文件的名

console.log(path.extname('path.js'));  //获取一个路径里文件的扩展名

//以应用程序的所在目录为根起点,获取该目录中任意文件的绝对路径，也可理解为相对路径转绝对路径
console.log(path.resolve('textresolve','resolve.txt','..','resolve2.txt')); //..表示父级
