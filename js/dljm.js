var btn=document.getElementById("click");
btn.onclick = function(){
    window.location.href ='xzsf.html';
    //当前页面打开
}

// $(location).wbtn('href', 'http://www.baidu.com');

//确认弹出框js
function mixfirm(obj) {
    var strs = '<h4>'+obj+'</h4>';
    $(".mixfirm").html(strs);
    $(".mixfirm").show();
}


　　//点击登录按钮
$('.btnYes').click(function () {
    var username = $("#username").val();
    var psw = $("#setpassword").val();  
    console.log(username,psw);

    var wdata;
    var cdata;
 
    if(username=="") {  //用户名为空时
        $(".mixfirm").show();
        mixfirm("用户名不能为空");
        setTimeout(function() {
            $(".mixfirm").hide();
        },1000);
    }else if(psw=="") {  //密码为空
        $(".mixfirm").show();
        mixfirm("密码不能为空");
        setTimeout(function() {
            $(".mixfirm").hide();
        },1000);
    }else{  //都不为空  判断
        $.ajax({
            type: "POST",
            url: "http://47.106.220.143:8080/worker/login",
            data:{
                name:username,
                password:psw
            },
            success: function (res) {   //先验证看是不是worker得账号
                wdata=res.data;         //如果账号或密码错误都是返回   -1
                $.ajax({
                    type: "POST",
                    url: "http://47.106.220.143:8080/company/login",
                    data:{
                        name:username,
                        password:psw
                    },
                    success: function (res) {
                        cdata=res.data;
                        console.log(wdata,cdata)    
                        if(wdata==-1 && cdata==-1){
                            $(".mixfirm").show();
                            mixfirm("账号或密码错误");
                            setTimeout(function() {
                                $(".mixfirm").hide();
                            },1000);
                        }else{
                            if(wdata!=-1){
                                $.session.set("nowdata",0);
                            }else{
                                $.session.set("nowdata",1);                                
                            }
                            $.session.set("now",username);
                            window.location.href = "index.html";
                            // $("#loginhref").attr("href","index.html")
                        }
                    }
                });
            }
        });  
    }
    
})
