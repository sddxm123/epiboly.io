$(function(){
    if($.session.get("now")){
        $(".denglu").hide()
    }else{
        $(".dengl").hide()
        $(".login-user").hide();
    };
})
