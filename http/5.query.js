var http=require('http');
var mime=require('mime');
var url=require('url');     //引入新包
var server=http.createServer(function (request,response) {
    //使用新包url的parse方法把url转化成对象 true表示将query转化为对象方便取出value值
    //pathname 指的是路径名 问号和端口号中间的那一部分
    var urlObj = url.parse(request.url,true);
    console.log(urlObj);
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(urlObj.pathname == '/apple'){
        //query是查询字符串
        response.end(urlObj.query.num+'袋苹果');
    }

}).listen(8080,'localhost');
