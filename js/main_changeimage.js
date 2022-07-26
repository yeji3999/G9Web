// $(document).ready(function(){
//  $('.hotdeal_favorite').click(function () {
//     $(this).toggleClass('hotdeal_click');
//  })
// })

$(document).ready(function() {
  $('.hotdeal_favorite').click(function() {
    var temp = $(this).parent().find(".hotdeal_favorite_cnt").text();
    if ($(this).hasClass('hotdeal_click')) {
      temp = eval(temp) - 1;
    } else {
      temp = eval(temp) + 1;
    }
    $(this).parent().find(".hotdeal_favorite_cnt").text(temp);
    $(this).toggleClass('hotdeal_click');
    $(this).addClass('hotdeal_click_hover');
    console.log($(this).attr('class'));
  })
  $('.hotdeal_favorite').hover(function() {
    console.log($(this).attr('class'));
    if (!$(this).hasClass('hotdeal_click')) {
      if (!$(this).hasClass('hotdeal_click_hover')) {
        $(this).addClass('hotdeal_click_hover');
      } else {
        $(this).removeClass('hotdeal_click_hover');
      }
      console.log($(this).attr('class'));
    } else {
      $(this).removeClass('hotdeal_click_hover');
      console.log($(this).attr('class'));
    }
  })
})
