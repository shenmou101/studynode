var EventEmitter = require('events');
var util = require('util');

util.inherits(Girl,EventEmitter);   //让Girl的实例继承EventEmitter原型的方法
function Girl(){

}
var girl = new Girl();
function callback() {
    console.log('吃饭去吧');
}
//on()注册事件 once()只执行一次然后删除
girl.once('hungry', callback);
girl.on('sad', function (thing1,thing2) {
    console.log('去商场买'+thing1+'和'+thing2+'吧');
});

//emit()发射事件
girl.emit('hungry');
girl.emit('hungry');
girl.emit('sad','普拉达','chanel');

//解除绑定指定的事件
girl.removeListener('hungry',callback);
girl.emit('hungry');

//解除绑定所有事件
girl.removeAllListeners();
girl.emit('sad');

