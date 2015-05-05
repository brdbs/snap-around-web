'use strict';
var DEV_API = "localhost:3000/v1.0/"
var servicename = 'api';

deps=['$q','$http'];

function service($q,$http) {
	var action = new Object();

    action.getUsers = function(){
    	var deferred = $q.defer();
        $http.get(DEV_API.apiEndpoint + '/users/all')
                .success(function(res){
                    deferred.resolve(res);
                });
        return deferred.promise;
    };

    action.getPosts = function(){
    	// var deferred = $q.defer();
     //    $http.get(DEV_API.apiEndpoint + '/posts/all')
     //            .success(function(res){
     //                deferred.resolve(res);
     //            });
     //    return deferred.promise;
     	var startDate = new Date();
        return [
        {
        	'id':4,
        	'msg': 'Ceci est mon premier post sur snapAround',
        	'createdAt': startDate,
        	'expires': startDate,
        	'pic': '/img/myphoto.jpg',
        	'user': {
        		'name':'Hi my name is..',
        		'fbUserId':'idFb'
        	}
        },
    	{
        	'id':5,
        	'msg': 'Ceci est mon premier post sur snapAround',
        	'pic': '/img/myphoto.jpg',
        	'user': {
        		'name':'Hi my name is..',
        		'fbUserId':'idFb'
        	}
    	},
    	{
        	'id':6,
        	'msg': 'Ceci est mon premier post sur snapAround',
        	'pic': 'img/myphoto.jpg',
        	'user': {
        		'name':'Slim Shady',
        		'fbUserId':'idFb'
        	},
        }];
    };
	return action;
}

service.$inject = deps;

app.factory(servicename, service);
