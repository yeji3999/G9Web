$(document).ready(function() {
  $(".card-img-top").on({
    mouseenter: function() {
      $(this).css("transform", "scale(1.1)");
      $(this).css("transition-duration", "0.6s");
    },
    mouseleave: function() {
      $(this).css("transform", "scale(1)");
    }
  });
});
