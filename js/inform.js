window.onload=function(){
    var btn1=document.getElementById('btn1');
    var ul=document.getElementById('ul');
    var txt1=document.getElementById('txt1');  
    
    btn1.onclick=function(){
        var li=document.createElement('li');
        li.innerHTML=txt1.value;
        txt1.value='';

        //ul.appendChild(li);
        if (ul.children.length>0) {
            ul.insertBefore(li,ul.children[0]);
        }else{
            ul.appendChild(li);
        }
        
        //运动
        //设置一个自适应的高度
        var iHeight = li.offsetHeight;
        //alert(iHeight);
        li.style.height='0';
        //startMove(li,{height:iHeight,opacity:100});
        startMove(li,{height:iHeight},function(){
            startMove(li,{opacity:100})
        });
    }


}