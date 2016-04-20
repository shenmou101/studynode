//模块一旦被调用就会被缓存，多次调用也是调用相同缓存
var math1 = require('./math.js');
var math2 = require('./math.js');   //第二次未执行 因为已缓存
console.log(math1 === math2);

//查看缓存
console.log(require.cache);
/*  cache 以key:value方式存放所有的模块缓存
* { 'e:\nodeproject\studynode\5.module\usemath.js':
 Module {
 id: '.',
 exports: {},
 parent: null,
 filename: 'e:\\nodeproject\\studynode\\5.module\\usemath.js',
 loaded: false,
 children: [ [Object] ],
 paths:
 [ 'e:\\nodeproject\\studynode\\5.module\\node_modules',
 'e:\\nodeproject\\studynode\\node_modules',
 'e:\\nodeproject\\node_modules',
 'e:\\node_modules' ] },
 'e:\nodeproject\studynode\5.module\math.js':
 Module {
 id: 'e:\\nodeproject\\studynode\\5.module\\math.js',
 exports: {},
 parent:
 Module {
 id: '.',
 exports: {},
 parent: null,
 filename: 'e:\\nodeproject\\studynode\\5.module\\usemath.js',
 loaded: false,
 children: [Object],
 paths: [Object] },
 filename: 'e:\\nodeproject\\studynode\\5.module\\math.js',
 loaded: true,
 children: [],
 paths:
 [ 'e:\\nodeproject\\studynode\\5.module\\node_modules',
 'e:\\nodeproject\\studynode\\node_modules',
 'e:\\nodeproject\\node_modules',
 'e:\\node_modules' ] } }

 Process finished with exit code 0

 * */

//获取一个模块的绝对路径
console.log(require.resolve('./math.js'));
//从缓存中删除一个模块
delete require.cache[require.resolve('./math.js')];
console.log(require.cache);