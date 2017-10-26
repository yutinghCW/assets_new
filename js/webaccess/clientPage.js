	$(function(){
	    $('.completeBox').hide();

	    $("html, body").css("overflow", "hidden");
	    disableScroll();

		$('.step1').delay(2000).queue(function(){
			$(this).removeClass("ing");
			$(this).addClass("pass");
			$('.step2').addClass("ing");
		});
		$('.step2').delay(4000).queue(function(){
			$(this).removeClass("ing");
			$(this).addClass("pass");
			$('.step3').addClass("ing");
		});
		$('.step3').delay(6000).queue(function(){
			$(this).removeClass("ing");
			$(this).addClass("pass");
			$('.stepBox').delay(800).animate({
				opacity: 0,
				left: '-20px'
			}, 'linear', function() {
				$(this).remove();
			});
			$('.completeBox').delay(1200).fadeIn(function(){
			    $(".iconStatus .trigger").addClass("drawn");
			    var $iconStatus = $(".iconStatus").attr('class');
			    console.log($iconStatus);
				$(".iconStatus p").delay(500).animate({
					opacity: 1
				});
				if ($iconStatus == "iconStatus successStatus") {
				    $('.checkLoader').delay(1800).fadeOut(function () {
				        enableScroll();
				        $("html, body").css("overflow", "initial");
				    });
				}
			});
		});

		function preventDefault(e) {
		    e = e || window.event;
		    if (e.preventDefault)
		        e.preventDefault();
		    e.returnValue = false;
		}

		function preventDefaultForScrollKeys(e) {
		    if (keys[e.keyCode]) {
		        preventDefault(e);
		        return false;
		    }
		}

		function disableScroll() {
		    if (window.addEventListener) // older FF
		        window.addEventListener('DOMMouseScroll', preventDefault, false);
		    window.onwheel = preventDefault; // modern standard
		    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
		    window.ontouchmove = preventDefault; // mobile
		    document.onkeydown = preventDefaultForScrollKeys;
		}

		function enableScroll() {
		    if (window.removeEventListener)
		        window.removeEventListener('DOMMouseScroll', preventDefault, false);
		    window.onmousewheel = document.onmousewheel = null;
		    window.onwheel = null;
		    window.ontouchmove = null;
		    document.onkeydown = null;
		}


	});
