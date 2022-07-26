$(document).ready(function() {
  $(".menu_mypage").on({
    mouseenter: function() {
      $(".mypage").css("display", "block");
    },
    mouseleave: function() {
      $(".mypage").css("display", "none");
    }
  });
});

// $(document).ready(function() {
//   $(function(){
//     $('#keyword').click(function(){
//         $('#labelSearchBox').css('display','none');
//         $('#searchSuggest').css('display','block');
//     });
// });
// });


function searchEvent() {
  document.getElementById("labelSearchBox").style.display = "none";
  document.getElementById("searchSuggest").style.display = "block";
}

function suggestClose() {
  document.getElementById("searchSuggest").style.display = "none";
  document.getElementById("labelSearchBox").style.display = "block";
}
