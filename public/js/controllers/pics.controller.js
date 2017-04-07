app.controller('PicsController', PicsController);

function PicsController(picsService, $location, $filter) {
	var vm = this;

	vm.pics = [];
	vm.getPics = function(){
		picsService.getPics().then(function(data){
			vm.pics = data.data.children;
			vm.pics.shift();
		}, function(data){
			console.log("Error: ", data);
		});
	}();

  vm.sortBy = function(propertyName) {
    vm.pics = $filter('orderBy')(vm.pics, propertyName);
  };

	vm.goToPic = function(picData){
		$location.path('pic/'+ picData.id);
	};

};