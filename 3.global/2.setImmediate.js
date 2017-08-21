/*
* 注意看各个事件的真实执行顺序
* process.nextTick > setImmediate > setTimeout
* */


setTimeout(function () {
  console.log('setTimeout')
});

//setImmediate：放在下一个任务列表的开始执行
setImmediate(function(){
  console.log('setImmediate')
});


//process.nextTick：放在当前任务列表的末尾执行
process.nextTick(function () {
  console.log('nextTick1');
  process.nextTick(function () {
    console.log('nextTick2');
    process.nextTick(function () {
      console.log('nextTick3')
    })
  })
});

//若process.nextTick在一个递归方法内执行 则进入死循环