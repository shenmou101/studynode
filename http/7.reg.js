var fs=require('fs');
var http=require('http');
var mime=require('mime');
var url=require('url');     //引入新包
var users=[];
var server=http.createServer(function (request,response) {
    var urlObj = url.parse(request.url,true);
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(urlObj.pathname == '/'){
        fs.readFile('./7.reg.html', function (err,data) {
            response.end(data);
        });
    }else if(urlObj.pathname=='/reg'){
        //每当服务器收到客户端发过来的一段数据的时候就会触发data事件
        request.on('data', function (data) {    //data表示这次接收到的数据
            str+=data;
        });
        request.on('end', function () {
            console.log(str)
        })
    }

}).listen(8080,'localhost');
