
var fs=require('fs');

//2.获取一个文件或目录详情
fs.readdir('../directory', function (err,files) {
    //循环文件列表
    files.forEach(function (file) {
        //获取文件的详情
        fs.stat('../directory/'+file,function(err,state){
            console.log(state.size);    //文件大小
            console.log(state.isDirectory());   //是否是目录
            console.log(state.isFile());    //是否是文件
        });
    });
});

//3.判断一个文件（或文件夹）是否存在
fs.exists('./stat.js', function (exisits) {
    console.log(exisits);
});
fs.exists('./file', function (exisits) {
    console.log(exisits);
});