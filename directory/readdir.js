//2.读取目录下面的文件
var fs=require('fs');
fs.readdir('../directory', function (err,files) {
    console.log(files);
})
