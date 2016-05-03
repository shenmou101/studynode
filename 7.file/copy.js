var fs = require('fs');
function copy(src,target){
    fs.readFile(src, function (err,data) {
        fs.writeFile(target,data, function (err) {
            if(err){console.log(err)}
        })
    })
}

copy('./1.txt','./2.txt');