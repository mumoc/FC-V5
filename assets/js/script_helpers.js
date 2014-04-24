/* Company
 * ..........................................................................
 * http://www.company.com/
 * designed by Switch Creative Group
 * http://www.groupswitch.com
*/


$(document).ready(function(){
	
	
	/* ! Dev Width */
	/* ======================================================= */
	function whatWidth() {
		if (!$("#width").length) {
			$("body").append('<div id="width" class="dev alert alert-info"><p>My browser is <strong>100</strong>px wide!</p></div>');
		}
		var width = $(window).width();
		$("#width strong").text(width);
	}
	
	whatWidth();
	
	$(window).resize(whatWidth);
	/* End Dev Width ========================================= */
	
	
	

	/* ! Carousel Dots */
	/* ======================================================= */
	
	// call the initial carousel
	$('#home_carousel').carousel();
	
		// place additional navigation
		$("#home_carousel .carousel-inner").each(function(){
			
			// append the additional navigation holder
			$(this).parent().append("<div id='carousel_dots'><ul></ul></div>");
			
			// add a nav item for each item in the carousel
			$(this).find('.item').each(function(e){
				
				// number the items in the carousel
				$(this).attr("id", "item_"+e);
				
				// add the navigation items to 
				// the unordered list & number them
				$("#carousel_dots ul").append("<li class='item_" + e + "'><a href='#home_carousel'>&bull;</a></li>");
				
				// make the first item active "on"
				if (e==0) {
					$("#carousel_dots li:first-child a").addClass("on");
				}
				
			});
		
		});
		
		
		// create click events
		$("#carousel_dots a").click(function(){
				
				// grab the links parent's class
				var clas = $(this).parent().attr("class");
				
				// find the slide number from the class
				// make sure that you are sending the carousel a
				// number and not a string, :)
				var item = Number(clas.substr(5));
				
				// send the carousel to that item
				$('#home_carousel').carousel(item);
				
				return false;
			});
		
		
		// tie into the slid event which triggers after an
		// item has slid in the carousel
		$('#home_carousel').on('slid', function () {
			
			// remove the on class on all list items
			$("#carousel_dots .on").removeClass("on");
			
			// find current active item's id
		  var active = $(this).find('.active').attr('id');
		  
		  // add the on class to the coresponding list nav
		  $("#carousel_dots ." + active + " a").addClass("on");
			
		});
		/* End Carousel Dots ===================================== */
		
		
		
		
		/* ! Form Helpers */
		/* ======================================================= */
		function placeholderIsSupported() {
			test = document.createElement('input');
			return ('placeholder' in test);
		}
		
		if (placeholderIsSupported) {
			$("form label").addClass("hide");
		}
		/* End Form Helpers ====================================== */
		


	
});
