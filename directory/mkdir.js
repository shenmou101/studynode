var fs=require('fs');
//1.创建目录
//要求父目录必须存在
//创建的是目录最后一层 而不是各层
//若要创建的目录已存在 则报错 Error: EEXIST: file already exists
/*

fs.mkdir('../directory/t', function (err) {
    if(err){
        console.log(err);
    }else{
        console.log('目录创建成功');
    }
});
*/

//自定义方法 强制创建目录 如果父文件夹不存在 则自动创建
function forcemkdir(path){
    var patharr=path.split("/");
    var pathlen=patharr.length;
    var pathcheck=patharr[0];
    for(var i=0;i<pathlen;i++){
        fs.mkdirSync(pathcheck);
        pathcheck+='/'+patharr[i+1]
    }
}

forcemkdir('t/t1/t2/t3/t4')

/*
fs.readdir(pathcheck, function (err) {
    if(err){    //如果路径读取不到说明路径不存在
        fs.mkdirSync(pathcheck);
        console.log(err);

    }else{  //如果路径存在则跳过

    }
})
pathcheck=pathcheck+"/"+patharr[i+1];*/
