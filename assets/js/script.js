/* Foot Cardigan
 * ..........................................................................
 * http://footcardigan.com/
*/

// @codekit-prepend "jquery-1.10.2.min.js", "bootstrap.min.js", "skrollr.js", "jquery.sidr.min.js", "idangerous.swiper.js";

$(document).ready(function(){

	/* Dev Width */
	/* ======================================================= */
	function whatWidth() {
		if (!$("#width").length) {
			$("body").append('<div id="width" class="dev alert alert-info"><p><strong><span class="pixels">100</span>px</strong> </p></div>');
		}
		var width = $(window).width();
		$("#width .pixels").text(width);
	}
	
	whatWidth();
	
	$(window).resize(whatWidth);
	/* End Dev Width ========================================= */


	/* Expanding CTAs */
	/* ======================================================= */
	if ($(".expanding-buckets").length) {
		$(".expanding-bucket").hover(
			function(){
				$(this).addClass("expand");
				$(this).siblings(".expanding-bucket").addClass("contract");
			},
			function(){
				$(this).removeClass("expand");
				$(this).siblings(".expanding-bucket").removeClass("contract");
			}
		);
	}
	/* End Expanding CTAs ==================================== */


	/* Sockstagram / Parallax */
	/* ======================================================= */
	if ($("html").hasClass("no-touch")) {
		// var s = skrollr.init();
	} else {
		// console.log("touch");
	}
	var s = skrollr.init();
	/* End Sockstagram / Parallax ============================= */


	/* Sockstagram / Swipe Gallery */
	/* ======================================================= */
	var cloned = false;
	function showgallery() {
		if ( $('#js-media-test').css("position") == "relative" && cloned == false ) {
			$("#sockstagram img").each(function(e){
				// clone the images
				var clone = $(this).clone().appendTo("#sockstagram-gallery .swiper-wrapper");

				// wash the images clean
				clone.removeAttr("data-anchor-target")
					 .removeAttr("data-0-bottom")
					 .removeAttr("data-1200-bottom")
					 .removeAttr("data-1500-bottom")
					 .removeAttr("style")
					 .removeClass();

				// add new markup
				clone.wrap("<div class='swiper-slide'></div>");

				// start the gallery
				var mySwiper = $('.swiper-container').swiper({
    								mode:'horizontal',
    								loop: true,
    								calculateHeight: true,
    								keyboardControl: true,
    								mousewheelControl: true
    							});

				$("#sockstagram-prev").click(function(e) { e.preventDefault(); mySwiper.swipePrev(); });
				$("#sockstagram-next").click(function(e) { e.preventDefault(); mySwiper.swipeNext(); });

			});
			cloned = true;
		}
	}
	
	showgallery();
	
	$(window).resize(showgallery);
	/* End Sockstagram / Swipe Gallery ======================= */


	/* ! SIDR */
	/* ======================================================= */
	$('#responsive-nav-button').sidr({
		name: 'sidr-main',
		side: 'right',
		source: '#nav'
	});
	/* End SIDR ============================================== */

});


/* Homepage Icons Scroll */
/* http://home.schoolrunner.org */
/* ======================================================= */
global = {
    siteUrl: "http://10.0.1.21/ynh/schoolrunner/",
    speed: 500,
    ease: "easeInOutExpo",
    mobileMax: 580,
    tabletMin: 581,
    tabletMax: 1010,
    desktopMin: 1011,
    desktopMax: 1200,
    desktopLargeMin: 1201,
    desktopLargeMax: 2E3
};
select = {
    html: $("html"),
    body: $("body"),
    htmlBody: $("html, body"),
    window: $(window),
    masthead: $("#home-icons-hldr"),
    mastheadShapes: $(".masthead-shapes")
};
device = {
    mobile: select.window.width() <= global.mobileMax,
    tablet: select.window.width() > global.mobileMax && select.window.width() <= global.tabletMax,
    desktop: select.window.width() > global.desktopMin && select.window.width() <= global.desktopMax,
    desktopLarge: select.window.width() > global.desktopLargeMin && select.window.width() <= global.desktopLargeMax,
    desktopMax: select.window.width() > global.desktopLargeMax,
    redefineObject: function () {
        device.mobile = select.window.width() <= global.mobileMax;
        device.tablet = select.window.width() >
            global.mobileMax && select.window.width() <= global.tabletMax;
        device.desktop = select.window.width() > global.desktopMin && select.window.width() <= global.desktopMax;
        device.desktopLarge = select.window.width() > global.desktopLargeMin && select.window.width() <= global.desktopLargeMax;
        device.desktopMax = select.window.width() > global.desktopLargeMax
    }
};
ui = {
buildMastheadAssets: function (c, b, e) {
    var a = "asset-1 asset-2 asset-3 asset-4 asset-5 asset-6 asset-7 asset-8 asset-9 asset-10 asset-11 asset-12 asset-13 asset-14".split(" "),
        d = utility.shuffle(a),
        f = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
        g = utility.shuffle(f),
        l = "anim-rise-asset";
    device.mobile && (l = "anim-rise-asset-mobile");
    for (var n = 0; n < c; n++) {
        var m = (12 * Math.random() + 10).toFixed(2),
            k = (11 * Math.random() +
                1).toFixed(2);
        select.masthead.append("<div class='masthead-asset size-large " + d[n] + " " + l + "' style='left:" + g[n] + "%; -webkit-animation-duration:" + m + "s; -moz-animation-duration:" + m + "s; animation-duration:" + m + "s; -webkit-animation-delay:" + k + "s; -moz-animation-delay:" + k + "s; animation-delay:" + k + "s;'></div>")
    }
    d = utility.shuffle(a);
    g = utility.shuffle(f);
    for (c = 0; c < b; c++) m = (12 * Math.random() + 10).toFixed(2), k = (11 * Math.random() + 1).toFixed(2), select.masthead.append("<div class='masthead-asset size-medium " + d[c] +
        " " + l + "' style='left:" + (g[c] + 5) + "%; -webkit-animation-duration:" + m + "s; -moz-animation-duration:" + m + "s; animation-duration:" + m + "s; -webkit-animation-delay:" + k + "s; -moz-animation-delay:" + k + "s; animation-delay:" + k + "s;'></div>");
    d = utility.shuffle(a);
    g = utility.shuffle(f);
    for (b = 0; b < e; b++) m = (12 * Math.random() + 10).toFixed(2), k = (11 * Math.random() + 1).toFixed(2), select.masthead.append("<div class='masthead-asset size-small " + d[b] + " " + l + "' style='left:" + (g[b] + -5) + "%; -webkit-animation-duration:" + m + "s; -moz-animation-duration:" +
        m + "s; animation-duration:" + m + "s; -webkit-animation-delay:" + k + "s; -moz-animation-delay:" + k + "s; animation-delay:" + k + "s;'></div>")
}
};
utility = {
    window: {
        checkWindowSize: function () {
            device.mobile ? select.html.addClass("mobile") : select.html.removeClass("mobile");
            device.tablet ? select.html.addClass("tablet") : select.html.removeClass("tablet");
            device.desktop ? select.html.addClass("desktop") : select.html.removeClass("desktop");
            device.desktopLarge ? select.html.addClass("desktop-large") : select.html.removeClass("desktop-large");
            device.desktopMax ? select.html.addClass("desktop-max") : select.html.removeClass("desktop-max")
        },
        resizeMastheadObjects: function () {
            select.window.width();
            select.window.height()
        }
    },
    checkBrowsers: function () {
        Modernizr.addTest("firefox", function () {
            return !!navigator.userAgent.match(/firefox/i)
        });
        Modernizr.addTest("ios", function () {
            return !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g)
        })
    },
    shuffle: function (c) {
        for (var b = c.length - 1; 0 < b; b--) {
            var e = Math.floor(Math.random() * (b + 1)),
                a = c[b];
            c[b] = c[e];
            c[e] = a
        }
        return c
    },
    animationRandomDelay: function (c) {
        $(this).each(function () {
            var b = (Math.random() * (c.data.rangeMax - c.data.rangeMin) + c.data.rangeMin).toFixed(2);
            $(this).attr("style",
                "-webkit-animation-delay:" + b + "s; -moz-animation-delay:" + b + "s; animation-delay:" + b + "s;")
        })
    },
    modernizrTests: function () {
        Modernizr.addTest("ipad", function () {
            return !!navigator.userAgent.match(/iPad/i)
        });
        Modernizr.addTest("iphone", function () {
            return !!navigator.userAgent.match(/iPhone/i)
        });
        Modernizr.addTest("ipod", function () {
            return !!navigator.userAgent.match(/iPod/i)
        });
        Modernizr.addTest("appleios", function () {
            return Modernizr.ipad || Modernizr.ipod || Modernizr.iphone
        })
    }
};
init = {
    everything: function () {
        utility.window.checkWindowSize();
        utility.checkBrowsers();
        utility.modernizrTests();
        device.mobile && Modernizr.cssanimations ? ui.buildMastheadAssets(0, 3, 5) : device.tablet || device.desktop && Modernizr.cssanimations ? ui.buildMastheadAssets(1, 4, 6) : Modernizr.cssanimations && ui.buildMastheadAssets(3, 4, 5);
        // Modernizr.svg || (select.svgImg.each(function () {
        //     var c = $(this).data("fallback");
        //     $(this).attr("src",
        //         c)
        // }), select.svgAsset.remove());
        // Modernizr.appleios && select.svgImg.each(function () {
        //     var c = $(this).data("ios");
        //     $(this).attr("src", c)
        // })
    }
};
$(window).resize(function () {
    device.redefineObject();
    utility.window.checkWindowSize();
    utility.window.resizeMastheadObjects()
});
window.onload = function () {};
$(document).ready(function () {
    init.everything()
});
/* End Homepage Icons Scroll  ============================= */