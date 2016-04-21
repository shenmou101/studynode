var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
http.createServer(function (req,res) {
    req.setEncoding('utf8');
    if(req.url == '/'){
        fs.createReadStream('./post.html').pipe(res);
    }else if(req.url == '/ajax'){
        //请求头都放在require.headers里，取的时候用小写 为了兼容不同客户端
        var contentType = req.headers['content-type'];
        req.on('data', function (data) {
            if(contentType == 'application/x-www-form-urlencoded'){
                var user = querystring.parse(data);
                console.log(data);
                console.log(user)
            }else if(contentType == 'application/json'){
                var user = JSON.parse(data);
                console.log(user)
            }
            res.setHeader('Content-Type','application/json');
            res.end(JSON.stringify(user));  //不规范 此处因为只是传少量字符串 小于64k 可以直接end 建议buffer.push()存放数据
        })
    }
}).listen(8070);
