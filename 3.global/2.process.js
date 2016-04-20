//当前工作目录
console.log(process.cwd());

//切换到上级目录
process.chdir('..');
console.log(process.cwd());

//查看内存使用量  进程结束释放内存
//rss: 常驻内存 分配变量, heapTotal: 堆的总内存 用于分配对象 达到1.4G会挂掉, heapUsed: 堆已经使用的内存量
console.log(process.memoryUsage());

//放在当前任务列表的末尾 优先于setImmediate执行
setImmediate(function(){
    console.log('setImmediate1')
});
process.nextTick(function () {
    console.log('nextTick1');
    process.nextTick(function () {
        console.log('nextTick2');
        process.nextTick(function () {
            console.log('nextTick3')
        })
    })
});
console.log(module)

