(function() {
	'use strict';

	angular
		.module('guessApp')
		.directive('gaGuess', GuessDirective);

	function GuessDirective() {
		var directive = {
			restrict: 'E',
			templateUrl: './GuessDirective.tpl.html',
			scope: {},
			controller: GuessController,
			controllerAs: 'vm',
		};

		return directive;
	}

	GuessController.$inject = ['guesserState'];
	function GuessController  ( guesserState ) {
		var vm = this;

		vm.number = 0;
		vm.guesser = guesserState;		
	}
	
})();