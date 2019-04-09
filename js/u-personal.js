$(function () {
    
    $(document).scrollTop(10)
    if ($(document).scrollTop() > 0) {
        $('.foot').css("position", "initial")
    }
    //修改
    $('.alter').click(function (e) {
        e.preventDefault();
        $(this).css("display", "none")
        $('.infoitem-content').eq($('.alter').index(this) * 2).css("display", "none");
        $('.infoalter').eq($('.alter').index(this)).css("display", "block");
        $(document).scrollTop(10)
        if ($(document).scrollTop() > 0) {
            $('.foot').css("position", "initial")
        }
    });
    //取消
    $('.user-btn-cancel').click(function (e) {
        alert($(window).width()); 
        e.preventDefault();
        $(document).scrollTop(10)
        if ($(document).scrollTop() > 0) {
            $('.foot').css("position", "fixed")
        }
        $('.infoitem-content').eq($('.user-btn-cancel').index(this) * 2).css("display", "block");
        $('.infoalter').eq($('.user-btn-cancel').index(this)).css("display", "none");
        $('.alter').eq($('.user-btn-cancel').index(this)).css("display", "block");
    })
    //提示
    $('.skillshint em').click(function () {
        $(this).parent().hide();
    })
})