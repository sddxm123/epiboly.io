// var join = [{"user":"guyg","reason":"花的合法化合付话费话一的哈诶发官方也让","time":"1个月前","date":"555"},
// 			{"user":"gioiij","reason":"他人一条鱼2护肤日疯人院法人爱过阿凡达胡瑞","time":"2个月前","date":"555"},
// 			{"user":"aewae","reason":"无IQ海棠湾v胡歌有如果红人馆四儿我食人鱼放空管","time":"3个月前","date":"555"},
// 			{"user":"tuytf","reason":"虽然投入是个如果您还会狗肉火锅㞥个UR好贵牛肉","time":"4个月前","date":"555"},
// 			{"user":"ybvn","reason":"rgshi阿胡覅带回家打印机教育局生日送你改吧想发给","time":"4个月前","date":"555"}];

// var art = JSON.stringify(join);
// console.log(art);
// localStorage.join=art;

// var joins=JSON.parse(localStorage.join);


//js
// for(i=0;i<joins.length;i++){
// 	// $(".coder-list")
// 	var coderlist=document.getElementById('coder-list');
// 	var odiv=document.createElement('div');
// 	// odiv.className='row coder';
// 	odiv.innerHTML=` <div class="list-l col-sm-8 col-xs-12">
// 	                    <div class="row">
// 	                        <div class="col-xs-2 b-img"><img src="img/b-kfz.png"></div>
// 	                        <div class="col-xs-10">
// 	                            <p><b>`+joins[i].user+`</b></p>
// 	                            <p class="b-com">开发者团队 | 较少兼职时间 | 评分 <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></p>
// 	                            <p>胜任理由：`+joins[i].reason+`</p>
// 	                            <p>联系方式：<a href="#">查看</a></p>
// 	                            <p>报名时间：`+joins[i].time+`</p>
// 	                            <p>申请资料：<a href="#">查看</a></p>
// 	                        </div>
// 	                    </div>
// 	                </div>
// 	                <div class="list-r col-sm-4 col-xs-12">
// 	                    <form role="form">
// 	                        <button type="button" class="btn btn-sm btn-default">不合适</button>
// 	                        <button type="button" class="btn btn-sm btn-primary">确认合作</button>
// 	                        <textarea class="form-control" placeholder="添加备注" rows="3"></textarea> 
// 	                    </form>
// 	                </div>`;

// 	coderlist.appendChild(odiv);
// }




//jq
// for(i=0;i<joins.length;i++){
// 	var odiv=$(`<div class="row coder">
// 					<div class="list-l col-sm-8 col-xs-12">
// 	                    <div class="row">
// 	                        <div class="col-xs-2 b-img"><img src="img/b-kfz.png"></div>
// 	                        <div class="col-xs-10">
// 	                            <p><b>`+joins[i].user+`</b></p>
// 	                            <p class="b-com">开发者团队 | 较少兼职时间 | 评分 <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></p>
// 	                            <p>胜任理由：`+joins[i].reason+`</p>
// 	                            <p>联系方式：<a href="#">查看</a></p>
// 	                            <p>报名时间：`+joins[i].time+`</p>
// 	                            <p>申请资料：<a href="#">查看</a></p>
// 	                        </div>
// 	                    </div>
// 	                </div>
// 	                <div class="list-r col-sm-4 col-xs-12">
// 	                    <form role="form">
// 	                        <button type="button" class="btn btn-sm btn-default">不合适</button>
// 	                        <button type="button" class="btn btn-sm btn-primary">确认合作</button>
// 	                        <textarea class="form-control" placeholder="添加备注" rows="4"></textarea> 
// 	                    </form>
// 	                </div>
// 				</div>`);
// 	console.log(odiv);

// 	$(".coder-list").append(odiv);
// }






//ajax
$(function(){
    $.ajax({
        url:"./json/join.json",
        type:"GET",
        dataType:"json",
        success:function(result){
            
            var joins = result.join;
            console.log(joins);
            for(var i=0;i<joins.length;i++){

                    var odiv=$(`<div class="row coder">
                                <div class="list-l col-sm-8 col-xs-12">
                                    <div class="row">
                                        <div class="col-xs-2 b-img"><img src="img/b-kfz.png"></div>
                                        <div class="col-xs-10">
                                            <p><b>`+joins[i].user+`</b></p>
                                            <p class="b-com">开发者团队 | 较少兼职时间 | 评分 <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></p>
                                            <p>胜任理由：`+joins[i].reason+`</p>
                                            <p>联系方式：<a href="#">查看</a></p>
                                            <p>报名时间：`+joins[i].time+`</p>
                                            <p>申请资料：<a href="#">查看</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-r col-sm-4 col-xs-12">
                                    <form role="form">
                                        <button type="button" class="btn btn-sm btn-default">不合适</button>
                                        <button type="button" class="btn btn-sm btn-primary">确认合作</button>
                                        <textarea class="form-control" placeholder="添加备注" rows="4"></textarea> 
                                    </form>
                                </div>
                            </div>`);
                    $(".coder-list").append(odiv);
                }
                
        },
        error:function(){
            console.log(1);
        }
    })

})











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
        var animate='fadeInDown';
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

            if(n>=300){
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




