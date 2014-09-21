/**
 * autors: Marcelo Corrêa Silva
 * autors: Diego Henriques 	
 *
 */
var Chronometer = {

	/**
	 *		
	 */
	getCurrentTime: function() {
		var currentTime = new Date();

		hours   = formatTwoDecimalPlaces( currentTime.getHours() );
		minutes = formatTwoDecimalPlaces( currentTime.getMinutes() );
		seconds = formatTwoDecimalPlaces( currentTime.getSeconds() );

		return hours + ':' + minutes + ':' + seconds;
	}, 
	
	/**
	 * 
	 */
	getCurrentDay: function() {
		var currentDay = new Date();

		day   = formatTwoDecimalPlaces( currentDay.getDate() );
		month = formatTwoDecimalPlaces( currentDay.getMonth() + 1 );
		year  = formatTwoDecimalPlaces( currentDay.getFullYear() );

		return day + '/' + month + '/' + year;
	},

}

/**
 * 
 */
function formatTwoDecimalPlaces(val) {
	return (val < 10) 	 ? '0'+val    : val;
}


// Possibilidade de se criar um Plugin JQuery
(function($) {

	/**
	 * 
	 */
	$.fn.displayCurrentTime = function() {
    	return this.each(function() {
        	$(this).html(Chronometer.getCurrentTime());
    	});
	};

	/**	
	 * 
	 */
	$.fn.displayCurrentDay = function() {
    	return this.each(function() {
        	$(this).html(Chronometer.getCurrentDay());
    	});
	};

})(jQuery);	