app.controller('CurrentPicController', CurrentPicController);

function CurrentPicController(picsService, $location, $routeParams) {
	var vm = this;

	vm.picId = $routeParams.picId;

	vm.backToPictures = function(){
		$location.path("/");
	};

	picsService.getCurrentPic(vm.picId).then(function(data){
	    vm.currentPic = data;
	    console.log("currentPic: ", vm.currentPic);
	}, function(error) {
	    console.log('error occured: ' + error);
	});
};