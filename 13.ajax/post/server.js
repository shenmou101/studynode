var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
http.createServer(function (req,res) {
    req.setEncoding('utf8');
    if(req.url == '/'){
        fs.createReadStream('./post.html').pipe(res);
    }else if(req.url == '/post'){
        req.on('data', function (data) {
            res.end(data);
        })
    }
}).listen(8070);
