(() => {
    'use strict';

    angular
        .module('droneTracker')
        .factory('map', ($http) => {


            var apiURL = 'http://api.dronestre.am/data'

            //------------------------------------
            // Drone Strike Array
            //------------------------------------
            let strikeArray = []

            //------------------------------------
            // Return items from apicall
            //------------------------------------
            const getStrikes = () => {
                return strikeArray
                }

            //------------------------------------
            // make API call
            //------------------------------------    
            let apicall = $http({
                method: 'GET',
                url: apiURL
            }).then(function successCallback(response) {
                let data = response.data.strike
                strikeArray.push(data)
            }, function errorCallback(response) {
                console.log("something went wrong")
            });

            return {
                getStrikes
            }

        });

})()
