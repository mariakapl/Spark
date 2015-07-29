angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Medicines) {
	$scope.scanClick = function() {
		Medicines.add({id: 1, name: 'Mucolit', exp: new Date(2010,1,1), expired: false});
		navigator.camera.getPicture(function(imageURI) {

		// imageURI is the URL of the image that we can use for
		// an <img> element or backgroundImage.

		}, function(err) {

		// Ruh-roh, something bad happened
		});
		
	};
		
})

.controller('MedicineCtrl', function($scope, Medicines, Donations){
	$scope.meds = Medicines;
	$scope.meds.checkDates();
	$scope.remove = function(med){
		Medicines.remove(med);
	};
	$scope.donate = function(med){
		Donations.add(med);
	};
	$scope.formatDate = function(date){
		return "  "+date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
	};
})

.controller('DonationCtrl', function($scope, Medicines, Donations){
	$scope.meds = Donations;
	$scope.meds.checkDates();
	$scope.remove = function(med){
		Donations.remove(med);
	};
	$scope.formatDate = function(date){
		return "  "+date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
	};
});
