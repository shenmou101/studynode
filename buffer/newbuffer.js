//Buffer 类似于数组
//Buffer里面只能放字节 0-255

//指定大小
var buffer=new Buffer(1);
buffer[0]=10;
console.log(buffer)
//通过字符串来创建
console.log(new Buffer("邓"))
//通过数组来创建
console.log(new Buffer([1,2,3]))    //只能放0-255的十进制数或16进制数
