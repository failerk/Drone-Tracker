(() => {
    'use strict';

    angular
        .module('droneTracker')
        .controller('mapController', function(NgMap, map) {
            let vm = this

            //------------------------------------
            // Set lazy map load url with api key
            //------------------------------------
            vm.googleMapsUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA7uvUtnNgXu1fX7TKPzSK6Ne4WVXBaprI"

            //------------------------------------
            // Get drone strike array from map factory
            //------------------------------------
            vm.drones = map.getStrikes()

        
                    
    })
})()
