(function() {
	'use strict';

	angular
		.module('guessApp')
		.directive('gaGuessResult', GuessResultDirective);

	function GuessResultDirective() {
		var directive = {
			restrict: 'E',
			templateUrl: './GuessResultDirective.tpl.html',
			scope: {},
			controller: GuessResultController,
			controllerAs: 'vm',
			bindToController: {
				result: '='
			},
		};

		return directive;
	}

	GuessResultController.$inject = [];
	function GuessResultController  () {
	}

})();