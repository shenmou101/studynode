#!/usr/bin/env node
/*
* 启动一个http服务器
* 并且能自动响应当前目录(执行该命令的目录)下的静态文件
* */

var http = require('http');
var mime = require('mime');
var path = require('path');
var fs = require('fs');
//获取用户在node命令行输入的参数,是数组，其中默认有node.exe可执行文件目录，当前模块所在目录
var port = process.argv[2]?parseInt(process.argv[2]):8080;

http.createServer(function (req,res) {
  // /index.html
  // 判断当前目录是否存在该文件，脚本在哪个文件夹下执行，则当前目录就在哪
  var url = req.url;
  if(req.url === '/'){
    var str = '<ul>';
    fs.readdir('.',function (err,files) {
      files.forEach(function (file) {
        str += '<li><a href="/'+file+'">'+ file +'</a></li>'
      });
      str += "</ul>";
      fs.readFile('./index.html','utf8',function (err,data) {
        data = data.replace('<div>欢迎来到首页！</div>',str);
        res.end(data)
      })
    })
  }else{
    fs.exists(req.url.slice(1),function (exists) {
      if(exists){

        fs.stat(req.url.slice(1),function (err, stats) {
          console.log(stats.isDirectory());
          if(stats.isDirectory()){
            var str = '<ul>';
            fs.readdir(req.url.slice(1),function (err,files) {
              files.forEach(function (file) {
                str += '<li><a href="' + path.join(req.url,file) + '">'+ file +'</a></li>'
              });
              str += "</ul>";
              console.log(str);
              fs.readFile('./index.html','utf8',function (err,data) {
                data = data.replace('<div>欢迎来到首页！</div>',str);
                res.end(data)
              })
            })
          }else{
            res.setHeader('Content-Type',mime.lookup(req.url)+';charset=utf-8');
            fs.readFile(req.url.slice(1),function (err,data) {
              res.end(data)
            })
          }
        });


      }else{
        res.setHeader('Content-Type','text/html;charset=utf-8');
        res.end('文件找不到')
      }
    })
  }

}).listen(port,function () {
  console.log('服务器在'+port+'端口启动');
});