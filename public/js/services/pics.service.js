app.factory('picsService', picsService);

function picsService($http, $q) {

	picsService = {};
	picsService.pics = [];

	picsService.getPics = function(){
		return $http({
		method: 'GET',
		url: 'http://www.reddit.com/r/pics/.json'
	}).then(function(response) {    
			picsService.pics = response.data.data.children;
			return response.data;
		});
	};

	picsService.getCurrentPic = function(picId) {

    var deferred = $q.defer();

    console.log("process started, id: ", picId);
    if (picsService.pics.length == 0) {
        console.log("empty");
        picsService.getPics().then(function(data) {
            picsService.pics = data.data.children;
            deferred.resolve(picsService.getCurrentPic(picId));
        }, function(error) {
            deferred.reject(error.message || error)
        });
    } else {
        console.log("not empty");
        var pic;
        for (var i = picsService.pics.length - 1; i >= 0; i--) {
            if (picsService.pics[i].data.id == picId) {
                pic = picsService.pics[i].data;
                console.log("found: ", pic);
                break;
            };
        };
        if (pic) {
            deferred.resolve(pic)
        } else {
            deferred.reject('pic not found: ' + id)
        }
    };

    return deferred.promise;
	};

	return picsService;
};