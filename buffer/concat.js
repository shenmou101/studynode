/**
 * Created by Administrator on 2016/3/29.
 */
//Buffer.concat(list[, totalLength])
var buf1=new Buffer('努');
var buf2=new Buffer('力');
var buf3=new Buffer('学');
var buf4=new Buffer('习');
var all=Buffer.concat([buf1,buf2,buf3,buf4],12);

console.log(Buffer.concat([buf1,buf2,buf3,buf4],1));
console.log(all);
console.log(all.toString());
var s=all.slice(9,12);
console.log(s);

//buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
var bufs=new Buffer(12);
buf1.copy(bufs,0,0,3);
console.log(bufs.toString('utf-8',0,12));
buf2.copy(bufs,3,0,3);
buf3.copy(bufs,6,0,3);
buf4.copy(bufs,9,0,3);
console.log(bufs.toString('utf-8',0,12));

