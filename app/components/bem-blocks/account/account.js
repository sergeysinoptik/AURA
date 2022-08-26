$(document).ready(function() {

  $(".account-tab-content").hide();
  $("#tab1_content").show();
  $('ul.tabs li').removeClass('active');
  $('#tab1').addClass('active');

  $("#tab1").click(function() {
    $(".account-tab-content").hide();
    $("#tab1_content").show();
    $('ul.tabs li').removeClass('active');
    $('#tab1').addClass('active');
  });

  $("#tab2").click(function() {
    $(".account-tab-content").hide();
    $("#tab2_content").show();
    $('ul.tabs li').removeClass('active');
    $('#tab2').addClass('active');
  });

  $("#tab3").click(function() {
    $(".account-tab-content").hide();
    $("#tab3_content").show();
    $('ul.tabs li').removeClass('active');
    $('#tab3').addClass('active');
  });

  $("#tab4").click(function() {
    $(".account-tab-content").hide();
    $("#tab4_content").show();
    $('ul.tabs li').removeClass('active');
    $('#tab4').addClass('active');
  });
});