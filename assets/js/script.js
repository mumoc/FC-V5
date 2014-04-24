/* Maggianos Little Italy
 * ..........................................................................
 * http://maggianos.com/
 * designed by Switch Creative Group
 * http://switch.is
*/

// @codekit-prepend "jquery-1.10.2.min.js", "bootstrap-select.min.js", "bootstrap-checkbox.js", "moment.min.js", "bootstrap-datetimepicker.min.js", "jquery.sidr.min.js", "bootstrap.min.js", "geoPosition.js", "script-geolocation.js";

$(document).ready(function(){

	/* ! Dev Width */
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


	/* ! Reposition Elements */
	/* clone and insert the elements for mobil versions */
	/* ======================================================= */

		/* Locations Reposition Elements */
		if ( $("body").hasClass("locations") ) {

			var cloned = false;
			function reposition_location() {

				if ( $('#js-media-test').css("position") == "static" && cloned == false ) {

					$("#location-contact-buttons").clone()
												  .insertAfter("#location-navbar")
												  .attr("id", "location-contact-buttons-cloned")
												  .removeClass();
					$("#location-cta").clone()
									 .insertAfter("#location-photo-header")
									 .attr("id", "location-cta-cloned")
									 .addClass("cloned");

					$("#location-description").clone()
											  .insertAfter("#map")
											  .attr("id", "location-description-cloned");

					cloned = true;
				}
			}
			
			reposition_location();
			
			$(window).resize(reposition_location);
		}
		/* ======================================================= */


		/* Banquets Reposition Elements */
		if ( $("body").hasClass("banquets") ) {

			var cloned = false;
			function reposition_banquets() {
				if ( $('#js-media-test').css("position") == "static" && cloned == false ) {
					$(".section-header-well").addClass('hidden-xs')
											 .clone()
											 .insertAfter("#banquests-ctas")
											 .addClass("visible-xs").removeClass('hidden-xs');
					
					cloned = true;
				}
			}
			
			reposition_banquets();
			
			$(window).resize(reposition_banquets);
		}
		/* ======================================================= */
	

	/* ======================================================= */

	
	/* ! SIDR - Sidebar Responsive */
	/* http://www.berriart.com/sidr/ */
	/* ======================================================= */
	$('#responsive-menu-button').sidr({
      name: 'sidr-main',
      renaming: false,
      source: '#main-nav'
    });
    $("#responsive-menu-button-close a").click(function(e){
    	e.preventDefault();
    	 $.sidr('close', 'sidr-main');
    });



	/* ! Forms */
	/* ======================================================= */
	$('.selectpicker').selectpicker();
	$('input.checkbox').checkbox({
		checkedClass: 'fa fa-check-square-o',
		uncheckedClass: 'fa fa-square-o'
	});
	$('.datepicker').datetimepicker({
		pickTime: false,
		startDate: (new Date())
	});

	$(".timepicker").datetimepicker({
		pickDate: false
	});


});















