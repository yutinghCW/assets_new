$(document).ready(function() {
	'use strict';
	$("#contentFrame").on('load',function() {
		var iframeHeight = $(this).contents().find("body");
		var h = iframeHeight.height();
		$(this).animate({'height': h},500);
	});
});