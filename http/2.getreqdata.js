//导入核心模块http
var http=require('http');

var server=http.createServer(function (req,res) {
    console.log(req.method);    //请求的方法
    console.log(req.url);   //请求的URL
    console.log(req.headers);   //请求的头

    res.statusCode=404; //设置响应码
    res.setHeader('Content-Type','text/html;charset=utf-8'); //设置响应头
    res.write('hello');//响应体
    res.end('over')
}).listen(8080,'localhost');