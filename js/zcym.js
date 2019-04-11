 var btn=document.getElementById("click");
 // var obtn=document.getElementById("w-btn");
            btn.onclick = function(){
                 console.log(111)
                 window.location.href ='dljm.html';
                   //当前页面打开
               }


              


           


           //确认弹出框js判断
            function mixfirm(obj) {
              var strs = '<h4>'+obj+'</h4>';
              $(".mixfirm").html(strs);
              $(".mixfirm").show();
           }
           

           //点击注册按钮
           // 用户名不能为空判断
            $('#w-btn').click(function (obj) {       

            
            var oousername =/^[a-zA-Z0-9_-]{4,16}$/;//用户名正则
            var paster= /^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*$/g;//密码正则

            var reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;//邮箱正则

            var wyzm=/^([0-9]){6}$/;//验证码格式错误

                if($("input[name=LoginName]").val()=="") {  

                 //用户名为空时
                $(".mixfirm").show();
                mixfirm("用户名不能为空");
                setTimeout(function() {
                    $(".mixfirm").hide();
                },1000);
                // return false;
                }
                else if (oousername.test($('input[name=LoginName]').val())==false) {
                      $(".mixfirm").show();
                      mixfirm("用户名格式不正确");
                      setTimeout(function() {
                          $(".mixfirm").hide();
                      },1000);    
                }

                else if($("input[name=PSD]").val()==""){
                // 密码为空判断
                $(".mixfirm").show();
                    mixfirm("密码不能为空");
                    setTimeout(function() {
                        $(".mixfirm").hide();
                    },1000);
                }else if(paster.test($('input[name=PSD]').val())==false){
                     mixfirm("密码格式错误");
                    setTimeout(function() {
                        $(".mixfirm").hide();
                    },1000);
                }

                else if(password.value!=setpassword.value){
                     $(".mixfirm").show();
                      mixfirm("2次输入密码不一样");
                      setTimeout(function() {
                          $(".mixfirm").hide();
                      },1000);
                  }else if($("input[name=email]").val()==""){
                    $(".mixfirm").show();
                      mixfirm("邮箱不能为空");
                      // email.style.border='1px solid red';
                      setTimeout(function(){
                        $(".mixfirm").hide();
                      },1000);
                }else if($("input[name=email]").val()!=""){
                    if(reg.test($('input[name=email]').val())==false){
                      $(".mixfirm").show();
                      mixfirm("邮箱格式错误");
                      // email.style.border='1px solid red';
                      setTimeout(function(){
                        $(".mixfirm").hide();
                      },1000);
                    }else if($("input[name=yzm]").val()==""){
                      $(".mixfirm").show();
                        mixfirm("请输入验证码");
                        // email.style.border='1px solid red';
                        setTimeout(function(){
                          $(".mixfirm").hide();
                        },1000);
                    }else if(wyzm.test($('input[name=yzm]').val())==false){
                      $(".mixfirm").show();
                      mixfirm("验证码输入错误");
                      // email.style.border='1px solid red';
                      setTimeout(function(){
                        $(".mixfirm").hide();
                      },1000);
                    }else{
                      window.location.href = "dljm.html";
                    }

                }

                  

        });

     // 点击获取验证码倒计时
      $('#hqyzm').click(function() {
     

      let count = 60;
    const countDown = setInterval(() => {
      if (count === 0) {
       $('#hqyzm').text('重新发送').removeAttr('disabled');
       $('#hqyzm').css({
        background: '#ff9400',
        color: '#fff',
       });
       clearInterval(countDown);
      } else {
       $('#hqyzm').attr('disabled', true);
       $('#hqyzm').css({
        background: '#d8d8d8',
        color: '#707070',
       });
       $('#hqyzm').text(count + '秒后可重新获取');
      }
      count--;
     }, 1000);
    
  });


         

         