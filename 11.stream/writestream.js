var fs = require('fs');
var ws = fs.createWriteStream('./1.txt',{
    flags:'a',   //默认为w 清空并写入 a 从文件末尾追加并写入
    start:1
});
ws.write('a');
ws.write('b');
ws.end('c');