var express = require('express');
//构建一个express实例
var app =express()
//请求分发也叫路由 根据不同的路径处理请求
//处理get请求
app.get('/index', function (req,res) {
   res.setHeader('Content-Type','text/plain;charset=utf-8');
   res.end('邓甲index')
});
app.get('/home', function (rreq,res) {
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    res.end('home')
});
//匹配GET请求的任意路径
//all表示匹配所有路径
app.all('*',function(req,res){
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    res.end('404')
});
app.listen(8080);