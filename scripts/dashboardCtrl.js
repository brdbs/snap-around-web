'use strict';

var controllername = 'dashboardCtrl';

var deps = ['api' ,'translate','$scope'];

function controller(Api,Translate, $scope) {
	var activate = function() {
		$scope.translate = Translate;
		$scope.posts = Api.getPosts();
		$scope.users = Api.getUsers();
	};
	activate();
}

controller.$inject = deps;

app.controller(controllername,controller);
