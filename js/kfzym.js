$(function(){
    $(".bti span").click(function(){
        $(this).addClass("shoruli").siblings().removeClass("shoruli");
        $(".genz>div").eq(0).show();//默认让第一个div显示
        $(".genz>div").hide();//所有div隐藏
        var a=$(this).index();//得到当前执行事件标签的未知数
        $(".genz>div").eq(a).show();//让对应位置的div显示
    });

})