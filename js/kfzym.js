$(function(){

    // $(".bti span").eq(0).css("color","red");
    $(".shoruo").css("color","red");


    $(".bti span").click(function(){
        $(".shoruo").css("color","");
        $(this).addClass("shoruli").siblings().removeClass("shoruli");
        // $(this).eq(0).removeClass("shoruli");//默认让第一个div显示
      
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
                   var imgi = i+1;
                var odiv = $(
                    `
                 <div class="col-md-6">
                <div class="kfzhe ">
                    <div class="kfzhe_yi">
                        <img src="img/`+imgi+`.png" alt="">
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
                               <p style="display: inline-block; padding: 0 3px 0 5px">评分:<span>`+jeson[i].assess+`</span> </p>
                           </div>
                    </div>
                </div>
                </div>

                    `
                )
                $(".paiyi").append(odiv);
                
            } 
            $(".shoruo").click(function (e) { 
                e.preventDefault();
                function sortmoney(a,b){
                    return b.money-a.money
                }
                jeson.sort(sortmoney);
                $(".paiyi").children().remove();
                // $("div").remove(".paiyi");
                xuanran();
            });
            $(".shurogh").click(function (e) { 
                e.preventDefault();
                function sortassess(a,b){
                    return b.assess-a.assess
                }
                jeson.sort(sortassess);
                $(".paiyi").children().remove();
                xuanran();
            });
            $(".shoghj").click(function (e) { 
                e.preventDefault();
                function sortxiangmu(a,b){
                    return b.xiangmu-a.xiangmu
                }
                jeson.sort(sortxiangmu);
                $(".paiyi").children().remove();
                // $(".paiyi").remove();
                xuanran();
            });
        } 
    
        },

        
    });
    
    

    // $.ajax({
    //     url:"../json/json2.json",
    //     type:"GET",
    //     dataType:"json",
    //     success:function(result){
    //         var jeson = result.dataer;
    //         function sortmoney(a,b){
    //             return a.money-b.money
    //         }
    //         jeson.sort(sortmoney);
    //         // $(".paier").remove();
    //         xuanran();

    //         function xuanran(){

    //             for(var i=0;i<jeson.length;i++){
    //                 var imgi=i+1;
    //                 var odiv = $(
    //                     `
    //                 <div class="col-md-6">
    //                 <div class="kfzhe ">
    //                     <div class="kfzhe_yi">
    //                         <img src="img/`+imgi+`.png" alt="">
                            
    //                     </div>

    //                     <div class="kfzhe_er">
    //                         <img src="https://dn-coding-net-production-static.codehub.cn/cb6b9c4c-2f22-4aec-a1db-7d373371c570.jpg?imageMogr2/auto-orient/format/jpeg/crop/!128x128a0a0" alt="">
    //                     </div>
                        
    //                     <div class="kfzhe_san">  
    //                         <div class="name">`+jeson[i].name +`</div>
    //                         <div class="info">
    //                             <span>最擅长：<span>`+jeson[i].sahnchang+`</span></span>
    //                             <span>参与项目： <span>`+jeson[i].xiangmu+`</span></span>
    //                             <span>城市： <span>`+jeson[i].chengshi+`</span></span>
    //                         </div>
    //                         <div class="shoru">
    //                             总评分： 
    //                             <strong>`+jeson[i].assess+`</strong>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 </div>

    //                     `
    //                 )
    //                 $(".paier").append(odiv);
    //             }
    //         }
    //         $(".shurogh").click(function (e) { 
    //             e.preventDefault();
    //             function sortassess(a,b){
    //                 return a.assess-b.assess
    //             }
    //             jeson.sort(sortassess);
    //             // $(".paier").remove();
    //             // xuanran();
    //         });
    
    //     }
       
    // });


    // $.ajax({
    //     url:"../json/json2.json",
    //     type:"GET",
    //     dataType:"json",
    //     success:function(result){
    //         var jeson = result.datasan;
    //         function sortacishu(a,b){
    //             return b.cishu-a.cishu
    //         }
    //         jeson.sort(sortacishu);
    //         // $(".paisan").remove();
    //         xuanran();

    //         function xuanran(){
    //         for(var i=0;i<jeson.length;i++){
    //             var odiv = $(
    //                 `
    //              <div class="col-md-6">
    //             <div class="kfzhe ">
    //                 <div class="kfzhe_yi">
    //                     <img src="img/di1.png" alt="">
    //                 </div>

    //                 <div class="kfzhe_er">
    //                 <img src="https://coding.net/static/fruit_avatar/Fruit-20.png" alt="">
    //                 </div>
                    
    //                 <div class="kfzhe_san">  
    //                        <div class="name">`+jeson[i].name +`</div>
    //                        <div class="info">
    //                         <span>最擅长：<span>`+jeson[i].sahnchang+`</span></span>
    //                         <span>参与项目： <span>`+jeson[i].xiangmu+`</span></span>
    //                         <span>城市： <span>`+jeson[i].chengshi+`</span></span>
    //                        </div>
    //                        <div class="shoru">
    //                            报名次数： 
    //                            <strong>`+jeson[i].cishu+`</strong>
    //                        </div>
    //                 </div>
    //             </div>
    //             </div>

    //                 `
    //             )
    //             $(".paisan").append(odiv);
    //         }
    //         $(".shoghj").click(function (e) { 
    //             e.preventDefault();
    //             function sortcishu(a,b){
    //                 return a.cishu-b.cishu
    //             }
    //             jeson.sort(sortcishu);
    //             // $(".paisan").remove();
    //             // xuanran();
    //         });
    //     }
    // }

    // });


   

    
    // selector
    
})