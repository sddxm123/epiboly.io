$(function(){
    $(".dianji").click(function(){
        $(".xiala").slideToggle("solw");
    });

    // ajax
    $.ajax({
        url: "json/jeson.json",
        type: "GET",
        dataType: "json",
        success: function (result) {
            console.log(result)
            var jeson = result.jeson;
            for (var i = 0; i < jeson.length; i++) {
                var odiv = $(`
                <div class="dierge_er ">
        <div class="hezizj row">
            <!-- hezizj是包上面的盒子 -->
            <div class="hezizj_zuo col-md-6 col-xs-5">
                <h3>NO.<span style="font-size: 15px">`+ jeson[i].bianhao+`</span> <span>`+jeson[i].name+`</span></h3>
            </div>
            <div class="hezizj_yb col-md-6 col-xs-7">
                <!-- 右 -->
                <div class="tutu">
                    <img src="img/liulanl.png" alt="">
                </div>
                <span>浏览量 <span>`+ jeson[i].liulan+`</span> </span>
                <div class="tutu">
                    <img src="img/jusho (1).png" alt="">
                </div>
                <span>报名数 5 </span>
                <span> | </span>
                <span style="color:`+ jeson[i].col +`"><span class="zhuantaio">`+jeson[i].zhuangtai+`</span></span>
            </div>
            <div class="cebla"></div>
        </div>
        <div class="dierge_san row">
            <div class="san_zuo col-md-6 row">
                <div class="zuo_tu col-md-6 col-xs-6">
                    <img src="img/`+jeson[i].img +`" alt="">
                </div>
                <div class="tishi col-md-6 col-xs-6 ">
                    <div class="tishi_yi">
                        <span>`+jeson[i].kaifa+`</span>
                        <span></span>
                    </div>
                    <div class="tishi_er ">
                        <p>
                            <span>金额</span>
                            ￥<span>`+jeson[i].money +`</span> |
                        </p>
                        <p>
                            <span>周期</span>
                            <span>`+jeson[i].zhoqi+`</span>天 |
                        </p>
                    </div>
                </div>
            </div>
            <div class="san_ybian col-md-6 ">
                <div class="san_btn ">
                    <button class="qux" style=" display:`+jeson[i].yingcyi+`">取消发布</button>
                    <button class="xmuzt">查看项目状态</button>
                    <div class="cebla"></div>
                </div>
            </div>
            <div class="cebla"></div>
        </div>
    </div>
                `)
                $(".dierge").append(odiv);

                $(".qux").click(function(){
                    $(this).css("display","none");
                    $(this).next().css("display","none");
                    $(this).parents(".dierge_san").siblings(".hezizj").find(".zhuantaio").css("color","#696969");
                    $(this).parents(".dierge_san").siblings(".hezizj").find(".zhuantaio").text("已取消");
                });
                
                
            }
            // alert(jeson)
            // for (i = 0; i < jeson.length; i++) {
            //     var kuajia = $(``)
            //     $(".dierge").append(odiv);
            // }
            $(".xiala li").on("click",function(){

                var _this=$(this);
                $(".dierge>div").remove()
                $.each(jeson,function(i,n){
                    if(_this.text() == n.zhuangtai){
                    console.log(_this.text(),jeson[i].zhuangtai)

                        var odiv = $(`
    <div class="dierge_er ">
        <div class="hezizj row">
            <!-- hezizj是包上面的盒子 -->
            <div class="hezizj_zuo col-md-6 col-xs-5">
                <h3>NO.<span style="font-size: 15px">`+ jeson[i].bianhao+`</span> <span>`+jeson[i].name+`</span></h3>
            </div>
            <div class="hezizj_yb col-md-6 col-xs-7">
                <!-- 右 -->
                <div class="tutu">
                    <img src="img/liulanl.png" alt="">
                </div>
                <span>浏览量 <span>`+ jeson[i].liulan+`</span> </span>
                <div class="tutu">
                    <img src="img/jusho (1).png" alt="">
                </div>
                <span>报名数 5 </span>
                <span> | </span>
                <span style="color:`+ jeson[i].col +`"><span class="zhuantaio">`+jeson[i].zhuangtai+`</span></span>
            </div>
            <div class="cebla"></div>
        </div>
        <div class="dierge_san row">
            <div class="san_zuo col-md-6 row">
                <div class="zuo_tu col-md-6 col-xs-6">
                    <img src="img/`+jeson[i].img +`" alt="">
                </div>
                <div class="tishi col-md-6 col-xs-6 ">
                    <div class="tishi_yi">
                        <span>`+jeson[i].kaifa+`</span>
                        <span></span>
                    </div>
                    <div class="tishi_er ">
                        <p>
                            <span>金额</span>
                            ￥<span>`+jeson[i].money +`</span> |
                        </p>
                        <p>
                            <span>周期</span>
                            <span>`+jeson[i].zhoqi+`</span>天 |
                        </p>
                    </div>
                </div>
            </div>
            <div class="san_ybian col-md-6 ">
                <div class="san_btn ">
                    <button class="qux" style=" display:`+jeson[i].yingcyi+`">取消发布</button>
                    <button class="bianji" style=" display:`+jeson[i].yingcer+`">编辑项目</button>
                    <button class="xmuzt">查看项目状态</button>
                    <div class="cebla"></div>
                </div>
            </div>
            <div class="cebla"></div>
        </div>
    </div>
                `);
                
                $(".dierge").append(odiv);
                console.log($(".dierge"))

                    }else if(_this.text() == "全部状态"){
                        var odiv = $(`
                        <div class="dierge_er ">
                            <div class="hezizj row">
                                <!-- hezizj是包上面的盒子 -->
                                <div class="hezizj_zuo col-md-6 col-xs-5">
                                    <h3>NO.<span style="font-size: 15px">`+ jeson[i].bianhao+`</span> <span>`+jeson[i].name+`</span></h3>
                                </div>
                                <div class="hezizj_yb col-md-6 col-xs-7">
                                    <!-- 右 -->
                                    <div class="tutu">
                                        <img src="img/liulanl.png" alt="">
                                    </div>
                                    <span>浏览量 <span>`+ jeson[i].liulan+`</span> </span>
                                    <div class="tutu">
                                        <img src="img/jusho (1).png" alt="">
                                    </div>
                                    <span>报名数 5 </span>
                                    <span> | </span>
                                    <span style="color:`+ jeson[i].col +`"><span class="zhuantaio">`+jeson[i].zhuangtai+`</span></span>
                                </div>
                                <div class="cebla"></div>
                            </div>
                            <div class="dierge_san row">
                                <div class="san_zuo col-md-6 row">
                                    <div class="zuo_tu col-md-6 col-xs-6">
                                        <img src="img/`+jeson[i].img +`" alt="">
                                    </div>
                                    <div class="tishi col-md-6 col-xs-6 ">
                                        <div class="tishi_yi">
                                            <span>`+jeson[i].kaifa+`</span>
                                            <span></span>
                                        </div>
                                        <div class="tishi_er ">
                                            <p>
                                                <span>金额</span>
                                                ￥<span>`+jeson[i].money +`</span> |
                                            </p>
                                            <p>
                                                <span>周期</span>
                                                <span>`+jeson[i].zhoqi+`</span>天 |
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="san_ybian col-md-6 ">
                                    <div class="san_btn ">
                                        <button class="qux" style=" display:`+jeson[i].yingcyi+`">取消发布</button>
                                        <button class="bianji" style=" display:`+jeson[i].yingcer+`">编辑项目</button>
                                        <button class="xmuzt">查看项目状态</button>
                                        <div class="cebla"></div>
                                    </div>
                                </div>
                                <div class="cebla"></div>
                            </div>
                        </div>
                                    `);
                                    
                                    $(".dierge").append(odiv);
                    }
                    $(".qux").click(function(){
                        $(this).css("display","none");
                        $(this).next().css("display","none");
                        $(this).parents(".dierge_san").siblings(".hezizj").find(".zhuantaio").css("color","#696969");
                        $(this).parents(".dierge_san").siblings(".hezizj").find(".zhuantaio").text("已取消");
                    });
                    

                })
            });
            
        },

        error: function (a) {
            console.log(55,a)
        }
    });
    console.log($(".qux"));
    
    
});

