(function() {
    'use strict';

    angular
        .module('kcmDashboardApp.kcm-header')
        .directive('kcmHeader', kcmHeader);

    function kcmHeader () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/shared/kcm-header/kcm-header.directive.html'
        };
    }
})();
