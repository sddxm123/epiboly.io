
// 事件兼听兼容处理,兼容IE
function myAddEvent(element,type,callback){
    if(element.addEventListener){
        element.addEventListener(type,callback,false);
    }else if(element.attachEvent){
        element.attachEvent('on' + type,callback)
    }
} 

// 对于Internet Explorer、Chrome、Firefox、Opera 以及 Safari： 
// window.innerHeight – 浏览器窗口的内部高度 
// window.innerWidth – 浏览器窗口的内部宽度 
// 对于 Internet Explorer 8、7、6、5： 
// document.documentElement.clientHeight 
// document.documentElement.clientWidth 
// 或者 
// document.body.clientHeight 
// document.body.clientWidth 
function visibleAnimate(elements,animate){
    if(!elements) return false;
    if(arguments.length===1){
        var animate='fadeInDown'
    }
    var clientHeight = window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
    myAddEvent(document,'scroll',function(){
        var n = 0;
        for (var index = 0; index < elements.length; index++) {
            n+=100;
            var el = elements[index];
            // el.getBoundingClientRect获取元素位置
            var elTop=elements[index].getBoundingClientRect().top;  
            if(elTop*1.5<=clientHeight){
                el.className = 'row coder animated '+animate; 
                el.style['animation-delay']=n +"ms";
            }else{
                el.className = 'row coder animated';
            }

            if(n>=200){
                n=0;
            }
        }
    })
};


// 相当于window.onload
myAddEvent(window,'load',function(){
    // // 创建DIV节点
    
    
    // 执行可视区函数
    // 下面那个函数中的数据为 要启动效果的元素
    visibleAnimate(document.getElementsByClassName("coder"))
})