(() => {
    'use strict';

    angular
        .module('droneTracker')
        .controller('asideController', function(map) {
            let vm = this

            //------------------------------------
            // Get drone strike array from map factory
            //------------------------------------
            vm.drones = () => { return map.strikeArray };

            //------------------------------------
            // Either get all strikes or clear strikes
            //------------------------------------        
            vm.clear = () => {
                map.clear();
            }

            vm.all = () => {
                map.all();
            }

            //------------------------------------
            // Sort By Country
            //------------------------------------
            vm.filterByCountry = (country) => {
                map.filterByCountry(country);
            }   

            //------------------------------------
            // Sort By Year
            //------------------------------------
            vm.filterByYear = (year) => {
                map.filterByYear(year);
            }   

    })
})()
