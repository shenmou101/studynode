var url = require('url');
var urlobj = url.parse('http://localhost:8050/login?username=jhg&password=564gh#div1',true);    //true表示是否把query转化为对象
console.log(urlobj.query.username);
console.log(url.format(urlobj));
//console.log(JSON.stringify(urlobj));
/*
* Url {
 protocol: 'http:', 协议
 slashes: true,
 auth: null,   用户名和密码
 host: 'localhost:8050',    主机
 port: '8050',  端口号
 hostname: 'localhost', 主机名
 hash: null,    哈希值 页面中的元素锚点
 search: '?username=jhg&password=564gh',    查询字符串
 query: 'username=jhg&password=564gh',  查询字符串内容
 pathname: '/login',    路径（端口和问号中间的部分）
 path: '/login?username=jhg&password=564gh',    路径+查询字符串
 href: 'http://localhost:8050/login?username=jhg&password=564gh#div1' } 完整href
 * */