var fs = require('fs');
var rs = fs.createReadStream('./1.txt',{
    flags:'r',  //表示打开之后想干什么 默认为r = read
    encoding:null,   //得到的数据是Buffer对象，如果指定编码，那么是字符串类型的
    start:4,    //从索引0开始
    end:6,   //读取字节的结束位置 包前又包后
    highWaterMark:5
});
rs.setEncoding('utf8');
//流是EventEmitter的子类
rs.on('data', function (data) {
    console.log(data);
    rs.pause(); //暂停读取文件
});
setTimeout(function(){
    rs.resume(); //5秒后恢复执行
},2000);
rs.on('end',function(){
    console.log('读完了')
});
rs.on('error', function (err) {
    console.log('出错了！',err)
});
