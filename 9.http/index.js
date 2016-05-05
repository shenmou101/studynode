setInterval(function () {
    var xhr = new XMLHttpRequest;
    xhr.open('GET','/clock',true);
    xhr.onreadystatechange = function () {
        //如果ajax对象状态为就绪，并且响应码为200的时候
        if(xhr.readyState == 4 && xhr.status == 200){
            document.querySelector('#clock').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
},5000)
