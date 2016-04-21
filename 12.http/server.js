var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function (req,res) {
    var urlobj =url.parse(req.url,true);
    if(urlobj.pathname == '/'){
        fs.createReadStream('./login.html').pipe(res);
    }else if(urlobj.pathname == '/login'){
        /*var buffers = [];
        req.on('data', function (data) {
            buffers.push(data);
        });
        req.on('end', function (data) {
            var result = Buffer.concat(buffers);
            res.end(result.toString());
        })*/

        console.log(urlobj.query.username);
        res.end(urlobj.query.username)
    }else{
        res.end('404')
    }
}).listen(8070);
