/**
 * Created by Administrator on 2016/3/30.
 */
var fs=require('fs');
/*
 //同步方式读取文件内容
 var name=fs.readFileSync('./name.txt');
 var age=fs.readFileSync('./age.txt','utf8');
 console.log(name,age)
 */

//1.回调函数嵌套实现多个异步操作完成之后执行的回调 缺点：耗时长=m+n;代码可读性差
/*fs.readFile('./name.txt','utf8',function(err,name){
    fs.readFile('./age.txt','utf8',function(err,age){
        console.log(name,age)
    });
});
fs.readFile('./name.txt',function(err,name){    //如果不加utf8
    fs.readFile('./age.txt','utf8',function(err,age){
        console.log(name,age)
    });
});*/

//计数器
var person={};
function show(){
    if(Object.keys(person).length==2){
        console.log(person)
    }
}
fs.readFile('./name.txt','utf8',function(err,name){
    person.name=name;
    show()
});
fs.readFile('./age.txt','utf8',function(err,age){
    person.age=age;
    show()
});