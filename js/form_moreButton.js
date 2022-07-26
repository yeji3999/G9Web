//
// function form_moreButton() {
//   if($(".form_iframe").css("display") == "none"){
//   $(".form_iframe").show();
//   $(".btn_txt_more").text("닫기");
//   }
//   else{
//     $(".form_iframe").hide();
//     $(".btn_txt_more").text("전체보기");
//   }
// }
$(document).ready(function () {
  $('.btn_txt_more').click(function () {
    if ($(this).parent().siblings('.form_iframe').css("display") == "none") {
      $(this).parent().siblings('.form_iframe').show();
      $(this).text("닫기");
    }
    else {
      $(this).parent().siblings('.form_iframe').hide();
      $(this).text("전체보기");
    }
  })
  $('li').click(function () {
      $(this).children('input').focus();
      $(this).children('.guide_txt').css('display', 'none');
      $(this).children('.check_msg').css('display', 'none');
      $(this).css('height', 'auto');
  })
  $('input').focusout(function () {
    if($(this).val()==""){
      $(this).siblings('.guide_txt').css('display', 'block');
      $(this).siblings('.check_msg').css('display', 'block');
      $(this).parent('li').css('height', 'auto');

    }
  })
})
