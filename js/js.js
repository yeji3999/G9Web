// 메뉴 마우스 오버
$(document).ready(function() {
  $(".me1").on({
    mouseenter: function() {
      $("#list1").css("display", "block");
    },
    mouseleave: function() {
      $("#list1").css("display", "none");
    }
  });
});
$(document).ready(function() {
  $(".me2").on({
    mouseenter: function() {
      $("#list2").css("display", "block");
    },
    mouseleave: function() {
      $("#list2").css("display", "none");
    }
  });
});
$(document).ready(function() {
  $(".me3").on({
    mouseenter: function() {
      $("#list3").css("display", "block");
    },
    mouseleave: function() {
      $("#list3").css("display", "none");
    }
  });
});

// 탭메뉴
$(document).ready(function(){
   
  $('.vip_area ul li').click(function(){
    var tab_id = $(this).attr('data-tab');
 
    $('.vip_area ul li').removeClass('on');
    $('.tab_cont').removeClass('on');
 
    $(this).addClass('on');
    $("#"+tab_id).addClass('on');
    $("on").css('background-color','black');
  })
 
})

// 탭 메뉴 고정
$( document ).ready( function() {
        var jbOffset = $( '.vip_tab' ).offset();
        $( window ).scroll( function() {
          if ( $( document ).scrollTop() > jbOffset.top ) {
            $( '.vip_tab' ).addClass( 'floatingTab' );
          }
          else {
            $( '.vip_tab' ).removeClass( 'floatingTab' );
          }
        });
      } );

document.addEventListener('DOMContentLoaded', function(){ //DOM 생성 후 이벤트 리스너 등록
  //더보기 버튼 이벤트 리스너
  document.querySelector('.btn_open').addEventListener('click', function(e){
      
      let classList = document.querySelector('.box_detail-view').classList; // 더보기 프레임의 클래스 정보 얻기
      let contentHeight = document.querySelector('.box_detail-view > #ifrItemDetail').offsetHeight; //컨텐츠 높이 얻기


      // 더보기
      if(classList.contains('box_detail-view--active')){
          classList.remove('box_detail-view--active');
          if(contentHeight > 600){
              classList.add('ifrItemDetail');
          }else{
              document.querySelector('.btn_open').classList.add('hide');
          }
      }
      //전체보기시 더보기 버튼 감추기 & 감추기 버튼 표시
      if(!classList.contains('box_detail-view--active')){
          e.target.classList.add('hide');
          document.querySelector('.btn_close').classList.remove('hide');
      }
      
  });
  // 감추기 버튼 이벤트 리스너
document.querySelector('.btn_close').addEventListener('click', function(e){
  e.target.classList.add('hide');
  document.querySelector('.btn_open').classList.remove('hide'); // 더보기 버튼 감춤
  document.querySelector('.box_detail-view').classList.add('box_detail-view--active'); // 초기 감춤 상태로 복귀
});
});
