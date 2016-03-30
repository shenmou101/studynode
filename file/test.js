/**
 * Created by Administrator on 2016/3/30.
 */
//测试异步方法能否捕获报错
try{
    setTimeout(function () {
        throw Error('error')
    },1000)
}catch (e){
    console.error(e);
}
console.log('c')
