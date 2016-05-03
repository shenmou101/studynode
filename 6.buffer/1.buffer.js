console.log(Buffer);    //global的属性
/*
* { [Function: Buffer]
 poolSize: 8192,
 isBuffer: [Function: isBuffer],    //判断是否是buffer
 compare: [Function: compare],
 isEncoding: [Function],    //编码是否支持
 concat: [Function],
 byteLength: [Function: byteLength] }   //字节长度

 特点：
 1.长度固定
 2.放到缓存区的字节数需要提前确定
 3.好比由八位字节组成的数组
* */

//把任意的进制转换成10进制
console.log(parseInt("11111111",2));
console.log(parseInt("0xff",16));

//把10进制转换成任意进制
console.log((255).toString(16));
console.log((255).toString(2));