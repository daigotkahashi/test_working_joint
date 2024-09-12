$(function(){
	// JavaScript Document
	/*-------------------------
	モバイルの時のボタン
	--------------------------*/
	$(".btn-trigger").on("touchstart",function(){
		$(this).toggleClass("active");
		$(".navigation").fadeToggle(500);
	});
});