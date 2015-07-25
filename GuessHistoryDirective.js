(function() {
	'use strict';

	angular
		.module('guessApp')
		.directive('gaGuessHistory', GuessHistoryDirective);

	function GuessHistoryDirective() {
		var directive = {
			restrict: 'E',
			templateUrl: './GuessHistoryDirective.tpl.html',
			scope: {},
			controller: GuessHistoryController,
			controllerAs: 'vm',
			bindToController: {
				history: '='
			},
		};

		return directive;
	}

	GuessHistoryController.$inject = [];
	function GuessHistoryController  () {
	}

})();