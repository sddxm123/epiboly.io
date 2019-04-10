// 范例
$(".view").click(function(){
	$('.fanli').toggle();
});



// 邮箱
// $(".email").blur(function(){
// 	if ($(".email").val()=="") {
// 		// $(".email").css("border","1px solid red");
// 		$(".email").attr("placeholder","邮箱不能为空");
// 	}else{
// 		var str=/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
// 		if (str.test($(".email").val())==false) {
// 			// $(".email").css("border","1px solid red");
// 			$(".email").attr("placeholder","邮箱格式错误");
// 			$(".email").val("");
// 		}else{
// 			// $(".email").css("border","1px solid #ccc");
// 		}
// 	}
// });



// 开发类型
$(".type label").click(function(){
	$(".type li").children().removeClass("active");
	$(this).addClass("active");
})




// 项目名称
function fnlableName(){
	if ($('#projectName').val()=='') {
		if ($('#projectName').parent().children().last().attr('class')!="alert alert-warning alert-dismissable") {
			var idiv=$(`
				<div class="alert alert-warning alert-dismissable">
					<button type="button" class="close" data-dismiss="alert"
							aria-hidden="true">
						&times;
					</button>
					项目名称不能为空
				</div>
				`)
			$('#projectName').parent().append(idiv);
		}else{
			$('#projectName').parent().children().last().remove();
			var idiv=$(`
				<div class="alert alert-warning alert-dismissable">
					<button type="button" class="close" data-dismiss="alert"
							aria-hidden="true">
						&times;
					</button>
					项目名称不能为空
				</div>
				`)
			$('#projectName').parent().append(idiv);
		}
	}else if($('#projectName').val().length > 30){
		if ($('#projectName').parent().children().last().attr('class')!="alert alert-warning alert-dismissable") {
			var idiv=$(`
				<div class="alert alert-warning alert-dismissable">
					<button type="button" class="close" data-dismiss="alert"
							aria-hidden="true">
						&times;
					</button>
					项目名称需在30字符以内
				</div>
				`)
			$('#projectName').parent().append(idiv);
		}else{
			$('#projectName').parent().children().last().remove();
			var idiv=$(`
				<div class="alert alert-warning alert-dismissable">
					<button type="button" class="close" data-dismiss="alert"
							aria-hidden="true">
						&times;
					</button>
					项目名称需在30字符以内
				</div>
				`)
			$('#projectName').parent().append(idiv);
		}
	}else{
		if ($('#projectName').parent().children().last().attr('class')=="alert alert-warning alert-dismissable") {
			$('#projectName').parent().children().last().remove();
		}
	}
}
$('#projectName').blur(fnlableName);



//项目行业
function fnlableClass(){
	if ($('#projectClass').val()=='') {
		if ($('#projectClass').parent().children().last().attr('class')!="alert alert-warning alert-dismissable") {
			var idiv=$(`
				<div class="alert alert-warning alert-dismissable">
					<button type="button" class="close" data-dismiss="alert"
							aria-hidden="true">
						&times;
					</button>
					项目行业不能为空
				</div>
				`)
			$('#projectClass').parent().append(idiv);
		}
	}else{
		if ($('#projectClass').parent().children().last().attr('class')=="alert alert-warning alert-dismissable") {
			console.log(2)
			$('#projectClass').parent().children().last().remove();
		}
	}
}
$('#projectClass').blur(fnlableClass);



//项目预算
function fnlablePrice(){
	// var price = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
	var price = /^[0-9]*$/;
	if ($('#projectPrice').val()=='') {
		if ($('#projectPrice').parent().children().last().attr('class')!="alert alert-warning alert-dismissable") {
			var idiv=$(`
				<div class="alert alert-warning alert-dismissable">
					<button type="button" class="close" data-dismiss="alert"
							aria-hidden="true">
						&times;
					</button>
					项目预算不能为空
				</div>
				`)
			$('#projectPrice').parent().append(idiv);
		}else{
			$('#projectPrice').parent().children().last().remove();
			var idiv=$(`
				<div class="alert alert-warning alert-dismissable">
					<button type="button" class="close" data-dismiss="alert"
							aria-hidden="true">
						&times;
					</button>
					项目预算不能为空
				</div>
				`)
			$('#projectPrice').parent().append(idiv);
		}
	}else{
		if (price.test($('#projectPrice').val())==false) {
			if ($('#projectPrice').parent().children().last().attr('class')!="alert alert-warning alert-dismissable") {
	            var idiv=$(`
	                <div class="alert alert-warning alert-dismissable">
	                    <button type="button" class="close" data-dismiss="alert"
	                            aria-hidden="true">
	                        &times;
	                    </button>
	                    项目金额需为数字
	                </div>
	                `)
	            $('#projectPrice').parent().append(idiv);
	        }else{
	        	$('#projectPrice').parent().children().last().remove();
	        	var idiv=$(`
	                <div class="alert alert-warning alert-dismissable">
	                    <button type="button" class="close" data-dismiss="alert"
	                            aria-hidden="true">
	                        &times;
	                    </button>
	                    项目金额需为数字
	                </div>
	                `)
	            $('#projectPrice').parent().append(idiv);
	        }
		}else{
	        // $('#projectPrice').parent().children().last().remove();
			if ($('#projectPrice').val() >=50000) {
				if ($('#projectPrice').parent().children().last().attr('class')!="alert alert-warning alert-dismissable") {
		            var idiv=$(`
		                <div class="alert alert-warning alert-dismissable">
		                    <button type="button" class="close" data-dismiss="alert"
		                            aria-hidden="true">
		                        &times;
		                    </button>
		                    项目金额需在￥50,000以内
		                </div>
		                `)
		            $('#projectPrice').parent().append(idiv);
		        }
	        }else{
	        	console.log('good')
				if ($('#projectPrice').parent().children().last().attr('class')=="alert alert-warning alert-dismissable") {
		        	$('#projectPrice').parent().children().last().remove();
		        }
	        }
		}
	}
}
$('#projectPrice').blur(fnlablePrice);


//项目周期
function fnlablePeriod(){
	// var price = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
	var price = /[0-9]/;
	if ($('#projectPeriod').val()=='') {
		if ($('#projectPeriod').parent().children().last().attr('class')!="alert alert-warning alert-dismissable") {
			var idiv=$(`
				<div class="alert alert-warning alert-dismissable">
					<button type="button" class="close" data-dismiss="alert"
							aria-hidden="true">
						&times;
					</button>
					项目周期不能为空
				</div>
				`)
			$('#projectPeriod').parent().append(idiv);
		}else{
			$('#projectPeriod').parent().children().last().remove();
			var idiv=$(`
				<div class="alert alert-warning alert-dismissable">
					<button type="button" class="close" data-dismiss="alert"
							aria-hidden="true">
						&times;
					</button>
					项目周期不能为空
				</div>
				`)
			$('#projectPeriod').parent().append(idiv);
		}
	}else{
		if (price.test($('#projectPeriod').val())==false) {
			if ($('#projectPeriod').parent().children().last().attr('class')!="alert alert-warning alert-dismissable") {
	            var idiv=$(`
	                <div class="alert alert-warning alert-dismissable">
	                    <button type="button" class="close" data-dismiss="alert"
	                            aria-hidden="true">
	                        &times;
	                    </button>
	                    项目周期需为数字
	                </div>
	                `)
	            $('#projectPeriod').parent().append(idiv);
	        }else{
	        	$('#projectPeriod').parent().children().last().remove();
	        	var idiv=$(`
	                <div class="alert alert-warning alert-dismissable">
	                    <button type="button" class="close" data-dismiss="alert"
	                            aria-hidden="true">
	                        &times;
	                    </button>
	                    项目周期需为数字
	                </div>
	                `)
	            $('#projectPeriod').parent().append(idiv);
	        }
		}else{
			if ($('#projectPeriod').val() >=365) {
				if ($('#projectPeriod').parent().children().last().attr('class')!="alert alert-warning alert-dismissable") {
		            var idiv=$(`
		                <div class="alert alert-warning alert-dismissable">
		                    <button type="button" class="close" data-dismiss="alert"
		                            aria-hidden="true">
		                        &times;
		                    </button>
		                    项目周期需在365天以内
		                </div>
		                `)
		            $('#projectPeriod').parent().append(idiv);
		        }
	        }else{
	        	console.log('good')
				if ($('#projectPeriod').parent().children().last().attr('class')=="alert alert-warning alert-dismissable") {
		        	$('#projectPeriod').parent().children().last().remove();
		        }
	        }
		}
	}
}
$('#projectPeriod').blur(fnlablePeriod);


//项目详情
function fnlableDetails(){
	if ($('#projectDetails').val()=='') {
		if ($('#projectDetails').parent().children().last().attr('class')!="alert alert-warning alert-dismissable") {
			var idiv=$(`
				<div class="alert alert-warning alert-dismissable">
					<button type="button" class="close" data-dismiss="alert"
							aria-hidden="true">
						&times;
					</button>
					项目详情不能为空
				</div>
				`)
			$('#projectDetails').parent().append(idiv);
		}
	}else{
		if ($('#projectDetails').parent().children().last().attr('class')=="alert alert-warning alert-dismissable") {
			$('#projectDetails').parent().children().last().remove();
		}
	}
}
$('#projectDetails').blur(fnlableDetails);



//招募要求
function fnlableAsk(){
	if ($('#projectAsk').val()=='') {
		if ($('#projectAsk').parent().children().last().attr('class')!="alert alert-warning alert-dismissable") {
			var idiv=$(`
				<div class="alert alert-warning alert-dismissable">
					<button type="button" class="close" data-dismiss="alert"
							aria-hidden="true">
						&times;
					</button>
					招募要求不能为空
				</div>
				`)
			$('#projectAsk').parent().append(idiv);
		}
	}else{
		if ($('#projectAsk').parent().children().last().attr('class')=="alert alert-warning alert-dismissable") {
			$('#projectAsk').parent().children().last().remove();
		}
	}
}
$('#projectAsk').blur(fnlableAsk);



//姓名
function fnlableUser(){
	if ($('#projectUser').val()=='') {
		if ($('#projectUser').parent().children().last().attr('class')!="alert alert-warning alert-dismissable") {
			var idiv=$(`
				<div class="alert alert-warning alert-dismissable">
					<button type="button" class="close" data-dismiss="alert"
							aria-hidden="true">
						&times;
					</button>
					请输入您的姓名
				</div>
				`)
			$('#projectUser').parent().append(idiv);
		}
	}else{
		if ($('#projectUser').parent().children().last().attr('class')=="alert alert-warning alert-dismissable") {
			$('#projectUser').parent().children().last().remove();
		}
	}
}
$('#projectUser').blur(fnlableUser);



//邮箱
function fnlableEmail(){
	var price = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
	// var price = /[0-9]/;
	if ($('#projectEmail').val()=='') {
		if ($('#projectEmail').parent().children().last().attr('class')!="alert alert-warning alert-dismissable") {
			var idiv=$(`
				<div class="alert alert-warning alert-dismissable">
					<button type="button" class="close" data-dismiss="alert"
							aria-hidden="true">
						&times;
					</button>
					请输入您的邮箱
				</div>
				`)
			$('#projectEmail').parent().append(idiv);
		}else{
			$('#projectEmail').parent().children().last().remove();
			var idiv=$(`
				<div class="alert alert-warning alert-dismissable">
					<button type="button" class="close" data-dismiss="alert"
							aria-hidden="true">
						&times;
					</button>
					请输入您的邮箱
				</div>
				`)
			$('#projectEmail').parent().append(idiv);
		}
	}else{
		if (price.test($('#projectEmail').val())==false) {
			if ($('#projectEmail').parent().children().last().attr('class')!="alert alert-warning alert-dismissable") {
	            var idiv=$(`
	                <div class="alert alert-warning alert-dismissable">
	                    <button type="button" class="close" data-dismiss="alert"
	                            aria-hidden="true">
	                        &times;
	                    </button>
	                    邮箱格式错误
	                </div>
	                `)
	            $('#projectEmail').parent().append(idiv);
	        }else{
	        	$('#projectEmail').parent().children().last().remove();
	        	var idiv=$(`
	                <div class="alert alert-warning alert-dismissable">
	                    <button type="button" class="close" data-dismiss="alert"
	                            aria-hidden="true">
	                        &times;
	                    </button>
	                    邮箱格式错误
	                </div>
	                `)
	            $('#projectEmail').parent().append(idiv);
	        }
		}else{
        	console.log('good')
			if ($('#projectEmail').parent().children().last().attr('class')=="alert alert-warning alert-dismissable") {
	        	$('#projectEmail').parent().children().last().remove();
	        }
		}
	}
}
$('#projectEmail').blur(fnlableEmail);


//手机
function fnlablePhone(){
	var price = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
	// var price = /[0-9]/;
	if ($('#projectPhone').val()=='') {
		if ($('#projectPhone').parent().children().last().attr('class')!="alert alert-warning alert-dismissable") {
			var idiv=$(`
				<div class="alert alert-warning alert-dismissable">
					<button type="button" class="close" data-dismiss="alert"
							aria-hidden="true">
						&times;
					</button>
					请输入您的手机号码
				</div>
				`)
			$('#projectPhone').parent().append(idiv);
		}else{
			$('#projectPhone').parent().children().last().remove();
			var idiv=$(`
				<div class="alert alert-warning alert-dismissable">
					<button type="button" class="close" data-dismiss="alert"
							aria-hidden="true">
						&times;
					</button>
					请输入您的手机号码
				</div>
				`)
			$('#projectPhone').parent().append(idiv);
		}
	}else{
		if (price.test($('#projectPhone').val())==false) {
			if ($('#projectPhone').parent().children().last().attr('class')!="alert alert-warning alert-dismissable") {
	            var idiv=$(`
	                <div class="alert alert-warning alert-dismissable">
	                    <button type="button" class="close" data-dismiss="alert"
	                            aria-hidden="true">
	                        &times;
	                    </button>
	                    手机号码格式错误
	                </div>
	                `)
	            $('#projectPhone').parent().append(idiv);
	        }else{
	        	$('#projectPhone').parent().children().last().remove();
	        	var idiv=$(`
	                <div class="alert alert-warning alert-dismissable">
	                    <button type="button" class="close" data-dismiss="alert"
	                            aria-hidden="true">
	                        &times;
	                    </button>
	                    手机号码格式错误
	                </div>
	                `)
	            $('#projectPhone').parent().append(idiv);
	        }
		}else{
        	console.log('good')
			if ($('#projectPhone').parent().children().last().attr('class')=="alert alert-warning alert-dismissable") {
	        	$('#projectPhone').parent().children().last().remove();
	        }
		}
	}
}
$('#projectPhone').blur(fnlablePhone);



//按钮
$('#pbtn').click(function(){
	fnlableName();
	fnlableClass();
	fnlablePrice();
	fnlablePeriod();
	fnlableDetails();
	fnlableAsk();
	fnlableUser();
	fnlableEmail();
	fnlablePhone();
})
