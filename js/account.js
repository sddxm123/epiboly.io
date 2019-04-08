$(function(){
    $(".span3").click(function (e) { 
        e.preventDefault();
        $(".span3").css("box-shadow","");
        $(this).css("box-shadow","inset 0 0 0 0.64rem #4289db");
    });

    // 充值按钮
    $(".chongz").click(function (e) { 
        e.preventDefault();
        $(".yue").hide();
        $(".chongzhi").show()
        $(document).scrollTop(10)
        if ($(document).scrollTop() > 0) {
            $('.foot').css("position", "initial")
        }

    });

    //充值取消
    $(".quxiao").click(function (e) { 
        $(document).scrollTop(10)
        if ($(document).scrollTop() > 0) {
            $('.foot').css("position", "fixed")
        }
        e.preventDefault();
        $(".yue").show();
        $(".chongzhi").hide()
    });

    // 提现按钮
    $(".txbtn").click(function (e) { 
        e.preventDefault();
        $(".yue").hide();
        $(".tixian").show()
        $(document).scrollTop(10)
        if ($(document).scrollTop() > 0) {
            $('.foot').css("position", "initial")
        }
    });

    //提现取消
    $(".txqx").click(function (e) { 
        $(document).scrollTop(10)
        if ($(document).scrollTop() > 0) {
            $('.foot').css("position", "fixed")
        }
        e.preventDefault();
        $(".yue").show();
        $(".tixian").hide();

        console.log(111)
    });
    // $(".cs").click(function(){
    //     $(".tixian").hide();
    // })

})