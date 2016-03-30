/**
 * Created by Administrator on 2016/3/29.
 */
//buf.toString([encoding[, start[, end]]])
//字符串转buffer
var buf=new Buffer('珠峰','utf-8');
console.log(buf)
//buffer转字符串
console.log(buf.toString('utf-8',3,6))
console.log(buf.toString('utf-8'))
