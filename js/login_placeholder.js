$(document).ready(function(){

    $('#memberlogin_id').focusin(function(){
        $(this).attr("placeholder", "");
    })
    $('#memberlogin_id').focusout(function(){
        $(this).attr("placeholder", "아이디");
    })
    $('#memberlogin_pw').focusin(function(){
        $(this).attr("placeholder", "");
    })
    $('#memberlogin_pw').focusout(function(){
        $(this).attr("placeholder", "비밀번호");
    })
    $('#nonmemberlogin_name').focusin(function(){
        $(this).attr("placeholder", "");
    })
    $('#nonmemberlogin_name').focusout(function(){
        $(this).attr("placeholder", "주문자 이름");
    })
    $('#nonmemberlogin_phone').focusin(function(){
        $(this).attr("placeholder", "");
    })
    $('#nonmemberlogin_phone').focusout(function(){
        $(this).attr("placeholder", "휴대폰 번호");
    })
    $('#nonmemberlogin_pw').focusin(function(){
        $(this).attr("placeholder", "");
    })
    $('#nonmemberlogin_pw').focusout(function(){
        $(this).attr("placeholder", "주문 비밀번호");
    })
})
