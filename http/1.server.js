//导入核心模块http
var http=require('http');

/*
* 创建一个服务器
* 指定监听函数 每当有客户端请求到来的时候执行的函数，并返回响应
* request 代表客户端的请求 可以从中获取请求过来的信息
* response 代表向客户端发的响应 可以通过它向客户端发响应
* */
var server=http.createServer(function (request,response) {
    //write和end的参数只能是字符串或buffer，不能是其他类型
    var date=new Date();
    response.setHeader('Content-Type','text/html;charset=utf-8');//设置内容类型的响应头
    response.write(date.toString());//可以向客户端发送响应 向客户端说话
    response.write('world');//可以再说几句话
    response.end();//说完了 挂断 之后就不能write了
});
//在8080端口上监听，主机名localhost(可省略)等于127.0.0.1（回环地址）
server.listen(8080,'localhost');