angular.module('starter.services', [])

.factory('Medicines', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var meds = [{
    id: 0,
    name: 'Coldex',
    exp: new Date(2000,1,1),
	expired: false
  }];
  return {
    all: function() {
      return meds;
    },
    remove: function(med) {
      meds.splice(meds.indexOf(med), 1);
    },
    get: function(medId) {
      for (var i = 0; i < meds.length; i++) {
        if (meds[i].id === parseInt(medId)) {
          return meds[i];
        }
      }
      return null;
    },
	add: function(med){
		meds.push(med);
	},
	checkDates: function(){
		var now = (new Date());
		for(var i = 0; i < meds.length ; i++){
			if(now < meds[i].exp){
				meds[i].expired = true;
			}
		}
	}
  };
})

.factory('Donations', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var meds = [];
  return {
    all: function() {
      return meds;
    },
    remove: function(med) {
      meds.splice(meds.indexOf(med), 1);
    },
    get: function(medId) {
      for (var i = 0; i < meds.length; i++) {
        if (meds[i].id === parseInt(medId)) {
          return meds[i];
        }
      }
      return null;
    },
	add: function(med){
		meds.push(med);
	},
	checkDates: function(){
		var now = (new Date());
		for(var i = 0; i < meds.length ; i++){
			if(now < meds[i].exp){
				meds[i].expired = true;
			}
		}
	}
  };
});
