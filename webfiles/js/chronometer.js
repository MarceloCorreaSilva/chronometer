/**
 * autors: Marcelo Corrêa Silva
 * autors: Diego Henriques 	
 *
 */
var Chronometer = {

	/**
	 *		
	 */
	hours: function() {
		var actualHours = new Date();

		hours   = actualHours.getHours();
		minutes = actualHours.getMinutes();
		seconds = actualHours.getSeconds();

		return hours + ':' + minutes + ':' + seconds;
		setTimeout('hours()', 1000);
	}, 
	
	/**
	 * 
	 */
	day: function() {
		var format = {
			pt_Br: '%s/%s/%s' 
		};
		var actualDay = new Date();

		return actualDay.getDate() + '/' + ( actualDay.getMonth() + 1 ) + '/' + actualDay.getFullYear();
	},

	/**
	 * 
	 */

}
