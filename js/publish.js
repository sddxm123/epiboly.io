$(document).ready(function(){
	// 范例
	$(".view").click(function(){
		$('.fanli').toggle();
	});

	// 邮箱
	$(".email").blur(function(){
		if ($(".email").val()=="") {
			$(".email").css("border","1px solid red");
			$(".email").attr("placeholder","邮箱不能为空");
		}else{
			var str=/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
			if (str.test($(".email").val())==false) {
				$(".email").css("border","1px solid red");
				$(".email").attr("placeholder","邮箱格式错误");
				$(".email").val("");
			}else{
				$(".email").css("border","1px solid #ccc");
			}
		}
	});

	// 开发类型
	$(".type label").click(function(){
		$(".type li").children().removeClass("active");
		$(this).addClass("active");
	})
	
	

});

