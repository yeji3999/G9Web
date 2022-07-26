$(document).ready(function() {
  //최상단 체크박스 클릭
  $("#chk_all_agree").click(function() {
    //클릭되었으면
    if ($("#chk_all_agree").prop("checked")) {
      //input태그의 name이 chk인 태그들을 찾아서 checked옵션을 true로 정의
      $("input[name=chk]").prop("checked", true);
      $("input[name=check]").prop("checked", true);
      //클릭이 안되있으면
    } else {
      //input태그의 name이 chk인 태그들을 찾아서 checked옵션을 false로 정의
      $("input[name=chk]").prop("checked", false);
      $("input[name=check]").prop("checked", false);
    }
  })

  $("#chk_all_agree2").click(function() {
    //클릭되었으면
    if ($("#chk_all_agree2").prop("checked")) {
      //input태그의 name이 chk인 태그들을 찾아서 checked옵션을 true로 정의
      $("input[name=chk]").prop("checked", true);
      //클릭이 안되있으면
    } else {
      //input태그의 name이 chk인 태그들을 찾아서 checked옵션을 false로 정의
      $("input[name=chk]").prop("checked", false);
    }
  })
  $("#chk_all_agree3").click(function() {
    //클릭되었으면
    if ($("#chk_all_agree3").prop("checked")) {
      //input태그의 name이 chk인 태그들을 찾아서 checked옵션을 true로 정의
      $("input[name=check]").prop("checked", true);
      //클릭이 안되있으면
    } else {
      //input태그의 name이 chk인 태그들을 찾아서 checked옵션을 false로 정의
      $("input[name=check]").prop("checked", false);
    }
  })
})
