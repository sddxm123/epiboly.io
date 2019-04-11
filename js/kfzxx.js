$(document).ready(function(){
   var sheji=[
        {"tp":"计划交付日期","jh":"计划金额"},
        {"tp":"计划交付日期","jh":"计划金额"}
        ];

        var wsheji=JSON.stringify(sheji);
        localStorage.sheji = wsheji;

        var sheji2 =JSON.parse(localStorage.sheji);

        for(var i=0;i<sheji2.length;i++){
           var wsj1= $(`
           <div class="w-contets row">
             <p class=" ww-p col-xs-7">`+sheji[i].tp+`</p>
             <p class="ww-p col-xs-5">`+sheji[i].jh+`</p>

             <p class="ww-p1-1  col-xs-7">计划交付日期

                   <span class="w-block">已延期10天</span>
             </p>
             <p class="ww-p1-1 col-xs-5">￥1206</p>
             <p class="ww-p1  col-xs-7">交付说明</p>
             <p class="ww-p1 col-xs-5"></p>
             <p class="ww-p1-1  col-xs-7">完成设计图</p>
             <p class="ww-p1 col-xs-5"></p>
           </div>

           <div class="w-dinji row">
              <p class="ww-botton" >
                 <button>编辑阶段</button>
                 <button class="w-button">托管阶段数</button>
              </p>
           </div>
             `)
        }

         $(".w-shejitu").append(wsj1);




         var web=[
              {"w1":"NO.18241 web 网站","w2":"￥8888"},
              {"w1":"NO.18241 web 网站","w2":"￥8888"}
          ];
          var wweb=JSON.stringify(web);
          localStorage.web=wweb;

          var web1 = JSON.parse(localStorage.web);

          for(var i=0;i<web1.length;i++){
            var web2=$(` <div class="web-1 row">
              <div class="col-sm-10 col-xs-12  web-left">
             <h2>`+web[i].w1+`</h2>
              </div>
              <div class="col-sm-2 col-xs-12  web-right">
                 <p>
                   <span>`+web[i].w2+`</span>
                   <span>项目金额</span>
                 </p>
               </div>
          </div>
          <div class="row web-zm">
             <p class="col-sm-3">招募:<span>开发者团队</span></p>
             
           
             <p class="col-sm-3">类型:<span>web网站</span></p>
            <p class="col-sm-3"></p>
           
           
            <p class="col-sm-3"></p>
          </div>

          <div class="row  web-zm">
             <p class="col-sm-3">服务:<span>开发软件</span></p>
           
            
            <p class="col-sm-3">周期:<span>8天</span></p>
            <p class="col-sm-3"></p>
           
            <p class="col-sm-3"></p>
          </div>`)
          }

          $(".web").append(web2);
})