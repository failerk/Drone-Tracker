(() => {
    'use strict';

    angular
        .module('droneTracker')
        .factory('map', ($http) => {


            return new DroneStrike();

            function DroneStrike() {
                let strike = this;

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
                strike.clear = () => {
                    strike.strikeArray = [];
                };

                //------------------------------------
                // Load all strikes
                //------------------------------------
                strike.all = () => {
                    strike.strikeArray = strike.allStrikes;
                }

                //------------------------------------
                // Filter by country
                //------------------------------------
                strike.filterByCountry = (country) => {
                    strike.strikeArray = [];
                    let update = strike.strikeArray

                    strike.allStrikes.map(strike => {
                        if (strike.country === country) {
                            update.push(strike);
                        }
                    });
                }

                //------------------------------------
                // Filter by year
                //------------------------------------
                strike.filterByYear = (year) => {
                    strike.strikeArray = [];
                    let update = strike.strikeArray

                    strike.allStrikes.map(strike => {
                        let newDate = strike.date.slice(0, 4)
                        console.log(newDate)
                        if (newDate === year) {
                            update.push(strike);
                        }
                    });
                }
                            
                function loadData() {
                    //------------------------------------
                    // make API call
                    //------------------------------------    
                    let apicall = $http({
                        method: 'GET',
                        url: 'http://api.dronestre.am/data'
                    }).then(function successCallback(response) {
                        let data = response.data.strike;
                        strike.allStrikes = data;
                        strike.strikeArray = strike.allStrikes;
                    }, function errorCallback(response) {
                        console.log("something went wrong")
                    })
                }
                
            }

        });

})()
