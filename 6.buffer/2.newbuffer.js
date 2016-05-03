var buffer1 = new Buffer(6);//指定buffer的长度
console.log(buffer1);
buffer1[1] = 0;//修改buffer指定位置的值
console.log(buffer1);
buffer1.fill(0);//把buffer中的所有元素置为0
console.log(buffer1);

//用数组创建时里面元素一定是一个数字，范围在0-255之间
var buf2 = new Buffer([0x14,0x15,0x17]);
console.log(buf2);

//通过字符串创建
var buf3 = new Buffer("abc","utf8");
console.log(buf3);

//Buffer.copy(targetBuffer,targetstart,sourcestart,sourceend)
var result = new Buffer(6);
buf3.copy(result,0,0,3);
console.log(result.toString());
buf3.copy(result,3,0,3);
console.log(result.toString());

//buffer的长度
var str = '邓甲abc';
console.log(str.length);
console.log(Buffer.byteLength(str,'utf8'));