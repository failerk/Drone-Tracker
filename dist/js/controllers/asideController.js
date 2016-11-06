'use strict';

(function () {
    'use strict';

    angular.module('droneTracker').controller('asideController', function (map) {
        var vm = this;

        //------------------------------------
        // Get drone strike array from map factory
        //------------------------------------
        vm.drones = function () {
            return map.strikeArray;
        };

        //------------------------------------
        // Either get all strikes or clear strikes
        //------------------------------------        
        vm.clear = function () {
            map.clear();
        };

        vm.all = function () {
            map.all();
        };

        //------------------------------------
        // Sort By Country
        //------------------------------------
        vm.filterByCountry = function (country) {
            map.filterByCountry(country);
        };

        //------------------------------------
        // Sort By Year
        //------------------------------------
        vm.filterByYear = function (year) {
            map.filterByYear(year);
        };
    });
})();