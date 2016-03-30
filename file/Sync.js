/**
 * Created by Administrator on 2016/3/30.
 */
//FIle System
var fs=require('fs');
/*
* 1.每一个同步方法和异步方法都是同步出现的
* 2.同步方法会阻塞主线程的执行，在数据没有返回之前不能执行后续代码
* 3.他不需要传递回调函数，通过函数返回值接收结果
* 4.
* */
try{
    var data=fs.readFileSync('./index.htm1l','utf8');//同步方法用变量保存返回值
}catch(err){
    console.error(err)
};
console.log(data)
console.log('我后执行');