$(function () {
    // console.log($("body"))
    $(document).scrollTop(10)
    if ($(document).scrollTop() > 0) {
        $('.foot').css("position", "initial")
    }
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
    $('.user-btn-cancel').click(function (e) {
        e.preventDefault();
        $(document).scrollTop(10)
        if ($(document).scrollTop() > 0) {
            $('.foot').css("position", "fixed")
        }
        $('.infoitem-content').eq($('.user-btn-cancel').index(this) * 2).css("display", "block");
        $('.infoalter').eq($('.user-btn-cancel').index(this)).css("display", "none");
        $('.alter').eq($('.user-btn-cancel').index(this)).css("display", "block");
    })
    $('.skillshint em').click(function () {
        $(this).parent().hide();
    })
})