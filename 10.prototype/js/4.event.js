// var EventEmitter = require('events');

function EventEmitter(){
  //存放我们的事件和事件监听
  this._events = {};
}

//注册监听
/*
* @param type 事件的类型
* @param listener 事件发生的时候执行的回调
* */
EventEmitter.prototype.on = function (type, listener) {
  if(this._events[type]){
    this._events[type].push(listener);
  }else{
    this._events[type] = [listener];
  }
};

EventEmitter.prototype.emit = function (type) {
  var arg = Array.prototype.slice.call(arguments,1);
  this._events[type].forEach(function (listener) {
    listener.apply(null,arg);
  })
};

EventEmitter.prototype.once = function (type, listener) {
  var self = this;
  function g() {
    console.log(self._events[type]);
    for(var i = 0; i < self._events[type].length; i++){
      if(g == self._events[type][i]){
        self._events[type].splice(i,1);
        break
      }
    }

    //emit调用self._events[type]时，实际绑定的监听回调是g()并向其传递实参,g的意义是包装修饰listener函数
    listener.apply(self,arguments);
  }

  if(self._events[type]){
    self._events[type].push(g)
  }else{
    self._events[type] = [g]
  }
};
// var e = new EventEmitter();
// e.on('click',function (word) {
//   console.log('点我了1！', word)
// });
// e.on('click',function (word) {
//   console.log('点我了2！', word)
// });
//
// e.emit('click','hello');

//常见的情况
function Girl() {
  this.name = 'zhang';
  this.age = 18;
}
Girl.prototype = new EventEmitter();

var girl = new Girl();
girl.once('饿了',function (food) {
  console.log('饿了吃' + food)
});
girl.once('饿了',function (food) {
  console.log('饿了吃2' + food)
});
girl.emit('饿了', '面包');

