/**
 * autors: Marcelo Corrêa Silva
 * autors: Diego Henriques 	
 *
 */
var Chronometer = {

	/**
	 * Esta função retorna a hora atual do servidor
	 * 
	 * @example 
	 *   getCurrentTime(); // 12:00:00
	 * 
	 * @returns {String}
	 */
	getCurrentTime: function() {
		var currentTime = new Date();

		hours   = formatTwoDecimalPlaces( currentTime.getHours() );
		minutes = formatTwoDecimalPlaces( currentTime.getMinutes() );
		seconds = formatTwoDecimalPlaces( currentTime.getSeconds() );

		return hours + ':' + minutes + ':' + seconds;
	}, 
	
	/**
	 * Esta função retorna a data atual do servidor no formato dia/mês/ano
	 * 
	 * @example 
	 *   getCurrentDay(); // 21/09/2014
	 * 
	 * @returns {String}
	 */
	getCurrentDay: function() {
		var currentDay = new Date();

		day   = formatTwoDecimalPlaces( currentDay.getDate() );
		month = formatTwoDecimalPlaces( currentDay.getMonth() + 1 );
		year  = formatTwoDecimalPlaces( currentDay.getFullYear() );

		return day + '/' + month + '/' + year;
	},

	/**
	 * Esta função retorna um cronometro regressivo entre a data atual e a data informada
	 * 
	 * @example 
	 *   regressive(new Date(2014, 9, 21, 12, 0, 0, 0)); // 00:00:00:15:123
	 * 
	 * @param   {Date} obrigatorio   Parametro obrigatório
	 * @returns {String}
	 */
	regressive: function(date) {
		if (date instanceof Date) {

			if ( currentDateInMilliseconds() < date.getTime() ) {

				var amountOfMiliseconds = date.getTime() - currentDateInMilliseconds();

				var days = Math.floor(amountOfMiliseconds / 86400000);
				amountOfMiliseconds = amountOfMiliseconds % 86400000;
				
				var hours = Math.floor(amountOfMiliseconds / 3600000);
				amountOfMiliseconds = amountOfMiliseconds % 3600000;
				
				var minutes = Math.floor(amountOfMiliseconds / 60000);
				amountOfMiliseconds = amountOfMiliseconds % 60000;
					
				var seconds = Math.floor(amountOfMiliseconds / 1000);
				amountOfMiliseconds = amountOfMiliseconds % 1000;

				days 		= formatTwoDecimalPlaces( days );
				hours 		= formatTwoDecimalPlaces( hours );
				minutes 	= formatTwoDecimalPlaces( minutes );
				seconds 	= formatTwoDecimalPlaces( seconds ); 

			} else {

				days 		= '00';
				hours 		= '00';
				minutes 	= '00';
				seconds 	= '00';
				amountOfMiliseconds = '00';

			};

			return days + ':' + hours + ':' + minutes + ':' + seconds + ':' + amountOfMiliseconds;

		} else{
			print('O objeto passado não corresponde a uma data. ');
		};
	},

	/**
	 * Esta função retorna um cronometro progressivo
	 * 
	 * @example 
	 *   progressive(); // 00:00:00:15:123
	 * 
	 * @returns {String}
	 */
	progressive: function() {

	}
}

/**
 * Esta função retorna um numero formatado com duas casas decimais, no caso de valores menores que 10
 * 
 * @example 
 *   formatTwoDecimalPlaces(9); // 09
 * 
 * @param   {Number} obrigatorio   Parametro obrigatório
 * @returns {String}
 */
function formatTwoDecimalPlaces(val) {
	return (val <= 9 && val >= 0) ? '0'+val : (val < 0) ? val : val;
}

/**
 * Esta função retorna o numero de miliseguntos existentes da data/hora atual
 * 
 * @example 
 *   currentDateInMilliseconds(); // 1000
 * 
 * @returns {Number}
 */
function currentDateInMilliseconds() {
	var currentTime 	= new Date();
	actualYear 			= currentTime.getFullYear();
	actualMonth 		= currentTime.getMonth() + 1;
	actualDay 			= currentTime.getDate();
	actualHours 		= currentTime.getHours();
	actualMinutes 		= currentTime.getMinutes();
	actualSeconds 		= currentTime.getSeconds();
	actualMilliseconds 	= currentTime.getMilliseconds();
		
	var currentDay = new Date(actualYear, actualMonth, actualDay, actualHours, actualMinutes, actualSeconds, actualMilliseconds);

	return currentDay.getTime();
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