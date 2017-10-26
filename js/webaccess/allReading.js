jQuery(function () {
	jQuery('#allinone_carousel_charming').allinone_carousel({
		skin: 'charming',
		width: 1024,
		height: 450,
		autoPlay: 3,
		resizeImages: true,
		autoHideBottomNav: false,
		showElementTitle: false,
		verticalAdjustment: 10,
		showPreviewThumbs: false,
		numberOfVisibleItems: 5,
		nextPrevMarginTop: 0,
		playMovieMarginTop: 0,
		bottomNavMarginBottom: 0,
		showOnInitBottomNav: false,
		showCircleTimer: false
	});
	
	$('a[href*=#].page-scroll').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 1000);
		return false;
		}
		}
	});

	wow = new WOW({
		animateClass: 'animated',
		offset: 100,
		callback: function (box) {
			console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
		}
	});
	wow.init()
});

$('.severalPad.nowScreen ul li').first().addClass('active');

// 當有表單時，OP新增CLASSNAME
$('.vipInvite').parent().parent().parent().parent().addClass('active');
$('.bottomPop').parent('.wrapper').children('.opening').addClass('bottomPopAct');


$('.bottomPop .btn-close').click(function () {
	$(this).parent().slideUp('slow');
});
	
function easeOutBounce(x) {
	var base = -Math.cos(x * (0.5 * Math.PI)) + 1;
	var rate = Math.pow(base, 1.5);
	var rateR = Math.pow(1 - x, 2);
	var progress = -Math.abs(Math.cos(rate * (2.5 * Math.PI))) + 1;
	return (1 - rateR) + (progress * rateR)
}

(function (window, $) {
	$(document).ready(function () {
		var $slidermobile = $("ul.bxsliderMobile");
		var slidermobile = $slidermobile.bxSlider({
			mode: 'horizontal',
			auto: true,
			pagerCustom: '.bx-pagerMobile'
		});
	})
})(window, jQuery);

windowWidth = (!(window.innerWidth)) ? document.documentElement.clientWidth : window.innerWidth;
windowHeight = (!(window.innerHeight)) ? document.documentElement.clientHeight : window.innerHeight;
$(window).on("load touchmove scroll resize", function () {
	var s = $(window).scrollTop();
	if (windowWidth > 767) {
		var posi = $('.perspectiveView').offset().top + 768;
		var scrolled = s + windowHeight - posi;
		if (posi < s + windowHeight) {
			$('.perspectiveView .perspectiveScroll img.scrollAnimate').css('top', 50 - (scrolled * 0.3) + 'px');
			$('.perspectiveView .perspectiveScroll img.scrollAnimate').css('right', 0 - 15 - (scrolled * 0.3) + 'px')
		}
	}
	if (windowWidth <= 767) {
		var posi = $('.perspectiveView').offset().top + 480;
		var scrolled = s + windowHeight - posi;
		if (posi < s + windowHeight) {
			$('.perspectiveView .perspectiveScroll img.scrollAnimate').css('top', 50 - (scrolled * 0.1) + 'px');
			$('.perspectiveView .perspectiveScroll img.scrollAnimate').css('right', 0 - 15 - (scrolled * 0.75) + 'px')
		}
	}
});

//scroll
var $headerOffset = $('section.opening').offset().top + 50;
var $topBtn = $('a.goTop');
var $bookBtn = $('a#subscription');
var scroTop = 0;
$(window).scroll(function () {
	scroTop = $(window).scrollTop();
	if (scroTop > $headerOffset) {
    $topBtn.addClass('fixed');
		$bookBtn.addClass('fixed');
	} else {
    $topBtn.removeClass('fixed');
		$bookBtn.removeClass('fixed');
	}
});

/* ========================================================================
 * Bootstrap: transition.js v3.3.7
=========================================================================== */
+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
=========================================================================== */
+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.7'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);
// 取代立體閱讀圖片

var width = $(window).width(), height = $(window).height();
if ((width < 768)) {
	$('.VTslider img').attr('src', 'https://www.cw.com.tw/assets_new/img/webaccess/visualH.png');
};