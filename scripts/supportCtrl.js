'use strict';

var controllername = 'supportCtrl';

var deps = ['translate','$scope'];

function controller(Translate, $scope) {
	var activate = function() {
		$scope.translate = Translate;
	};
	activate();

	$scope.sendMail = function() {
		//send mail to me
	}
}

controller.$inject = deps;

app.controller(controllername,controller);
