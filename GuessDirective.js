// T: this is the directive for your <ga-guess></ga-guess> app
(function() {
	'use strict';

	angular
		.module('guessApp')
		// T: here we declare our directive, gaGuess is converted to snail-case: ga-guess
		.directive('gaGuess', GuessDirective);

	function GuessDirective() {
		// T: this is the description of how works the directive
		var directive = {
			// T: here it says that it works as element, that means <element></element>, not <ANY attribute>... or others
			restrict: 'E',
			// T: when you use this directive, angular puts the content of the following template inside
			templateUrl: './GuessDirective.tpl.html',
			// T: we use scope to isolate our directives and have less problems
			scope: {},
			// T: here we ask to use a new instance of the controller that will be associated...
			controller: GuessController,
			// T: ...and we will use it as vm inside the tempalte
			controllerAs: 'vm',
		};

		return directive;
	}

	// T: this is the controller that we will use
	GuessController.$inject = [];
	function GuessController  () {
		var vm = this;

		// T: this are the methods/values that we show to the view
		vm.number = 0;		
		vm.guessed = false;
		vm.result = '';
		vm.guess = guess;//()

		// T: here it thinks a secret number
		var secret = Math.ceil(Math.random() * 10);

		// T: the function that guesses a number
		function guess() {
			if (secret === vm.number) {
				vm.result = 'the same';
			} else if (secret < vm.number) {
				vm.result = 'smaller';
			} else if (secret > vm.number) {
				vm.result = 'greater';
			}
			vm.guessed = true;
		}
	}
})();