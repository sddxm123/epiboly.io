$(function(){
    if($.session.get("now")){
        $(".denglu").hide()
        $(".user-menu li").eq(0).html("hello,"+$.session.get("now"));
    }else{
        $(".dengl").hide()
        $(".login-user").hide();
    };
})
