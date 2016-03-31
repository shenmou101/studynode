/**
 * Created by Administrator on 2016/3/30.
 */
var fs=require('fs');
function copy(src,target){
    var name=fs.readFileSync('./name.txt','utf8');//注意，图片视频是二进制编码，不能用utf8转码，否则出错
    fs.writeFile('./age.txt',name,{flag:'w'},function(err){
        if(err){
            console.log(err)
        }
    })
}
copy('./name.txt','./age.txt');