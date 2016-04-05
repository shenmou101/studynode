//导入核心模块http
var http=require('http');
var fs=require('fs');
var server=http.createServer(function (req,res) {
    var url=req.url;
    if(url=="/index.html"){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        //指定文件路径，设置编码，得到data就是字符串类型的
        fs.readFile('./index.html','utf8', function (err,data) {    //上下的utf8没有关系
            res.write(data);
            res.end();
        })
    }else if(url=="/style.css"){
        res.setHeader('Content-Type','text/css;charset=utf-8');
        //指定文件路径，设置编码，得到data就是字符串类型的
        fs.readFile('./style.css','utf8', function (err,data) {    //上下的utf8没有关系
            res.write(data);
            res.end();
        })
    }else if(url=="/index.js"){
        res.setHeader('Content-Type','text/javascript;charset=utf-8');
        //指定文件路径，设置编码，得到data就是字符串类型的
        fs.readFile('./index.js','utf8', function (err,data) {    //上下的utf8没有关系
            res.write(data);
            res.end();
        })
    }

}).listen(8080,'localhost');