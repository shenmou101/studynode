/**
 * Created by Administrator on 2016/3/30.
 */
//fs.writeFile(filename, data, [options], callback)
//fs.writeFileSync(filename, data, [options])
/*
*1.回调里的err data是由fs.writeFile决定的
*/
var fs=require('fs');
//同步方式向硬盘文件里写数据
fs.writeFileSync('./write1.txt','我在用同步方法写入数据');

/*异步方式
* flag 是表示要对此文件做何种类型的操作
* w 清空并写入
* a 在原有基础上追加
* */
fs.writeFile('./write2.txt','我在用异步方法写入数据',{flag:'a'}, function(err){  //回调方法只有一个参数error
    if(err){
        console.log(arguments);     //argument就是此包含的
    }
});

fs.appendFile('./write2.txt','追加方法');