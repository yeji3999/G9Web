function open_mainTabmenu(evt, maintapmenuName) {
  var i, main_tabmenucontent, main_tablinks;
  main_tabmenucontent = document.getElementsByClassName("main_tabmenucontent");
  for (i = 0; i < main_tabmenucontent.length; i++) {
    main_tabmenucontent[i].style.display = "none";
  }
  main_tablinks = document.getElementsByClassName("main_tablinks");
  for (i = 0; i < main_tablinks.length; i++) {
    main_tablinks[i].className = main_tablinks[i].className.replace(" active", "");
  }
  document.getElementById(maintapmenuName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("main_tapmenuContentOpen").click();
