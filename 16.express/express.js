
function express(){
    function app(){
        this.fns = [];
    }
    app.use = function (fn) {//use中的path是可选参数

        this.fns.push({
            path:'/',
            fn:fn
        });
    };
    app.get = function (path,fn) {
        this.fns.push({
            path:path,
            fn:fn
        });
    };
    app.start = function(){
        var i = 0;
        function next(){
            var layer = this.fns[i];
            i++;
            if(req.url.indexOf(layer.path) == 0){
                layer.fn(req,res,next)
            }
        }
        next()
    };
    return app;
}