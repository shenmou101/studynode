var fs = require('fs');

var result = fs.writeFileSync('./2.txt',"随便来点字",{encoding:'utf8'});
console.log(result);    //没有返回值

fs.writeFile('./2.txt','我就随便写点吧',{encoding:'utf8'},function (err) {
    console.log(err)
})
