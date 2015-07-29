angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Medicines) {
	$scope.scanClick = function() {
		Medicines.add({id: 1, name: 'Mucolit', exp: '1/2/1234'});
		navigator.camera.getPicture(function(imageURI) {

		// imageURI is the URL of the image that we can use for
		// an <img> element or backgroundImage.

		}, function(err) {

		// Ruh-roh, something bad happened
		});
		
	};
		
})

.controller('MedicineCtrl', function($scope, Medicines){
	$scope.meds = Medicines;
});