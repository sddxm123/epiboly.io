var diyige = [
    { "disanfang": "QQ", "zhucedlu": "密码找回", "yhuzx": "用户资料修改更新", "weix": "微信" },
]
var lgj = JSON.stringify(diyige);
localStorage.diyige = lgj;

var qidan = JSON.parse(localStorage.diyige);

for (i = 0; i < diyige.length; i++) {
    var kuajia = $(`
    <tr>  
                <td class="zuo_yi col-ma-2" rowspan="3" colspan="2" style="vertical-align:middle">基本资料</td>
                <td class="col-ma-2">注册登录</td>
                <td class="col-ma-8"><span>`+ qidan[i].zhucedlu + `</span></td>
            </tr>
            <tr>
               
                <td>第三方登录</td>
                <td><span>`+ qidan[i].disanfang + qidan[i].weix + `</span></td>
            </tr>
            <tr>
                    
                    <td>用户中心</td>
                    <td><span>`+ qidan[i].yhuzx + `</span> </td>
            </tr>
           
           
    `)
    $(".ls").append(kuajia);
}
for (i = 0; i < diyige.length; i++) {
    var kuajia = $(`
   
    `)
    $(".ls").append(kuajia);
}

// --------------
var diyige = [
    { "fenlei": "高级功能", "mkyi": "通知推送方式", "gndyi": "邮件通知", "mker": "高级搜索", "gnder": "算法搜索", "mksan": "客户服务", "gndsan": "工单列表详情", "mksi": "推广", "gndsi": "推荐注册" },
    { "fenlei": "其他", "mkyi": "UI设计（单选）", "gndyi": "普通设计", "mker": "桌面端分辨率支持（宽度）", "gnder": "默认", "mksan": "移动端响应式	", "gndsan": "默认", "mksi": "浏览器兼容性	", "gndsi": "默认" }
]
var lgj = JSON.stringify(diyige);
localStorage.diyige = lgj;

var qidan = JSON.parse(localStorage.diyige);

for (i = 0; i < diyige.length; i++) {
    var kuajia = $(`
    <tr>  
                <td class="zuo_yi col-ma-2" rowspan="4" colspan="2" style="vertical-align:middle">`+ qidan[i].fenlei + `</td>
                <td class="col-ma-2">`+ qidan[i].mkyi + `</td>
                <td class="col-ma-8"><span>`+ qidan[i].gndyi + `</span></td>
            </tr>
            <tr>
               
                <td>`+ qidan[i].mker + `</td>
                <td><span>`+ qidan[i].gnder + `</span></td>
            </tr>
            <tr>
                    
                    <td>`+ qidan[i].mksan + `</td>
                    <td><span>`+ qidan[i].gndsan + `</span> </td>
            </tr>

            <tr>
                    
                    <td>`+ qidan[i].mksi + `</td>
                    <td><span>`+ qidan[i].gndsi + `</span> </td>
            </tr>

    `)
    $(".ls").append(kuajia);
}
for (i = 0; i < diyige.length; i++) {
    var kuajia = $(`
   
    `)
    $(".ls").append(kuajia);
}

var diyige = [
    { "htgnyi": "主内容增删改查 文本搜索 筛选和排序 内容发布状态管理", "htgner": "用户信息查看" },
]
var lgj = JSON.stringify(diyige);
localStorage.diyige = lgj;

var qidan = JSON.parse(localStorage.diyige);

for (i = 0; i < diyige.length; i++) {
    var kuajia = $(`
    <tr>  
                <td class="zuo_yi col-ma-2"  colspan="2" style="vertical-align:middle">基本功能</td>
                <td class="col-ma-2">平台主内容展示</td>
                <td class="col-ma-8"><span>`+ qidan[i].htgnyi + `</span></td>
            </tr>
            <tr>
               <td colspan="2" style="text-align: center">高级功能</td>
                <td>用户管理</td>
                <td><span>`+ qidan[i].htgner + `</span></td>
            </tr>
            
           
           
    `)
    $(".lso").append(kuajia);
}
for (i = 0; i < diyige.length; i++) {
    var kuajia = $(`
   
    `)
    $(".lso").append(kuajia);
}
