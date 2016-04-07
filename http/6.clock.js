var fs=require('fs');
var http=require('http');
var mime=require('mime');
var url=require('url');     //引入新包
var server=http.createServer(function (request,response) {
    var urlObj = url.parse(request.url,true);
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(urlObj.pathname == '/'){
        fs.readFile('./clock.html', function (err,data) {
            response.end(data);
        });
    }else if(urlObj.pathname=='/clock'){
        response.end(new Date().toLocaleString());
    }   //先执行if 然后返回html页面并渲染并执行html的ajax，此时pathname已经是/clock了 执行else if

}).listen(8080,'localhost');
