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

	GuessController.$inject = ['guessState'];
	function GuessController  ( guessState ) {
		var vm = this;

		vm.number = 0;		
		vm.guessed = false;
		vm.result = '';
		vm.guess = guess;//()

		var secret = Math.ceil(Math.random() * 10);

		function guess() {
			vm.result = guessState.guess(vm.number);
			vm.guessed = true;
		}
	}
})();