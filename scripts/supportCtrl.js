'use strict';

var controllername = 'supportCtrl';

var deps = ['translate','$scope'];

function controller(Translate, $scope) {
	var activate = function() {
		$scope.translate = Translate;
	};
	activate();
	$scope.mailSend = false;

	$scope.sendMail = function() {
		//send mail to me
		$scope.mailSend = true;

	}
}

controller.$inject = deps;

app.controller(controllername,controller);
