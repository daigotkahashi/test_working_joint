// JavaScript Document

//スクロールによるヘッダーの変化
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 700)
});



 //ハンバーガーメニュー動作
$(function () {
  $('.burger-btn').on('click', function () {
    $('.burger-btn').toggleClass('close');
    $('.nav-wrapper').toggleClass('fade');
    $('body').toggleClass('noscroll');
  })
});

// スクロール
$('#page-link a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  var pos = $(elmHash).offset().top;  //idの上部の距離を取得
  $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  return false;
});

$(function () {
  $('#page-link a[href*="#"]').on('click', function () {
    $('.burger-btn').toggleClass('close');
    $('.nav-wrapper').toggleClass('slide-in');
  });
});