var http = require('http');
//创建一个http服务器
//IP端口
//处理客户端请求
/*
* req 客户端的请求
* res 服务器端的响应
* */
http.createServer(function (req,res) {
    console.log(req.url)
    res.write('欢迎你访问本站');//向客户端发响应体
    res.end();
}).listen(8080);
