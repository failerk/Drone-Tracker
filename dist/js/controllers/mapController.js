'use strict';

(function () {
    'use strict';

    angular.module('droneTracker').controller('mapController', function (NgMap, map) {
        var vm = this;

        //------------------------------------
        // Get drone strike array from map factory
        //------------------------------------
        vm.drones = function () {
            return map.strikeArray;
        };
    });
})();