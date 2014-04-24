
(function($) {

    $.fn.cloneReposition = function( options ) {

		var settings = $.extend({
			// defaults
			classAdded: "cloned",
			idSuffix: "-cloned", 
		}, options);

		return this.each(function() {

			// add the cloned class to og element
			$(settings.inserAfter).addClass(settings.classAdded);
			$(this).clone().insertAfter($(settings.inserAfter));
			
		});

    }

}(jQuery));