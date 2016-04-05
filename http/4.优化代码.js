//导入核心模块http
var http=require('http');
var fs=require('fs');
var mime=require('mime')
var server=http.createServer(function (req,res) {
    var url=req.url;
    //如果没有指定文件名，或访问的是根目录，那么可以重定向到默认首页
    if(url=='/'){
        url='/index.html'
    }
    if(url=='favicon.ico'){
        return res.end('404')
    }
    res.setHeader('Content-Type',mime.lookup(url)+';charset=utf-8');    //利用mime包中的lookup方法可以获得指定url的content-type
    //指定文件路径，设置编码，得到data就是字符串类型的
    fs.readFile('.'+url,'utf8', function (err,data) {    //上下的utf8没有关系
        res.write(data);
        res.end();
    })
}).listen(8080,'localhost');