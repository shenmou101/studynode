var fs = require('fs');
var ws = fs.createWriteStream('1.txt',{
    flags:'w',   //默认为w 清空并写入 a 从文件末尾追加并写入
    start:1,
    highWaterMark:1
});
/*var flag = ws.write('a');
console.log(flag)
ws.write('b');
ws.end('c');*/

var max = 10;
var i = 0;
function write(){
    var flag = true;
    while(i<max && flag){
        var flag = ws.write(String(i++), function () {
            console.log('继续执行',i);
            write()
        })
    }
}

/*ws.on('drain', function () {
    console.log('继续执行',i);
    write()
});*/
write();