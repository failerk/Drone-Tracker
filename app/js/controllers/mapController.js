(() => {
    'use strict';

    angular
        .module('droneTracker')
        .controller('mapController', function(NgMap, map) {
            let vm = this

            //------------------------------------
            // Get drone strike array from map factory
            //------------------------------------
            vm.drones = () => { return map.strikeArray };
    })
})()
