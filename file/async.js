/**
 * Created by Administrator on 2016/3/29.
 */
//FIle System
var fs=require('fs');
function afterRead(err,data){       //data就是调用文件里的内容
    if(err){                        //如果报错则err有值
        console.error(err)
    }else {
        console.log(data.toString());
    }
}
/*
* 1.异步方法需要把回调函数传入
* 2.回调函数会在同步方法执行完毕后才执行
* */
fs.readFile('./index.html','utf8',afterRead);//读取文件完成调用回调函数
console.log('我先执行');