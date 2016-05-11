var express = require('express');
//构建一个express实例
var app =express();
//use表示使用一个中间件函数 next表示继续执行下一个函数
app.use(function(req,res,next){
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    next()//调用表示继续往下走,执行下面的get
    //res.end('over')
});

//请求分发也叫路由 根据不同的路径处理请求
//处理get请求
app.get('/index', function (req,res) {
   console.log(req.path);//路径pathname
   console.log(req.query);//查询字符串对象
   console.log(res.send);//发送的方法，以上三个方法都是express添加的 原生没有
   res.end('邓甲index')
});
app.get('/home/:id/:name', function (req,res) {
    console.log(req.params.id,+'用户主页面');    //params
    res.end('home')
});
//匹配GET请求的任意路径
//all表示匹配所有路径
app.all('*',function(req,res){
    res.end('404')
});
app.listen(8080);