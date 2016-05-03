var fs = require('fs');
//fs.mkdirSync('a');
/*
//异步方法
fs.mkdir('a', function (err) {
    console.log(err)
});
fs.mkdir('a/b', function (err) {
    console.log(err)
});*/

//读取指定目录下面所有的文件，结果是数组
fs.readdir('./a', function (err,files) {
    console.log(files);
    files.forEach(function (file) {
        fs.stat('./a/'+file, function (err,stat) {
            if(stat.isFile()){
                fs.readFile('./a/'+file, function (err,data) {
                    console.log(data.toString())
                })
            }else if(stat.isDirectory()){
                console.log('这是一个目录')
            }
        })

    })
});

//获得文件的详情描述
fs.stat('./a',function(err,stat){
    console.log(stat)
});

//判断文件夹是否存在
fs.exists('./a', function (exists) {
    console.log(exists);
});

//获取文件的绝对路径
console.log(__dirname+'./a');

var path = require('path');
console.log(path.join(__dirname,'a'));