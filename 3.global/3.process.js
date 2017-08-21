//当前工作目录
console.log(process.cwd());

//切换到上级目录
process.chdir('..');    //chdir: change directory
console.log(process.cwd());     //cwd:current working directory

//查看内存使用量  进程结束释放内存
//rss: 常驻内存 分配变量, heapTotal: 堆的总内存 用于分配对象 达到1.4G会挂掉, heapUsed: 堆已经使用的内存量
console.log(process.memoryUsage());


console.log(module);

