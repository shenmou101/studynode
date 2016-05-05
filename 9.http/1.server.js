var fs =require('fs');
var http = require('http');
var path = require('path');
var mime = require('mime');
//创建一个http服务器
//IP端口
//处理客户端请求
/*
* req 客户端的请求
* res 服务器端的响应
* */

/*
var mime = {
    ".css":"text/css",
    ".html":"text/html",
    ".js":"text/javascript",
    ".jpg":"image/jpg"
};
*/

http.createServer(function (req,res) {
    console.log(req.url);
    //设置响应的类型
    if(req.url == '/clock'){
        res.end(new Date().toLocaleString());
    }else{
        res.setHeader('Content-Type',mime.lookup(req.url)+';charset=utf-8');
        fs.readFile('.' + req.url, function (err, data) {
            res.write(data);
            res.end();
        })
    }
}).listen(8080);
