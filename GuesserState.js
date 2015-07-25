(function() {
	'use strict';

	angular
		.module('guessApp')
		.factory('guesserState', GuesserStateFactory);

	function GuesserStateFactory() {
		var state = {
			guess: guess,
		};

		var secret = Math.ceil(Math.random() * 10);

		return state;

		function guess(number) {
			var result;

			if (secret === number) {
				result = 0;
			} else if (secret < number) {
				result = -1;
			} else if (secret > number) {
				result = +1;
			}
			return result;
		}
	}

})();