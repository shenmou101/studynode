let http = require('http');
let fs = require('fs');
let path = require('path');
let mime = require('mime')

/*
var mime = {
  ".css": "text/css",
  ".js": "text/javascript",
  ".html": "text/html",
  ".ico": "image/ico",
}
*/


let server = http.createServer(function (req,res) {
  res.setHeader('Content-Type',mime.lookup(req.url)+';charset=utf-8');
  console.log(req.url);
  if(req.url == '/clock'){
    res.end(new Date().toLocaleString())
  }else{
    fs.readFile('.'+req.url,function (err,data) {
      res.end(data);
    })
  }

});

server.listen(8080);

