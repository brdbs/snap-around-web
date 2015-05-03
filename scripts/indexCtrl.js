'use strict';

var controllername = 'indexCtrl';

var deps = ['translate','$scope'];

function controller(Translate, $scope) {
	var activate = function() {
		$scope.translate = Translate;
	};
	activate();
}

controller.$inject = deps;

app.controller('indexCtrl',controller);
