$(function(){
    $(".bti span").click(function(){
        $(this).addClass("shoruli").siblings().removeClass("shoruli");
        $(".genz>div").eq(0).show();//默认让第一个div显示
        $(".genz>div").hide();//所有div隐藏
        var a=$(this).index();//得到当前执行事件标签的未知数
        $(".genz>div").eq(a).show();//让对应位置的div显示
    });

    $.ajax({
        url:"../json/json2.json",
        type:"GET",
        dataType:"json",
        success:function(result){
            var jeson = result.data;

            function sortmoney(a,b){
                return b.money-a.money
            }
            jeson.sort(sortmoney);
            // $(".paiyi").remove();
            xuanran();

            function xuanran(){
               for(var i=0;i<jeson.length;i++){
                var odiv = $(
                    `
                 <div class="col-md-6">
                <div class="kfzhe ">
                    <div class="kfzhe_yi">
                        <img src="img/di1.png" alt="">
                    </div>

                    <div class="kfzhe_er">
                           <img src="http://coding-net-public-file.codehub.cn/bb369326-2eb6-48b7-ba33-ddfd77aec690." alt="">
                    </div>
                    
                    <div class="kfzhe_san">  
                           <div class="name">`+jeson[i].name +`</div>
                           <div class="info">
                            <span>最擅长：<span>`+jeson[i].sahnchang+`</span></span>
                            <span>参与项目： <span>`+jeson[i].xiangmu+`</span></span>
                            <span>城市： <span>`+jeson[i].chengshi+`</span></span>
                           </div>
                           <div class="shoru">
                               总收入： 
                               <strong>￥<span class="shuziyi">`+jeson[i].money+`</span></strong>
                           </div>
                    </div>
                </div>
                </div>

                    `
                )
                $(".paiyi").append(odiv);
                
            } 
            }
            

            $(".shoruo").click(function (e) { 
                e.preventDefault();
                function sortassess(a,b){
                    return a.money-b.money
                }
                jeson.sort(sortmoney);
                // $(".paiyi").remove();
                xuanran();
            });

            $(".shurogh").click(function (e) { 
                e.preventDefault();
                function sortassess(a,b){
                    return a.money-b.money
                }
                jeson.sort(sortmoney);
                // $(".paier").remove();
                xuanran();
            });
            // selector
            $(".shoghj").click(function (e) { 
                e.preventDefault();
                function sortxiangmu(a,b){
                    return a.cishu-b.cishu
                }
                jeson.sort(sortmoney);
                // $(".paisan").remove();
                xuanran();
            });
            
            
        },
        

    });
    
    

    $.ajax({
        url:"../json/json2.json",
        type:"GET",
        dataType:"json",
        success:function(result){
            var jeson = result.dataer;
            for(var i=0;i<jeson.length;i++){
                var odiv = $(
                    `
                 <div class="col-md-6">
                <div class="kfzhe ">
                    <div class="kfzhe_yi">
                        <img src="img/di1.png" alt="">
                    </div>

                    <div class="kfzhe_er">
                         <img src="https://dn-coding-net-production-static.codehub.cn/cb6b9c4c-2f22-4aec-a1db-7d373371c570.jpg?imageMogr2/auto-orient/format/jpeg/crop/!128x128a0a0" alt="">
                    </div>
                    
                    <div class="kfzhe_san">  
                           <div class="name">`+jeson[i].name +`</div>
                           <div class="info">
                            <span>最擅长：<span>`+jeson[i].sahnchang+`</span></span>
                            <span>参与项目： <span>`+jeson[i].xiangmu+`</span></span>
                            <span>城市： <span>`+jeson[i].chengshi+`</span></span>
                           </div>
                           <div class="shoru">
                               总评分： 
                               <strong>`+jeson[i].assess+`</strong>
                           </div>
                    </div>
                </div>
                </div>

                    `
                )
                $(".paier").append(odiv);
            }
        }

    });


    $.ajax({
        url:"../json/json2.json",
        type:"GET",
        dataType:"json",
        success:function(result){
            var jeson = result.datasan;
            for(var i=0;i<jeson.length;i++){
                var odiv = $(
                    `
                 <div class="col-md-6">
                <div class="kfzhe ">
                    <div class="kfzhe_yi">
                        <img src="img/di1.png" alt="">
                    </div>

                    <div class="kfzhe_er">
                    <img src="https://coding.net/static/fruit_avatar/Fruit-20.png" alt="">
                    </div>
                    
                    <div class="kfzhe_san">  
                           <div class="name">`+jeson[i].name +`</div>
                           <div class="info">
                            <span>最擅长：<span>`+jeson[i].sahnchang+`</span></span>
                            <span>参与项目： <span>`+jeson[i].xiangmu+`</span></span>
                            <span>城市： <span>`+jeson[i].chengshi+`</span></span>
                           </div>
                           <div class="shoru">
                               报名次数： 
                               <strong>`+jeson[i].cishu+`</strong>
                           </div>
                    </div>
                </div>
                </div>

                    `
                )
                $(".paisan").append(odiv);
            }
        }

    });



})