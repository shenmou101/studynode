//全局对象
//console
// 定时器
console.time('cost');
for(var i= 0;i<10000;i++){

}
console.timeEnd('cost');

//路径
console.log(__filename);//当前模块的绝对路径
console.log(__dirname);//当前模块所在目录的绝对路径

//setTimeout()
//setImmediate() 等于 setTimeout(function(){},0)  放在下一个事件环中立即执行