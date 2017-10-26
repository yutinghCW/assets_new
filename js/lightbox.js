$(function(){
	
	// 隱藏背景與訊息對話框
	$(".remove").click(function () {
		$(".statusC").fadeIn(300);
		return false;
	});
	$(".cancel").click(function () {
		$(this).parent().parent().fadeOut(300);
	});
	$(".decide").click(function () {
		$(this).parent().parent().fadeOut(300);
		setTimeout(function () {
			$(".statusB").fadeIn(300);
		}, 1500);
		setTimeout(function () {
			$(".statusB").fadeOut(300);
		}, 3000);
	}); // JavaScript Document

	
	// sharebtn隱藏背景與訊息對話框
	$(".shareBtn").click(function () {
		$(this).siblings().fadeIn(300);
	});
	$(".lightboxbg").click(function () {
		$(this).parent().fadeOut(300);
	});
	
	
	// subscritionBox隱藏背景與訊息對話框

	$(".goBack").click(function () {
		setTimeout(function () {
			$(".subscritionBox").fadeOut(300);
		});
	});
	
	
	// rightReadSubBox2隱藏背景與訊息對話框
	$(".rightReadSub").click(function () {
		$(".rightReadSubBox").fadeIn(300);
	});
	$(".subscribe1").click(function () {
		$(".rightReadSubBox").fadeOut(300);
	});
	
	
});