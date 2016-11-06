'use strict';

(function () {
    'use strict';

    angular.module('droneTracker').factory('map', function ($http) {

        return new DroneStrike();

        function DroneStrike() {
            var strike = this;

            //------------------------------------
            // Drone Strike Array
            //------------------------------------
            strike.allStrikes = [];
            strike.strikeArray = [];

            //------------------------------------
            // Load the data
            //------------------------------------
            loadData();

            //------------------------------------
            // Clear items
            //------------------------------------
            strike.clear = function () {
                strike.strikeArray = [];
            };

            //------------------------------------
            // Load all strikes
            //------------------------------------
            strike.all = function () {
                strike.strikeArray = strike.allStrikes;
            };

            //------------------------------------
            // Filter by country
            //------------------------------------
            strike.filterByCountry = function (country) {
                strike.strikeArray = [];
                var update = strike.strikeArray;

                strike.allStrikes.map(function (strike) {
                    if (strike.country === country) {
                        update.push(strike);
                    }
                });
            };

            //------------------------------------
            // Filter by year
            //------------------------------------
            strike.filterByYear = function (year) {
                strike.strikeArray = [];
                var update = strike.strikeArray;

                strike.allStrikes.map(function (strike) {
                    var newDate = strike.date.slice(0, 4);
                    console.log(newDate);
                    if (newDate === year) {
                        update.push(strike);
                    }
                });
            };

            function loadData() {
                //------------------------------------
                // make API call
                //------------------------------------    
                var apicall = $http({
                    method: 'GET',
                    url: 'http://api.dronestre.am/data'
                }).then(function successCallback(response) {
                    var data = response.data.strike;
                    strike.allStrikes = data;
                    strike.strikeArray = strike.allStrikes;
                }, function errorCallback(response) {
                    console.log("something went wrong");
                });
            }
        }
    });
})();