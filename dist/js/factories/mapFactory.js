'use strict';

(function () {
    'use strict';

    angular.module('droneTracker').factory('map', function ($http) {

        var apiURL = 'http://api.dronestre.am/data';

        //------------------------------------
        // Drone Strike Array
        //------------------------------------
        var strikeArray = [];

        //------------------------------------
        // Return items from apicall
        //------------------------------------
        var getStrikes = function getStrikes() {
            return strikeArray;
        };

        //------------------------------------
        // make API call
        //------------------------------------    
        var apicall = $http({
            method: 'GET',
            url: apiURL
        }).then(function successCallback(response) {
            var data = response.data.strike;
            strikeArray.push(data);
        }, function errorCallback(response) {
            console.log("something went wrong");
        });

        return {
            getStrikes: getStrikes
        };
    });
})();